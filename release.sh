#!/bin/bash
set -e

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
SOURCE_BUILD_NUMBER=$SOURCE_BUILD_NUMBER
REPO=git@bitbucket.org:inindca/ember-webrtc-troubleshooter.git
EMAIL_LIST=client-media-services@genesys.com" > ${WORKSPACE}/build.properties

cat ${WORKSPACE}/build.properties

npm install --no-save @purecloud/web-app-deploy

cd $WORKSPACE

echo "Triggering Prod Deploy"
./node_modules/.bin/deploy \
  --ecosystem pc \
  --build $SOURCE_BUILD_NUMBER \
  --name $WEB_APP_NAME \
  --version $SOURCE_BUILD_NUMBER \
  --dest-env prod
