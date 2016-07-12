import Ember from 'ember';

export default Ember.Controller.extend({
  iceServers: null,

  init() {
    this._super(...arguments);
    const savedServers = window.localStorage.getItem('iceServers');
    if (savedServers) {
      this.set('iceServers', JSON.parse(savedServers));
    }
  },

  actions: {
    openTroubleshoot () {
      alert('troubleshooting!'); // eslint-disable-line
    }
  }
});
