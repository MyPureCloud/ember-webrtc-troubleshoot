import Ember from 'ember';
import authConfig from '../models/authConfig';

// app/routes/application.js
export default Ember.Route.extend({
  intl: Ember.inject.service(),
  application: Ember.inject.service(),

  beforeModel (/* transition */) {
    return this.get('application').authenticate()
      .then(authData => {
        this.potentiallyRedirectRoute(authData.state);
      })
      .then(() => this.get('intl').setLocale('en-us'));
  },

  /*
    https://apps.inindca.com/webrtc-troubleshooter/
      /
      no
    https://apps.inindca.com/webrtc-troubleshooter/video
      /video
      transition
    https://apps.inindca.com/webrtc-troubleshooter/#/video
      #/video
      transition
    https://apps.inindca.com/webrtc-troubleshooter/10.0.0/
      10.0.0/
      reload
    https://apps.inindca.com/webrtc-troubleshooter/10.0.0/#/video
      10.0.0/#/video
      reload
  */
  potentiallyRedirectRoute (stateUrl) {
    if (!stateUrl || stateUrl === '/') return;

    /* if we have a tm build and a hash */
    const [partialPathname, hash] = stateUrl.split('#');

    /* if there wasn't a hash, it means we don't have a TM version */
    if (!hash) {
      try {
        return this.transitionTo(partialPathname);
      } catch (error) {
        /* no-op: this throws if partialPathname is a tm but there is no hash */
      }
    }

    const currentRoute = window.location.origin + window.location.pathname;
    const timemachineRoute = authConfig.redirectUrl + partialPathname;

    /* if we are already on the tm route */
    if (currentRoute === timemachineRoute) {
      /* if there is no hash, then we don't need to route to anything */
      if (!hash) {
        return null;
      }
      try {
        /* if we have a hash, transition to it */
        this.transitionTo(hash);
      } catch (error) {
        /* if our hash is the accessToken from auth redirect, this will throw – don't redirect */
        return null;
      }
    }

    /* otherwise, we need to switch to the tm route */
    const fullTmHref = timemachineRoute + (hash || '');
    window.location.replace(fullTmHref);
  }
});
