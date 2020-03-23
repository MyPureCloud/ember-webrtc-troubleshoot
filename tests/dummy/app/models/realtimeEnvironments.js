const prodUS = {
  host: 'https://realtime.mypurecloud.com:443',
  thirdPartyOrgId: 397
};

const prodUSW2 = {
  host: 'https://realtime.usw2.pure.cloud:443',
  orgId: '8e743581-690c-4e8f-8f81-530cd37566e9',
  thirdPartyOrgId: 52,
  orgName: 'iris-testing-org-30'
};

const prodAPNE2 = {
  host: 'https://realtime.apne2.pure.cloud:443',
  orgId: '3226a078-0840-4bd2-91da-0f36668f16ea',
  thirdPartyOrgId: 72,
  orgName: 'seoulbtc'
};

const prodCAC1 = {
  host: 'https://realtime.cac1.pure.cloud:443',
  orgId: '96f4c15e-c120-49d5-b4ad-268bad025f25',
  thirdPartyOrgId: 85,
  orgName: 'canadabtc'
};

const prodEUW2 = {
  host: 'https://realtime.euw2.pure.cloud:443',
  orgId: '774e625c-7626-41d3-93b8-5704cdfd57c3',
  thirdPartyOrgId: 65,
  orgName: 'londonbtc'
};

const prodAU = {
  host: 'https://realtime.mypurecloud.com.au:443',
  thirdPartyOrgId: 28,
  orgName: 'Admin_Prod_ANZ',
  orgId: '766eab18-6373-4026-8e70-07e3a07a51dd'
};

const prodDE = {
  host: 'https://realtime.mypurecloud.de:443',
  thirdPartyOrgId: 176,
  orgName: 'test-devglobalalliances-tests',
  orgId: '6b2385a5-d57c-4838-89c3-8dda7b7f7bd7'
};

const prodIE = {
  host: 'https://realtime.mypurecloud.ie:443',
  thirdPartyOrgId: 16,
  orgName: 'automationtestireland',
  orgId: '82e8346a-507e-4011-bcca-dc7ea8304133'
};

const prodJP = {
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
  thirdPartyOrgId: 2217941,
  orgName: 'test-valve-1ym37mj1kao',
  orgId: '80883333-8617-472f-8274-58d5b9a10033',
  webchatDeploymentKey: '010bca46-de58-4df0-98ae-5c24a0f4003d'
};

const localhost = {
  host: 'https://realtime.inindca.com:443',
  thirdPartyOrgId: 2217941,
  orgName: 'test-valve-1ym37mj1kao',
  orgId: '80883333-8617-472f-8274-58d5b9a10033',
  webchatDeploymentKey: '010bca46-de58-4df0-98ae-5c24a0f4003d'
};

const realtimeEnvironments = {
  'apps.mypurecloud.com': prodUS,
  'apps.usw2.pure.cloud': prodUSW2,
  'apps.apne2.pure.cloud': prodAPNE2,
  'apps.cac1.pure.cloud': prodCAC1,
  'apps.euw2.pure.cloud': prodEUW2,
  'apps.mypurecloud.com.au': prodAU,
  'apps.mypurecloud.de': prodDE,
  'apps.mypurecloud.ie': prodIE,
  'apps.mypurecloud.jp': prodJP,
  'apps.inintca.com': tca,
  'apps.inindca.com': dca,
  localhost: localhost
};

export default realtimeEnvironments;
