import Ember from 'ember';
import authConfig from '../models/authConfig';

/* loaded in `index.html` */
const StreamingClient = window.GenesysCloudStreamingClient;

export default Ember.Controller.extend({
  application: Ember.inject.service(),

  streamingClient: null,
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
    window.addEventListener('message', this.receiveMessage.bind(this), false);
    this.fetchIceServers();
  },

  async fetchIceServers () {
    const accessToken = this.get('application.authData.accessToken');
    const streamingClient = await this.setupStreamingClient(accessToken);
    const iceServers = await streamingClient.webrtcSessions.refreshIceServers();

    console.log('received iceServers', JSON.stringify(iceServers));
    this.set('iceServers', iceServers);
    this.set('streamingClientConnected', true);

    await streamingClient.disconnect();
  },

  async setupStreamingClient (accessToken) {
    const connectionOptions = {
      signalIceConnected: true,
      host: `wss://streaming.${authConfig.domain}`,
      apiHost: authConfig.domain,
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
      this.get('application').logout();
    }
  }
});
