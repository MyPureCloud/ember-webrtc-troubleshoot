@Library('pipeline-library@webapp-pipelines') _

webappPipeline {
    slaveLabel = 'dev'
    projectName = 'ember-webrtc-troubleshoot'
    manifest = customManifest('./dist') { 
        sh('node ./create-manifest.js')
        readJSON(file: 'dist/manifest.json')
    }
    
    buildStep = {
        sh('npm install && npm run build')
    }

    shouldUpload = { true }
    shouldDeployDev = { false }
    shouldDeployTest = { false }
    shouldDeployProd = { env.BRANCH_NAME == 'jenkinsfile-pipeline' }
}