module.exports = {
  description: 'WebRTC Troubleshoot',
  normalizeEntityName: function () {},

  afterInstall: function () {
    return this.addBowerPackageToProject('cheet.js', '0.3.3').then(() => {
      return this.addBowerPackageToProject('webrtc-troubleshooter', '0.4.0');
    });
  }
};
