const GC_HOSTS = require('platformClient').PureCloudRegionHosts;

const authConfig = {
  clientId: 'ebb9bb6c-203b-4652-8cc0-e784d5511adc',
  domain: '',
  redirectUrl: ''
};

const { host, origin, pathname } = window.location;

authConfig.redirectUrl = pathname.startsWith('/webrtc-troubleshooter/')
  ? origin + '/webrtc-troubleshooter/'
  : origin;

if (host.includes('localhost')) {
  authConfig.domain = 'inindca.com';
} else {
  const hosts = ['inindca.com', 'inintca.com'].concat(Object.values(GC_HOSTS));
  authConfig.domain = hosts.find(h => host.endsWith(h));
}

export default authConfig;
