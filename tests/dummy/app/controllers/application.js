import Ember from 'ember';
import realtimeEnvironments from '../models/realtimeEnvironments';

export default Ember.Controller.extend({
  iceServers: null,

  init () {
    if (window.Realtime) {
      this.connectRealtime();
    } else {
      Ember.run.later(this, this.connectRealtime);
    }
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
    if (windowHost.indexOf('localhost') > -1) {
      host = realtimeEnvironments.localhost.host;
      thirdPartyOrgId = realtimeEnvironments.localhost.thirdPartyOrgId;
    } else {
      host = realtimeEnvironments[windowHost].host;
      thirdPartyOrgId = realtimeEnvironments[windowHost].thirdPartyOrgId;
    }

    const realtime = new window.Realtime({
      host: host,
      guest: true,
      orgId: thirdPartyOrgId,
      jidRouting: true,
      jidResource: 'webrtc-troubleshoot'
    });

    return realtime;
  },

  actions: {
    openTroubleshoot () {
      alert('troubleshooting!'); // eslint-disable-line
    }
  }
});
