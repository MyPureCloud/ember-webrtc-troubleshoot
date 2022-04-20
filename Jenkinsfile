@Library('pipeline-library@COMUI-857') _

def isBbRepo = false
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
    nodeVersion = '12.13'

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

        onSuccess = {
        // NOTE: this version only applies to the npm version published and NOT the cdn publish url/version
        def version = env.VERSION
        def packageJsonPath = "./package.json"
        def tag = ""

        // if not MAIN branch, then we need to adjust the verion in the package.json
        if (!isMain()) {
          // load the package.json version
          def packageJson = readJSON(file: packageJsonPath)
          def featureBranch = env.BRANCH_NAME

          // all feature branches default to --alpha
          tag = "alpha"

          version = "${packageJson.version}-${featureBranch}.${env.BUILD_NUMBER}".toString()
        }

        def npmFunctions = null
        def gitFunctions = null
        def pwd = pwd()

        stage('Download npm & git utils') {
            script {
              // clone pipelines repo
                dir('pipelines') {
                    git branch: 'COMUI-857',
                        url: 'git@bitbucket.org:inindca/pipeline-library.git',
                        changelog: false

                    npmFunctions = load 'src/com/genesys/jenkins/Npm.groovy'
                    gitFunctions = load 'src/com/genesys/jenkins/Git.groovy'
                }
            }
        } // end download pipeline utils

        stage('Publish to NPM') {
            script {
                dir(pwd) {
                    npmFunctions.publishNpmPackage([
                        tag: tag, // optional
                        useArtifactoryRepo: isBbRepo, // optional, default `true`
                        version: version, // optional, default is version in package.json
                        dryRun: false // dry run the publish, default `false`
                    ])
                }
            }
        } // end publish to npm

        if (isMain()) {
            stage('Tag commit') {
                script {
                    gitFunctions.tagCommit(
                      "v${version}",
                      gitFunctions.getCurrentCommit(),
                      isBbRepo
                    )
                }
            } // end tag commit
        } // isMain()
    } // onSuccess
}