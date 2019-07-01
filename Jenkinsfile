@Library('pipeline-library@webapp-pipelines') _

webappPipeline {
    slaveLabel = 'dev'
    projectName = 'ember-webrtc-troubleshoot'
    manifest = customManifest('./dist') { 
        sh('node ./create-manifest.js')
        readJSON(file: 'dist/manifest.json')
    }
    buildType = { 'MAINLINE' }
    shouldUpload = { true }

    buildStep = {
        sh('npm install && npm run build')
    }

    postRelease = {
        println('Do a thing after prod release!')
    }
}