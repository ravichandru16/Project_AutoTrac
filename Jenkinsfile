pipeline {

    agent any

    stages {

        stage('Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install browsers')
        {
            steps {
                bat 'npx playwright install'
            }
        }
        stage('Playwright Test') {
            steps {
                bat 'npx playwright test tests/myntra.spec.js --project="chromium"'
            }
        }

        stage('Publish Report') {
            steps {
                publishHTML(target: [
    allowMissing: false,
    alwaysLinkToLastBuild: true,
    keepAll: true,
    reportDir: 'playwright-report',
    reportFiles: 'index.html',
    reportName: 'Playwright Report'
])
            }
        }
    }
}