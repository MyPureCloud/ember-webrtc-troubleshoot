import Ember from 'ember';
import realtimeEnvironments from '../models/realtimeEnvironments';

export default Ember.Controller.extend({
  iceServers: null,

  init () {
    this._super(...arguments);
    if (window.Realtime) {
      this.connectRealtime();
    } else {
      Ember.run.later(this, this.connectRealtime);
    }
    window.addEventListener('message', this.receiveMessage.bind(this), false);
  },

  connectRealtime () {
    const realtime = this.getRealtimeInstance();

    realtime.on('rtcIceServers', servers => {
      console.log(JSON.stringify(servers));
      this.set('iceServers', servers);
      this.set('realtimeConnected', true);
    });

    realtime.onConnect(() => {

    });

    realtime.connect();
    this.set('realtime', realtime);
  },

  getRealtimeInstance () {
    const windowHost = window.location.host;

    let host;
    let thirdPartyOrgId;
    let webchatDeploymentKey;
    if (windowHost.indexOf('localhost') > -1) {
      host = realtimeEnvironments.localhost.host;
      thirdPartyOrgId = realtimeEnvironments.localhost.thirdPartyOrgId;
      webchatDeploymentKey = realtimeEnvironments.localhost.webchatDeploymentKey;
    } else {
      host = realtimeEnvironments[windowHost].host;
      thirdPartyOrgId = realtimeEnvironments[windowHost].thirdPartyOrgId;
      webchatDeploymentKey = realtimeEnvironments[windowHost].webchatDeploymentKey;
    }

    const realtime = new window.Realtime({
      host: host,
      guest: true,
      orgId: thirdPartyOrgId,
      jidRouting: true,
      jidResource: 'webrtc-troubleshoot',
      webchatDeploymentKey
    });

    return realtime;
  },

  home: Ember.computed('currentPath', function () {
    window.app = this;
    return this.get('currentPath') === 'index';
  }),

  screen: Ember.computed('currentPath', function () {
    return this.get('currentPath') === 'screen';
  }),

  video: Ember.computed('currentPath', function () {
    return this.get('currentPath') === 'video';
  }),

  audio: Ember.computed('currentPath', function () {
    return this.get('currentPath') === 'audio';
  }),

  headsets: Ember.computed('currentPath', function () {
    return this.get('currentPath') === 'headsets';
  }),

  headsetFrameSrc: Ember.computed(function () {
    if (window.location.hostname.indexOf('localhost') > -1) {
      Ember.Logger.warn('Looking for headsets dummy app on https://localhost:4201');
      return 'https://localhost:4202';
    }
    return `https://${window.location.hostname}/headset-troubleshooter`;
  }),

  receiveMessage: function (e) {
    if (e.data.direction === 'jabra-headset-extension-from-content-script') {
      this.get('frame').contentWindow.postMessage(e.data, '*');
      return;
    }
    if (e.source !== window) {
      window.postMessage(e.data, '*');
    }
  },

  actions: {
    openTroubleshoot () {
      alert('troubleshooting!'); // eslint-disable-line
    },
    onFrameLoad (e) {
      this.set('frame', e.target);
    },
    captureScreen () {
      window.iframeScreenshare.initializeScreenShare();
      window.iframeScreenshare.requestScreenShare()
        .then(stream => {
          document.querySelector('video#screen').srcObject = stream;
        });
    }
  }
});
