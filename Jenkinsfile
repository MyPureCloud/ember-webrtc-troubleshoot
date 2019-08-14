@Library('pipeline-library@webapp-pipelines') _

webappPipeline {
    slaveLabel = 'dev'
    useArtifactoryRepo = false
    projectName = 'webrtc-troubleshooter'
    manifest = customManifest('./dist') {
        sh('node ./create-manifest.js')
        readJSON(file: 'dist/manifest.json')
    }
    buildType = { env.BRANCH_NAME == 'master' ? 'MAINLINE' : 'FEATURE' }
    publishPackage = { 'prod' }
    testJob = 'valve-webrtc-troubleshoot-tests'

    buildStep = {
        sh('''
            export CDN_URL="$(npx cdn --ecosystem pc --name $APP_NAME --build $BUILD_ID --version $VERSION)"
            echo "CDN_URL $CDN_URL"
            yarn && npm test && npx ember build --env=production --dest=dist/
        ''')
    }

    cmConfig = {
        return [
            managerEmail: 'purecloud-client-media@genesys.com',
            rollbackPlan: 'Patch version with fix',
            testResults: 'https://jenkins.ininica.com/job/web-pipeline-ember-webrtc-troubleshoot/job/master/'
        ]
    }

    shouldTagOnRelease = { true }

    postReleaseStep = {
        sh("""
            # patch to prep for the next version
            npm version patch --no-git-tag-version
            git commit -am "Prep next version"
            git push origin HEAD:master --tags
        """)
    }
}