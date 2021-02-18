/* global RTCPeerConnection */
import Ember from 'ember';
import layout from './template';

const {
  RSVP
} = Ember;

const PROBE_TIMEOUT = 5000;

const envOverrideMap = {
  localhost: 'use1.dev-pure.cloud',
  'inindca.com': 'use1.dev-pure.cloud',
  'inintca.com': 'use1.test-pure.cloud',
  'mypurecloud.com': 'use1.pure.cloud',
  'mypurecloud.com.au': 'apse2.pure.cloud',
  'mypurecloud.jp': 'apne1.pure.cloud',
  'mypurecloud.ie': 'euw1.pure.cloud',
  'mypurecloud.de': 'euc1.pure.cloud'
};

const newIpAddressesByEnv = {
  'use1.dev-pure.cloud': ['52.0.109.55', '18.235.150.255', '18.210.78.136'],
  'use1.test-pure.cloud': ['52.129.97.253', '52.129.97.254', '52.129.97.255'],
  'use1.pure.cloud': ['52.129.99.253', '52.129.99.254', '52.129.99.255'],
  'usw2.pure.cloud': ['52.129.100.253', '52.129.100.254', '52.129.100.255'],
  'aps1.pure.cloud': ['52.129.102.253', '52.129.102.254', '52.129.102.255'],
  'apne1.pure.cloud': ['52.129.101.253', '52.129.101.254', '52.129.101.255'],
  'apne2.pure.cloud': ['13.209.235.192', '15.164.189.9', '52.78.132.36'],
  'apse2.pure.cloud': ['52.129.103.253', '52.129.103.254', '52.129.103.255'],
  'cac1.pure.cloud': ['52.129.104.253', '52.129.104.254', '52.129.104.255'],
  'euc1.pure.cloud': ['52.129.106.253', '52.129.106.254', '52.129.106.255'],
  'euw1.pure.cloud': ['52.129.108.253', '52.129.108.254', '52.129.108.255'],
  'euw2.pure.cloud': ['52.129.109.253', '52.129.109.254', '52.129.109.255'],
  'sae1.pure.cloud': ['52.129.105.253', '52.129.105.254', '52.129.105.255']
};

const oldIpAddressesByEnv = {
  'use1.dev-pure.cloud': ['3.218.17.47', '3.217.157.223', '3.230.36.120'],
  'use1.test-pure.cloud': ['34.197.165.192', '52.4.86.3', '3.231.239.184'],
  'use1.pure.cloud': ['3.228.83.178', '52.7.22.38', '54.196.48.254'],
  'usw2.pure.cloud': ['54.201.32.29', '44.237.98.56', '34.216.108.168'],
  'aps1.pure.cloud': ['13.234.157.14', '3.7.239.227', '65.1.76.52'],
  'apne1.pure.cloud': ['18.180.87.214', '18.180.79.199', '35.72.134.50'],
  'apne2.pure.cloud': ['3.35.254.36', '3.35.120.106', '52.78.141.97'],
  'apse2.pure.cloud': ['3.104.152.214', '54.206.252.160', '52.63.193.181'],
  'cac1.pure.cloud': ['3.97.153.152', '52.60.97.116', '35.183.200.14'],
  'euc1.pure.cloud': ['3.123.61.10', '3.65.88.241', '18.193.220.193'],
  'euw1.pure.cloud': ['54.73.240.102', '52.214.110.46', '54.154.178.131'],
  'euw2.pure.cloud': ['3.10.129.224', '3.9.200.59', '18.130.136.253'],
  'sae1.pure.cloud': ['18.228.108.183', '54.232.76.234', '52.67.245.78']
};

function getRandomArrayElement (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default Ember.Component.extend({
  layout,
  classNames: ['flashy', 'network-troubleshooter'],
  logger: null,

  newDns: null,
  newDnsChecking: true,
  newDnsSuccess: false,
  newDnsFail: false,

  newIpAddress: null,
  newIpAddressChecking: true,
  newIpAddressSuccess: false,
  newIpAddressFail: false,

  oldDns: null,
  oldDnsChecking: true,
  oldDnsSuccess: false,
  oldDnsFail: false,

  oldIpAddress: null,
  oldIpAddressChecking: true,
  oldIpAddressSuccess: false,
  oldIpAddressFail: false,

  init () {
    this._super(...arguments);

    if (!this.get('logger')) {
      this.set('logger', Ember.Logger);
    }
    this.startTests();
  },

  async startTests () {
    const currentHost = window.location.hostname.replace('apps.', '');
    const env = envOverrideMap[currentHost] || currentHost;

    await this.checkOldDns(env);
    await this.checkOldIpAddress(env);
    await this.checkNewDns(env);
    await this.checkNewIpAddress(env);
  },

  async checkOldDns (env) {
    try {
      const oldDns = `netdiag-awspool.${env}`;
      this.set('oldDns', oldDns);
      await this.check(oldDns);
      this.set('oldDnsSuccess', true);
    } catch (e) {
      this.logger.error('old dns check failed', { error: e });
      this.set('oldDnsFail', true);
    } finally {
      this.set('oldDnsChecking', false);
    }
  },

  async checkOldIpAddress (env) {
    try {
      const ipAddress = getRandomArrayElement(oldIpAddressesByEnv[env]);
      this.set('oldIpAddress', ipAddress);
      await this.check(ipAddress);
      this.set('oldIpAddressSuccess', true);
    } catch (e) {
      this.logger.error('old ip address check failed', { error: e });
      this.set('oldIpAddressFail', true);
    } finally {
      this.set('oldIpAddressChecking', false);
    }
  },

  async checkNewDns (env) {
    try {
      const dns = `netdiag.${env}`;
      this.set('newDns', dns);
      await this.check(dns);
      this.set('newDnsSuccess', true);
    } catch (e) {
      this.logger.error('new dns check failed', { error: e });
      this.set('newDnsFail', true);
    } finally {
      this.set('newDnsChecking', false);
    }
  },

  async checkNewIpAddress (env) {
    try {
      const ipaddress = getRandomArrayElement(newIpAddressesByEnv[env]);
      this.set('newIpAddress', ipaddress);
      await this.check(ipaddress);
      this.set('newIpAddressSuccess', true);
    } catch (e) {
      this.logger.error('new ip address check failed', { error: e });
      this.set('newIpAddressFail', true);
    } finally {
      this.set('newIpAddressChecking', false);
    }
  },

  // default port is the turn port
  check (host, port = 3478) {
    let pc;
    return new RSVP.Promise((resolve, reject) => {
      pc = new RTCPeerConnection({
        iceServers: [
          { urls: `stun:${host}:${port}` }
        ]
      });
      pc.createDataChannel('');
      pc.createOffer().then(offer => pc.setLocalDescription(offer));
      pc.onicecandidate = (ice) => {
        if (!ice || !ice.candidate || !ice.candidate.candidate) {
          return;
        }

        if (ice.candidate.type !== 'host') {
          resolve();
        }
      };

      setTimeout(() => reject({ message: 'Probe timeout ' }), PROBE_TIMEOUT);
    }).finally(() => {
      pc && pc.close();
    });
  }
});
