@Library('pipeline-library@COMUI-857') _

def isBbRepo = true
def MAIN_BRANCH = 'master'

def isMain = {
  env.BRANCH_NAME == MAIN_BRANCH
}

def getBuildType = {
  isMain()
    ? 'MAINLINE'
    : 'FEATURE'
}

webappPipeline {
    projectName = 'webrtc-troubleshooter'
    team = 'Genesys Client Media (WebRTC)'
    mailer = 'genesyscloud-client-media@genesys.com'

    manifest = customManifest('./dist') {
        sh('node ./create-manifest.js')
        readJSON(file: 'dist/manifest.json')
    }

    testJob = 'valve-webrtc-troubleshoot-tests'
    buildType = getBuildType

    snykConfig = {
      return [
        organization: 'genesys-client-media-webrtc',
        targetFiles: ['yarn.lock']
      ]
    }

    autoSubmitCm = true

    ciTests = {
      sh('''
          yarn && npm test
      ''')
    }

    buildStep = {cdnUrl ->
        sh("""
            export CDN_URL="${cdnUrl}"
            echo "CDN_URL $CDN_URL"
            npx ember build --env=production --dest=dist/
        """)
    }
}