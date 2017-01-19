'use strict';

const mergeTrees = require('broccoli-merge-trees');
const WatchedDir = require('broccoli-source').WatchedDir;
const json = require('broccoli-json-module');

module.exports = {
  name: 'webrtc-troubleshoot',
  isDevelopingAddon: function () {
    return Boolean(process.env.EWT_DEV_MODE);
  },
  included: function (app) {
    this._super.included(app);

    this.app = app;

    this.translation = new WatchedDir('translations');

    app.import(app.bowerDirectory + '/webrtc-troubleshooter/dist/webrtc-troubleshooter.bundle.js');
  },
  treeForApp: function (tree) {
    const trees = [tree];
    trees.push(json(tree));

    return mergeTrees(trees, { overwrite: true });
  }
};
