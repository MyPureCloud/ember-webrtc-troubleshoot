import Ember from 'ember';

export default Ember.Controller.extend({
  iceServers: null,

  realtimeEnvironments: {
    'apps.mypurecloud.com':    { host: 'https://realtime.mypurecloud.com:443', orgId: 397 },
    'apps.mypurecloud.com.au': { host: 'https://realtime.mypurecloud.com.au:443', orgId: 28 }, // Need an orgId for this one
    'apps.mypurecloud.de':     { host: 'https://realtime.mypurecloud.de:443', orgId: 397 }, // Need an orgId for this one
    'apps.mypurecloud.ie':     { host: 'https://realtime.mypurecloud.ie:443', orgId: 397 }, // Need an orgId for this one
    'apps.mypurecloud.jp':     { host: 'https://realtime.mypurecloud.jp:443', orgId: 397 }, // Need an orgId for this one
    'apps.inintca.com':        { host: 'https://realtime.inintca.com:443', orgId: 1388 },
    'apps.inindca.com':        { host: 'https://realtime.inindca.com:443', orgId: 1111 },
    'localhost':               { host: 'https://realtime.inindca.com:443', orgId: 1111 },
  },

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
    // const windowHost = window.location.host;

    const windowHost = "apps.mypurecloud.com.au"; // fail
    // const windowHost = "apps.mypurecloud.de"; // fail
    // const windowHost = "apps.mypurecloud.ie"; // fail
    // const windowHost = "apps.mypurecloud.jp"; // fail

    let host;
    let orgId;
    let environments = this.get('realtimeEnvironments');
    if (windowHost.indexOf('localhost') > -1) {
      host = environments.localhost.host;
      orgId = environments.localhost.orgId;
    } else {
      host = environments[windowHost].host;
      orgId = environments[windowHost].orgId;
    }

    const realtime = new window.Realtime({
      host: host,
      guest: true,
      orgId: orgId,
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
