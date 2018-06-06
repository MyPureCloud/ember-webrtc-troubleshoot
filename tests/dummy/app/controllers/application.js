import Ember from 'ember';

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
    const realtime = new window.Realtime({
      host: 'https://realtime.mypurecloud.com:443',
      guest: true,
      orgId: 397,
      jidRouting: true,
      jidResource: 'webrtc-troubleshoot'
    });

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

  actions: {
    openTroubleshoot () {
      alert('troubleshooting!'); // eslint-disable-line
    }
  }
});
