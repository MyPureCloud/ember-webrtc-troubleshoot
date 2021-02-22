import Ember from 'ember';
import authConfig from '../models/authConfig';

// app/routes/application.js
export default Ember.Route.extend({
  intl: Ember.inject.service(),
  application: Ember.inject.service(),

  beforeModel (/* transition */) {
    return this.get('application').authenticate()
      .then(authData => {
        // this.potentiallyRedirectRoute(authData.state);
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
    console.debug('potentiallyRedirectRoute() with stateUrl: ' + stateUrl);
    if (!stateUrl || stateUrl === '/') return;

    const redirectRoute = authConfig.redirectUrl + stateUrl;

    if (redirectRoute === window.location.href) {
      return console.debug('redirectRoute matches current href: ' + redirectRoute);
    }

    console.debug('redirecting to: ' + redirectRoute);
    return window.location.replace(redirectRoute);

    /* if we have a tm build and a hash */
    // let [partialPathname, hash] = stateUrl.split('#');

    // console.debug('partialPathname: ' + partialPathname + '\nhash: ' + hash);

    // /* if there wasn't a hash, it means we don't have a TM version */
    // if (!hash) {
    //   try {
    //     console.debug('attempting to transition to: ' + partialPathname);
    //     return this.transitionTo(`${partialPathname}`);
    //   } catch (error) {
    //     console.debug(`error transitioning to: ${partialPathname} \n\t${error.message}`);
    //     /* no-op: this throws if partialPathname is a tm but there is no hash */
    //   }
    // }

    // const currentRoute = window.location.origin + window.location.pathname;
    // const timemachineRoute = authConfig.redirectUrl + partialPathname;

    // /* add `#` back in for nested Ember routes */
    // hash = hash ? `#${hash}` : null;

    // console.debug('currentRoute: ' + currentRoute + '\ntimemachineRoute: ' + timemachineRoute + '\nhash: ' + hash);

    // /* if we are already on the tm route */
    // if (currentRoute === timemachineRoute) {
    //   /* if there is no hash, then we don't need to route to anything */
    //   if (!hash) {
    //     return null;
    //   }

    //   try {
    //     /* if we have a hash, transition to it */
    //     console.debug('attempting to transition to: ' + hash);
    //     this.transitionTo(hash);
    //   } catch (error) {
    //     /* if our hash is the accessToken from auth redirect, this will throw – don't redirect */
    //     console.debug(`error transitioning to: ${hash} \n\t${error.message}`);
    //     return null;
    //   }
    // }

    // /* otherwise, we need to switch to the tm route */
    // const fullTmHref = timemachineRoute + (hash ? `#${hash}` : '');
    // console.debug('replacing url: ' + fullTmHref);

    // window.location.replace(fullTmHref);
  }
});
