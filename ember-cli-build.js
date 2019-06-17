/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

const cdnUrl = process.env.CDN_URL || '/';

module.exports = function (defaults) {
  var app = new EmberAddon(defaults, {
    'ember-cli-babel': {
      includePolyfill: true
    },
    'ember-cli-qunit': {
      useLintTree: false // we use standard instead
    },
    fingerprint: {
      prepend: cdnUrl,
      extensions: ['js', 'css']
    }
  });

  // we do this because we don't want the addon to bundle it, but we need it for dev
  app.import('vendor/adapter.js');
  app.import('vendor/iframe-screenshare.min.js');

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
