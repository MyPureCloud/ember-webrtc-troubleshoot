'use strict';

const mergeTrees = require('broccoli-merge-trees');
const WatchedDir = require('broccoli-source').WatchedDir;
const json = require('broccoli-json-module');

module.exports = {
  name: 'webrtc-troubleshoot',
  isDevelopingAddon: function () {
    return this.app && this.app.env === 'development';
  },
  included: function (app) {
    this._super.included(app);

    this.app = app;

    this.translation = new WatchedDir('translations');

    app.import(app.bowerDirectory + '/lodash/lodash.js');
    app.import(app.bowerDirectory + '/localmedia/localMedia.bundle.js');

    // Fix when https://github.com/webrtc/adapter/issues/206
    app.import(app.bowerDirectory + '/webrtc-adapter/adapter-1.0.4.js');
    app.import(app.bowerDirectory + '/rtcpeerconnection/rtcpeerconnection.bundle.js');
    app.import(app.bowerDirectory + '/webrtc-troubleshooter/dist/webrtc-troubleshooter.bundle.js');
  },
  treeForApp: function (tree) {
    const trees = [tree];
    trees.push(json(tree));

    return mergeTrees(trees, { overwrite: true });
  }
};
