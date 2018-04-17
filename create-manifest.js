#!/usr/bin/env node

var fs = require('fs');

var buildDate = new Date();

var manifest = {
    name: 'webrtc-troubleshooter',
    version: process.env.BUILD_NUMBER,
    buildNumber: process.env.BUILD_NUMBER || "Unknown",
    buildDate: buildDate.toISOString(),
    indexFiles: [
      {
          "url": "/webrtc-troubleshooter/",
          "file": "/index.html"
      }
    ]
};

const files = fs.readdirSync('assets/');
console.log('READ THE DIR');
files.forEach(file => {
  if (fs.lstatSync('assets/' + file).isDirectory()) {
    return;
  }
  manifest.indexFiles.push({
    url: '/webrtc-troubleshooter/assets/' + file,
    file: '/assets/' + file
  });
})
console.log("WROTE THE MANIFEST", manifest);


fs.writeFileSync('manifest.json', JSON.stringify(manifest, null, '    '), {encoding: 'utf8'});
