import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const intl = Ember.Service.extend({
  exists () {
    return true;
  },
  lookup () {
    return this.t(...arguments);
  },
  t (key) {
    return key;
  },
  on: () => {},
  off: () => {},
  formatMessage: (value, options) => {
    return value;
  }
});

moduleForComponent('webrtc-troubleshooter', 'Integration | Component | webrtc troubleshoot', {
  integration: true,
  global: {
    window: {
      navigator: {
        userAgent: 'user-agent',
        hardwareConcurrency: 8,
        platform: 'tests',
        mediaDevices: () => {}
      }
    },
    RTCPeerConnection: () => {}
  },
  beforeEach: function () {
    this.register('service:intl', intl);
  }
});

test('Simulated failure in camera shows a failed check for the camera troubleshooter', function (assert) {
  this.set('video', true);
  this.set('audio', false);
  this.set('checkingCamera', false);
  this.set('checkCameraSuccess', false);
  this.render(hbs`
    {{
      webrtc-troubleshooter
      video=video
      audio=audio
      checkingCamera=checkingCamera
      checkCameraSuccess=checkCameraSuccess
    }}
  `);
  const troubleshootTimeWarning = this.$('.entry-row.time').length > 0;
  assert.ok(troubleshootTimeWarning);
  assert.ok(this.$('.entry-values').text().match(/webrtcTroubleshoot.checkCameraFail/));
});

test('Simulated failure in the mic shows a failed check for the mic troubleshooter', function (assert) {
  this.set('video', false);
  this.set('audio', true);
  this.set('checkingMicrophone', false);
  this.set('checkMicrophoneSuccess', false);
  this.render(hbs`
    {{
      webrtc-troubleshooter
      video=video
      audio=audio
      checkingMicrophone=checkingMicrophone
      checkMicrophoneSuccess=checkMicrophoneSuccess
    }}
  `);
  assert.ok(this.$('.entry-values').text().match(/webrtcTroubleshoot.checkMicrophoneFail/));
});

test('Simulated failure in connected to turnserver shows a failed check for the connection troubleshooter', function (assert) {
  this.set('video', true);
  this.set('audio', false);
  this.set('checkingConnectivity', false);
  this.set('checkConnectivitySuccess', false);
  this.render(hbs`
    {{
      webrtc-troubleshooter
      video=video
      audio=audio
      checkingConnectivity=checkingConnectivity
      checkConnectivitySuccess=checkConnectivitySuccess
    }}
  `);
  assert.ok(this.$('.entry-values').text().match(/webrtcTroubleshoot.checkConnectivityFail/));
});
