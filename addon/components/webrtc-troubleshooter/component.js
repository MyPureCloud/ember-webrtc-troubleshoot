/* global WebRTCTroubleshooter */
import Ember from 'ember';
import layout from './template';

const {
  ERROR_CODES,
  TestSuite,
  AudioTest,
  VideoTest,
  ConnectivityTest,
  AdvancedCameraTest,
  ThroughputTest,
  VideoBandwidthTest,
  AudioBandwidthTest,
  SymmetricNatTest
} = WebRTCTroubleshooter.default;

export default Ember.Component.extend({
  layout,
  classNames: ['webrtc-troubleshooter'],

  checkingMicrophone: true,
  checkMicrophoneSuccess: false,
  checkingCamera: true,
  checkCameraSuccess: false,
  checkingCameraAdvanced: true,
  checkCameraAdvancedSuccess: false,
  checkingSymmetricNat: true,
  checkingConnectivity: true,
  checkConnectivitySuccess: false,
  checkingThroughput: true,
  checkingThroughputSuccess: false,
  checkingBandwidth: true,
  checkBandwidthSuccess: false,
  showBandwidthStats: false,

  bandwidthMediaError: false,
  bandwidthIceError: false,

  saveSuiteToWindow: false,

  video: true,
  audio: true,
  logger: null,

  iceServers: null,

  init () {
    this._super(...arguments);
    if (!this.get('logger')) {
      this.set('logger', Ember.Logger);
    }
    this.startTroubleshooter();
  },

  safeSetProperties (obj) {
    Ember.run(() => {
      if (this.get('isDestroyed') || this.get('isDestroying')) {
        return;
      }
      this.setProperties(obj);
    });
  },

  startTroubleshooter: function () {
    if (!navigator.mediaDevices) {
      this.set('video', false);
      this.set('audio', false);
    }
    const iceConfig = {
      iceServers: this.get('iceServers') || [],
      iceTransports: 'relay',
      logger: this.get('logger')
    };
    const mediaOptions = this.get('mediaOptions') || { audio: true, video: true, logger: this.get('logger') };

    const testSuite = new TestSuite({ logger: this.get('logger') });

    if (this.get('saveSuiteToWindow')) {
      window.testSuite = testSuite;
    }

    // TODO: logs for rejections?

    if (this.get('audio')) {
      const audioTest = new AudioTest(mediaOptions);
      audioTest.promise.then((/* logs */) => {
        this.safeSetProperties({
          checkingMicrophone: false,
          checkMicrophoneSuccess: true,
          checkingVolume: false,
          checkVolumeSuccess: true
        });
      }, (err) => {
        this.logger.error('audioTest failed', err);
        const micIssue = err.message !== 'audio timeout';
        const volumeIssue = err.message === 'audio timeout';
        this.safeSetProperties({
          checkingMicrophone: false,
          checkMicrophoneSuccess: !micIssue,
          checkingVolume: false,
          checkVolumeSuccess: !volumeIssue
        });
      });

      testSuite.addTest(audioTest);
    }

    if (this.get('video')) {
      const videoTest = new VideoTest(mediaOptions);
      videoTest.promise.then((/* logs */) => {
        this.safeSetProperties({
          checkingCamera: false,
          checkCameraSuccess: true
        });
      }, (err) => {
        this.logger.error('videoTest failed', err);
        this.safeSetProperties({
          checkingCamera: false,
          checkCameraSuccess: false
        });
      });

      const advancedCameraTest = new AdvancedCameraTest(mediaOptions);
      advancedCameraTest.promise.then((/* logs */) => {
        this.safeSetProperties({
          checkingCameraAdvanced: false,
          checkCameraAdvancedSuccess: true
        });
      }, (err) => {
        this.logger.error('advancedCameraTest failed', err);
        this.safeSetProperties({
          checkingCameraAdvanced: false,
          checkCameraAdvancedSuccess: false
        });
      });

      testSuite.addTest(videoTest);
      testSuite.addTest(advancedCameraTest);
    }

    if (window.RTCPeerConnection) {
      const symmetricNatTest = new SymmetricNatTest();
      symmetricNatTest.promise.then(res => {
        this.safeSetProperties({
          checkingSymmetricNat: false,
          symmetricNatResult: `webrtcTroubleshoot.${res}`
        });
      }, (err) => {
        this.logger.error('symmetricNatTest failed', err);
        this.safeSetProperties({
          checkingSymmetricNat: false,
          symmetricNatResult: 'webrtcTroubleshoot.nat.error'
        });
      });

      const connectivityTest = new ConnectivityTest(iceConfig);
      connectivityTest.promise.then((/* logs */) => {
        this.safeSetProperties({
          checkingConnectivity: false,
          checkConnectivitySuccess: true
        });
      }, (err) => {
        this.logger.error('connectivityTest failed', err);
        this.safeSetProperties({
          checkingConnectivity: false,
          checkConnectivitySuccess: false
        });
      });

      const throughputTest = new ThroughputTest(iceConfig);
      throughputTest.promise.then((/* logs */) => {
        this.safeSetProperties({
          checkingThroughput: false,
          checkThroughputSuccess: true
        });
      }, (err) => {
        this.logger.error('throughputTest failed', err);
        this.safeSetProperties({
          checkingThroughput: false,
          checkThroughputSuccess: false
        });
      });

      testSuite.addTest(symmetricNatTest);
      testSuite.addTest(connectivityTest);
      testSuite.addTest(throughputTest);

      let bandwidthTest;

      if (this.get('runVideoBandwidthTest')) {
        bandwidthTest = new VideoBandwidthTest({iceConfig, mediaOptions});
      } else if (this.get('runAudioBandwidthTest')) {
        bandwidthTest = new AudioBandwidthTest({iceConfig, mediaOptions});
      }

      if (bandwidthTest) {
        bandwidthTest.promise.then(results => {
          this.safeSetProperties({
            bandwidthStats: results && results.stats,
            checkingBandwidth: false,
            checkBandwidthSuccess: true
          });
        }, (results) => {
          if (results.pcCode === ERROR_CODES.ICE) {
            this.set('bandwidthIceError', true);
          } else if (results.pcCode === ERROR_CODES.MEDIA) {
            this.set('bandwidthMediaError', true);
          } else {
            this.set('bandWidthTestError', results);
            this.logger.error('bandwidthTest failed', results);
          }

          this.safeSetProperties({
            bandwidthStats: results && results.stats,
            checkingBandwidth: false,
            checkBandwidthSuccess: false
          });
        });
        testSuite.addTest(bandwidthTest);
      }
    }

    navigator.mediaDevices.enumerateDevices()
      .then((devices) => {
        this.logger.log('media devices', devices);
        this.logger.log('mediaOptions', mediaOptions);
        return testSuite.start();
      })
      .then((results) => {
        this.logger.info('WebRTC Troubleshooting results (success)', results);
        this.sendAction('results', results);
        if (this.done) {
          this.done(results);
        }
      }).catch((err) => {
        this.logger.warn('WebRTC Troubleshooting results (error)', err, err && err.details);
        this.sendAction('results', err);
        if (this.done) {
          this.done(err);
        }
      });

    this.set('testSuite', testSuite);
  },

  runVideoBandwidthTest: Ember.computed.or('video', 'mediaOptions.screenStream'),

  runAudioBandwidthTest: Ember.computed('audio', 'runVideoBandwidthTest', function () {
    return !this.get('runVideoBandwidthTest') && this.get('audio');
  }),

  runBandwidthTest: Ember.computed.or('runVideoBandwidthTest', 'runAudioBandwidthTest'),

  symmetricNatResultGood: Ember.computed('symmetricNatResult', function () {
    const result = this.get('symmetricNatResult');
    switch (result) {
      case 'webrtcTroubleshoot.nat.asymmetric':
        return true;
      default:
        return false;
    }
  }),

  willDestroyElement () {
    try {
      var testSuite = this.get('testSuite');
      if (testSuite && testSuite.running) {
        testSuite.stopAllTests();
      }
    } catch (e) { /* don't care - just want to destroy */ }
  },

  actions: {
    toggleBandwidthStats () {
      this.toggleProperty('showBandwidthStats');
    }
  }
});
