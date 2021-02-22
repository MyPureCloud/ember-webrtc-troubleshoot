import Ember from 'ember';
import authConfig from '../models/authConfig';

/* loaded in `index.html` */
const platformClient = require('platformClient');

export default Ember.Service.extend({
  authClient: null,
  authData: null,
  tokenTimeout: null,

  init () {
    this._super(...arguments);
    const authClient = this.set('authClient', platformClient.ApiClient.instance);

    authClient.setEnvironment(authConfig.domain);
    authClient.setPersistSettings(true, 'webrtc_troubleshooter');
  },

  async authenticate () {
    const existingAuthData = this.get('authData');
    if (existingAuthData) {
      return existingAuthData;
    }

    const { clientId, redirectUrl } = authConfig;

    try {
      const authData = await this.get('authClient').loginImplicitGrant(
        clientId,
        redirectUrl
      );
      this._setAuthData(authData);
      return authData;
    } catch (error) {
      Ember.Logger.error(error);
    }
  },

  logout () {
    this.get('authClient').logout(authConfig.redirectUrl);
  },

  _buildRedirectState () {
    return window.location.href.replace(authConfig.redirectUrl, '');
  },

  _setAuthData (authData) {
    this.set('authData', authData);
    let timeout = this.get('tokenTimeout');

    if (timeout) {
      clearTimeout(timeout);
    }

    const now = new Date().getTime();
    const diffInMillis = authData.tokenExpiryTime - now;

    timeout = setTimeout(() => this.logout(), diffInMillis);

    this.set('tokenTimeout', timeout);
  }
});
