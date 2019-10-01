'use strict';

const TreeMerger = require('broccoli-merge-trees');
const WatchedDir = require('broccoli-source').WatchedDir;
const json = require('broccoli-json-module');
const Funnel = require('broccoli-funnel');
const path = require('path');

module.exports = {
  name: 'webrtc-troubleshoot',

  isDevelopingAddon: function () {
    return Boolean(process.env.EWT_DEV_MODE);
  },

  included: function (app) {
    this._super.included(app);

    this.app = app;

    this.translation = new WatchedDir('translations');

    app.import('vendor/webrtc-troubleshooter.js');
  },

  treeForVendor (vendorTree) {
    const npmDeps = [
      {
        path: 'webrtc-troubleshoot/dist/webrtc-troubleshooter.js',
        files: ['webrtc-troubleshooter.js']
      }
    ];
    const trees = npmDeps.map((dep) => {
      return new Funnel(path.dirname(require.resolve(dep.path)), {
        files: dep.files
      });
    });
    if (vendorTree) {
      trees.push(vendorTree);
    }
    return new TreeMerger(trees);
  },

  treeForApp: function (tree) {
    const trees = [tree];
    trees.push(json(tree));

    return TreeMerger(trees, { overwrite: true });
  }
};
