import Ember from 'ember';
// app/routes/application.js
export default Ember.Route.extend({
  intl: Ember.inject.service(),
  application: Ember.inject.service(),

  beforeModel (/* transition */) {
    return this.get('application').authenticate()
      .then(authData => {
        const state = authData.state;
        if (state && state !== '/') {
          this.transitionTo(state);
        }
      })
      .then(() => this.get('intl').setLocale('en-us'));
  }
});
