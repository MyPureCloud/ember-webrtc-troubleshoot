#!/usr/bin/env node

var fs = require('fs');

var buildDate = new Date();

var manifest = {
  name: 'webrtc-troubleshooter',
  version: process.env.BUILD_NUMBER,
  buildNumber: process.env.BUILD_NUMBER || 'Unknown',
  buildDate: buildDate.toISOString(),
  ecosystem: 'pc',
  indexFiles: [
    {
      url: '/webrtc-troubleshooter/',
      file: '/index.html'
    },
    {
      url: '/webrtc-troubleshooter/favicon.ico',
      file: '/favicon.ico'
    }
  ]
};

const files = fs.readdirSync('dist/assets/');
files.forEach(file => {
  if (fs.lstatSync('dist/assets/' + file).isDirectory()) {
    return;
  }
  manifest.indexFiles.push({
    url: '/webrtc-troubleshooter/assets/' + file,
    file: '/assets/' + file
  });
});

fs.writeFileSync('dist/manifest.json', JSON.stringify(manifest, null, '    '), {encoding: 'utf8'});
