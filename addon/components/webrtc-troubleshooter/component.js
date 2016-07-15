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
  checkingBandwidthSuccess: false,

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
      audioTest.deferred.promise.then((logs) => {
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
      videoTest.deferred.promise.then((logs) => {
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
      advancedCameraTest.deferred.promise.then((logs) => {
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
      connectivityTest.deferred.promise.then((logs) => {
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
      throughputTest.deferred.promise.then((logs) => {
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

      if (this.get('video')) {
        const bandwidthTest = new VideoBandwidthTest({iceConfig, mediaOptions});
        bandwidthTest.deferred.promise.then((logs) => {
          this.setProperties({
            checkingBandwidth: false,
            checkBandwidthSuccess: true
          });
        }, (err) => {
          this.logger.error(err);
          this.setProperties({
            checkingBandwidth: false,
            checkBandwidthSuccess: false
          });
        });
        testSuite.addTest(bandwidthTest);
      }
    }

    testSuite.start().then((results) => {
      this.logger.info('WebRTC Troubleshooting results', results);
      this.sendAction('results', results);
    }).catch((err) => {
      this.logger.warn('WebRTC Troubleshooting results', err);
      this.sendAction('results', err);
    });

    this.set('testSuite', testSuite);
  },

  willDestroyElement () {
    try {
      var testSuite = this.get('testSuite');
      if (testSuite && testSuite.running) {
        testSuite.stopAllTests();
      }
    } catch (e) { /* don't care - just want to destroy */ }
  }
});
