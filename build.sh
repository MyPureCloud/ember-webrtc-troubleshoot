export WEB_APP_NAME=webrtc-troubleshooter

cd $WORKSPACE

# Check out the latest npm-utils
rm -rf ./npm-utils && git clone --depth=1 git@bitbucket.org:inindca/npm-utils.git ./npm-utils

# Set up node with the provided version and generate a .npmrc file for our private npm repo
source ./npm-utils/scripts/jenkins-pre-build.sh 8.11.2

echo -e "\n====Creating build.properties====\n"
echo "WEB_APP_NAME=$WEB_APP_NAME
WEB_APP_BUILD_NUMBER=$BUILD_NUMBER
SOURCE_BUILD_NAME=$JOB_NAME
SOURCE_BUILD_NUMBER=$BUILD_NUMBER
REPO=git@bitbucket.org:inindca/ember-webrtc-troubleshooter.git
EMAIL_LIST=client-media-services@genesys.com" > ${WORKSPACE}/build.properties

cat ${WORKSPACE}/build.properties

npm install --no-save @purecloud/web-app-deploy
export CDN_URL="$(./node_modules/.bin/cdn --ecosystem pc --name $WEB_APP_NAME --build ${BUILD_NUMBER} --version $BUILD_NUMBER)"

echo "CDN_URL $CDN_URL"

cd $WORKSPACE/repo

yarn install --pure-lockfile
npm install -g bower
bower install
npm run install-chromium
npm test

npx ember build --env=production --dest=dist/

node $WORKSPACE/repo/create-manifest.js
cd $WORKSPACE

echo "Triggering S3 Upload"
./node_modules/.bin/upload \
  --ecosystem pc \
  --source-dir $WORKSPACE/repo/dist/ \
  --manifest $WORKSPACE/repo/dist/manifest.json

echo "Triggering DCA Deploy"
./node_modules/.bin/deploy \
  --ecosystem pc \
  --manifest $WORKSPACE/repo/dist/manifest.json \
  --name $WEB_APP_NAME \
  --version $BUILD_NUMBER \
  --dest-env dev

echo "Triggering TCA Deploy"
./node_modules/.bin/deploy \
  --ecosystem pc \
  --manifest $WORKSPACE/repo/dist/manifest.json \
  --name $WEB_APP_NAME \
  --version $BUILD_NUMBER \
  --dest-env test
