@Library('pipeline-library@webapp-pipelines') _

webappPipeline {
    slaveLabel = 'dev'
    useArtifactoryRepo = false
    projectName = 'ember-webrtc-troubleshoot'
    manifest = customManifest('./dist') {
        sh('node ./create-manifest.js')
        readJSON(file: 'dist/manifest.json')
    }
    buildType = { env.BRANCH_NAME == 'master' ? 'MAINLINE' : 'FEATURE' }
    publishPackage = { 'prod' }
    testJob = 'valve-webrtc-troubleshooter-tests'

    buildStep = {
        sh('yarn && npm test && npm run build')
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