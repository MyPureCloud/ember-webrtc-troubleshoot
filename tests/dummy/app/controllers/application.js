import Ember from 'ember';

/* loaded in `index.html` */
const StreamingClient = window.GenesysCloudStreamingClient;
const platformClient = require('platformClient');

const config = {
  clientId: 'ebb9bb6c-203b-4652-8cc0-e784d5511adc',
  domain: '',
  redirectUrl: ''
};

export default Ember.Controller.extend({
  streamingClient: null,
  authClient: null,

  config: null,
  authData: null,

  iceServers: null,
  streamingClientConnected: false,

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

  init () {
    this._super(...arguments);
    this.setupConfig();
    this.fetchIceServers();
    window.addEventListener('message', this.receiveMessage.bind(this), false);
  },

  setupConfig () {
    const host = window.location.host;

    if (host.includes('localhost')) {
      config.domain = 'inindca.com';
    } else {
      const hosts = ['inindca.com', 'inintca.com'].concat(Object.values(platformClient.PureCloudRegionHosts));
      config.domain = hosts.find(h => host.endsWith(h));
    }

    config.redirectUrl = this._buildRedirectUrl();

    const authClient = this.set('authClient', platformClient.ApiClient.instance);

    authClient.setEnvironment(config.domain);
    authClient.setPersistSettings(true, 'webrtc_troubleshooter');
  },

  async fetchIceServers () {
    const authData = await this.authenticate();
    const streamingClient = await this.setupStreamingClient(authData.accessToken);
    const iceServers = await streamingClient.webrtcSessions.refreshIceServers();

    console.log('received iceServers', JSON.stringify(iceServers));
    this.set('iceServers', iceServers);
    this.set('streamingClientConnected', true);

    await streamingClient.disconnect();
  },

  authenticate () {
    const clientId = config.clientId;
    const redirectUrl = config.redirectUrl;
    const redirectState = this._buildRedirectState();

    return this.get('authClient').loginImplicitGrant(
      clientId,
      redirectUrl,
      { state: redirectState }
    )
      .then(data => {
        this.set('authData', data);

        /* redirect if state was provided */
        if (data.state && data.state !== '/') {
          const newUrl = redirectUrl + data.state;

          if (newUrl !== window.location.href) {
            window.location.replace(newUrl);
          }
        }

        return data;
      })
      .catch(console.error);
  },

  async setupStreamingClient (accessToken) {
    const connectionOptions = {
      signalIceConnected: true,
      host: `wss://streaming.${config.domain}`,
      apiHost: config.domain,
      logger: Ember.Logger,
      authToken: accessToken
    };

    const connection = new StreamingClient(connectionOptions);

    this.set('streamingClient', connection);

    const connectedPromise = new Ember.RSVP.Promise((resolve) => {
      connection.once('connected', resolve);
    });

    await connection.connect();
    await connectedPromise;

    return connection;
  },

  _buildRedirectUrl () {
    const origin = window.location.origin;

    return window.location.pathname.startsWith('/webrtc-troubleshooter/')
      ? origin + '/webrtc-troubleshooter/'
      : origin;
  },

  _buildRedirectState () {
    return window.location.href.replace(config.redirectUrl, '');
  },

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
    },
    logout () {
      this.get('authClient').logout(config.redirectUrl);
    }
  }
});
