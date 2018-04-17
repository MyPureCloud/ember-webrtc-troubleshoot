#######################################################
# CONFIGURE THE BUILD
#######################################################
export WEB_APP_NAME=webrtc-troubleshooter
export WEB_APP_OUTPUT_DIR=$WORKSPACE/repo/dist
export GZIP_WEB_APP=true

#######################################################
# DO NOT MODIFY THIS SECTION
#######################################################
cd $WORKSPACE

echo -e "\n====Creating build.properties====\n"
echo "WEB_APP_NAME=$WEB_APP_NAME
SOURCE_BUILD_NAME=$JOB_NAME
SOURCE_BUILD_NUMBER=$BUILD_NUMBER
AUTO_DEPLOY_TO_TEST=false
AUTO_DEPLOY_TO_STAGE=false
REPO=git@bitbucket.org:inindca/web-sdk.git
EMAIL_LIST=xander.dumaine@genesys.com" > ${WORKSPACE}/build.properties

# Check out the latest npm-utils
rm -rf ./npm-utils && git clone --depth=1 git@bitbucket.org:inindca/npm-utils.git ./npm-utils

# Set up node with the provided version and generate a .npmrc file for our private npm repo
source ./npm-utils/scripts/jenkins-pre-build.sh 6.10.0

# Clone build scripts repo into directory
rm -rf build-deploy-web-app && git clone git@bitbucket.org:inindca/build-deploy-web-app.git

# Run the standard before-build script
source ./build-deploy-web-app/before-build.sh

#######################################################
# YOUR CUSTOM BUILD SCRIPT GOES HERE
#######################################################

cd $WORKSPACE/repo

yarn install --pure-lockfile
npm install -g bower
bower install
npm run install-chromium
npm test # disabled until we fix the launcher for tests to ember-chromium

node_modules/.bin/ember build --env=production --dest=dist/

node create-manifest.js
echo "Created manifest"
cat dist/manifest.json

cp dist/manifest.json $WORKSPACE/manifest.json

#######################################################
# DO NOT MODIFY THIS SECTION
#######################################################

cd $WORKSPACE

# Run the standard after-build script
source ./build-deploy-web-app/after-build.sh
