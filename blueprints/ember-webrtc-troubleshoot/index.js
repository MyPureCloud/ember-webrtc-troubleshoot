module.exports = {
  description: 'WebRTC Troubleshoot',
  normalizeEntityName: function () {},

  afterInstall: function () {
    return this.addBowerPackagesToProject([
      { name: 'cheet.js', target: '0.3.3' },
      { name: 'webrtc-troubleshooter', target: '^2.2.1' }
    ]);
  }
};
