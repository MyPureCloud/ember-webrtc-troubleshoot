const path = require('path')
const _ = require('lodash')
const fsp = require('fs-promise')

module.exports = {
  description: 'WebRTC Troubleshoot',
  normalizeEntityName: function () {},

  install: function (options) {
    const myi18n = require('../../translations/en-us.json')

    const translationPath = path.join(options.project.root, 'translations/en-us.json')
    const i18n = require(translationPath)

    _.merge(i18n, myi18n)
    return fsp.writeFile(translationPath, JSON.stringify(i18n, null, '    '))
  },

  afterInstall: function () {
    return this.addBowerPackageToProject('webrtc-adapter#gh-pages').then(() => {
      return this.addBowerPackageToProject('cheet.js#0.3.3')
    }).then(() => {
      return this.addBowerPackageToProject('xdumaine/localmedia')
    }).then(() => {
      return this.addBowerPackageToProject('otalk/RTCPeerConnection')
    })
  }
}
