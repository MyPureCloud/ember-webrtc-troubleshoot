const prod_us = {
  host: 'https://realtime.mypurecloud.com:443',
  thirdPartyOrgId: 397
};

const prod_au = {
  host: 'https://realtime.mypurecloud.com.au:443',
  thirdPartyOrgId: 28,
  orgName: '',
  orgId: '766eab18-6373-4026-8e70-07e3a07a51dd'
};

const prod_de = {
  host: 'https://realtime.mypurecloud.de:443',
  thirdPartyOrgId: 176,
  orgName: 'test-devglobalalliances-tests',
  orgId: '6b2385a5-d57c-4838-89c3-8dda7b7f7bd7'
};

const prod_ie = {
  host: 'https://realtime.mypurecloud.ie:443',
  thirdPartyOrgId: 16,
  orgName: 'automationtestireland',
  orgId: '82e8346a-507e-4011-bcca-dc7ea8304133'
};

const prod_jp = {
  host: 'https://realtime.mypurecloud.jp:443',
  thirdPartyOrgId: 5,
  orgName: 'tokyoautomationorg',
  orgId: 'c32dd240-fd35-4d23-b06d-3694f7a8f18d'
};

const tca = {
  host: 'https://realtime.inintca.com:443',
  thirdPartyOrgId: 1388,
  orgName: 'automationorganization',
  orgId: 'bb132ab6-1865-401e-9e1b-6ddd2cf8b771'
};

const dca = {
  host: 'https://realtime.inindca.com:443',
  thirdPartyOrgId: 1111,
  orgName: 'TEST_Auto_DevOrg',
  orgId: '211b589c-6907-40d2-909c-6eaaea3c8985'
};

const localhost = {
  host: 'https://realtime.inindca.com:443',
  thirdPartyOrgId: 1111,
  orgName: 'TEST_Auto_DevOrg',
  orgId: '211b589c-6907-40d2-909c-6eaaea3c8985'
};

const realtimeEnvironments = {
  'apps.mypurecloud.com': prod_us,
  'apps.mypurecloud.com.au': prod_au,
  'apps.mypurecloud.de': prod_de,
  'apps.mypurecloud.ie': prod_ie,
  'apps.mypurecloud.jp': prod_jp,
  'apps.inintca.com': tca,
  'apps.inindca.com': dca,
  'localhost': localhost,
}

export default realtimeEnvironments;
