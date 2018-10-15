import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('audio');
  this.route('video');
  this.route('screen');
});

export default Router;
