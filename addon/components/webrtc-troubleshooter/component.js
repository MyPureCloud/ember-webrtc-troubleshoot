/* global WebRTCTroubleshooter */
import Ember from 'ember';
import layout from './template';

const {
  TestSuite,
  AudioTest,
  VideoTest,
  ConnectivityTest,
  AdvancedCameraTest,
  ThroughputTest,
  VideoBandwidthTest
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
  checkingConnectivity: true,
  checkConnectivitySuccess: false,
  checkingThroughput: true,
  checkingThroughputSuccess: false,
  checkingBandwidth: true,
  checkBandwidthSuccess: false,
  showBandwidthStats: false,

  video: true,
  audio: true,
  logger: null,

  iceServers: null,

  init () {
    this._super(...arguments);
    this.startTroubleshooter();
    if (!this.get('logger')) {
      this.set('logger', Ember.Logger);
    }
  },

  startTroubleshooter: function () {
    if (!navigator.mediaDevices) {
      this.set('video', false);
      this.set('audio', false);
    }
    const iceConfig = {
      iceServers: this.get('iceServers') || [],
      iceTransports: 'relay'
    };
    const mediaOptions = this.get('mediaOptions') || { audio: true, video: true };

    const testSuite = new TestSuite();

    // TODO: logs for rejections?

    if (this.get('audio')) {
      const audioTest = new AudioTest(mediaOptions);
      audioTest.promise.then((/* logs */) => {
        this.setProperties({
          checkingMicrophone: false,
          checkMicrophoneSuccess: true,
          checkingVolume: false,
          checkVolumeSuccess: true
        });
      }, (err) => {
        this.logger.error(err);
        this.setProperties({
          checkingMicrophone: false,
          checkMicrophoneSuccess: false,
          checkingVolume: false,
          checkVolumeSuccess: false
        });
      });

      testSuite.addTest(audioTest);
    }

    if (this.get('video')) {
      const videoTest = new VideoTest(mediaOptions);
      videoTest.promise.then((/* logs */) => {
        this.setProperties({
          checkingCamera: false,
          checkCameraSuccess: true
        });
      }, (err) => {
        this.logger.error(err);
        this.setProperties({
          checkingCamera: false,
          checkCameraSuccess: false
        });
      });

      const advancedCameraTest = new AdvancedCameraTest(mediaOptions);
      advancedCameraTest.promise.then((/* logs */) => {
        this.setProperties({
          checkingCameraAdvanced: false,
          checkCameraAdvancedSuccess: true
        });
      }, (err) => {
        this.logger.error(err);
        this.setProperties({
          checkingCameraAdvanced: false,
          checkCameraAdvancedSuccess: false
        });
      });

      testSuite.addTest(videoTest);
      testSuite.addTest(advancedCameraTest);
    }

    if (window.RTCPeerConnection) {
      const connectivityTest = new ConnectivityTest(iceConfig);
      connectivityTest.promise.then((/* logs */) => {
        this.setProperties({
          checkingConnectivity: false,
          checkConnectivitySuccess: true
        });
      }, (err) => {
        this.logger.error(err);
        this.setProperties({
          checkingConnectivity: false,
          checkConnectivitySuccess: false
        });
      });

      const throughputTest = new ThroughputTest(iceConfig);
      throughputTest.promise.then((/* logs */) => {
        this.setProperties({
          checkingThroughput: false,
          checkThroughputSuccess: true
        });
      }, (err) => {
        this.logger.error(err);
        this.setProperties({
          checkingThroughput: false,
          checkThroughputSuccess: false
        });
      });

      testSuite.addTest(connectivityTest);
      testSuite.addTest(throughputTest);

      if (this.get('runBandwidthTest')) {
        const bandwidthTest = new VideoBandwidthTest({iceConfig, mediaOptions});
        bandwidthTest.promise.then(results => {
          this.setProperties({
            bandwidthStats: results && results.stats,
            checkingBandwidth: false,
            checkBandwidthSuccess: true
          });
        }, (results) => {
          this.logger.error(results);
          this.setProperties({
            bandwidthStats: results.stats,
            checkingBandwidth: false,
            checkBandwidthSuccess: false
          });
        });
        testSuite.addTest(bandwidthTest);
      }
    }

    testSuite.start().then((results) => {
      this.logger.info('WebRTC Troubleshooting results (success)', results);
      this.sendAction('results', results);
      if (this.done) {
        this.done(results);
      }
    }).catch((err) => {
      this.logger.warn('WebRTC Troubleshooting results (error)', err);
      this.sendAction('results', err);
      if (this.done) {
        this.done(err);
      }
    });

    this.set('testSuite', testSuite);
  },

  runBandwidthTest: Ember.computed.or('video', 'mediaOptions.screenStream'),

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
