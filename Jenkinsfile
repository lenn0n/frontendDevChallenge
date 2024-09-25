pipeline {
  agent any

  stages {
    stage("Test Application"){
      steps {
        nodejs(nodeJSInstallationName: 'nodejs') {
          bat 'npm run test'
        }
      }
    }
    stage("Build Application"){
      steps {
        nodejs(nodeJSInstallationName: 'nodejs') {
          bat 'npm install'
          bat 'npm run build'
        }
      }
    }
    stage("Dockerize Application"){
      steps {
        bat 'docker build . -t lennonjansuy/webapp:dev'
        bat 'docker images'
      }
    }
    stage("Push To DockerHub"){
      steps {
        withCredentials ([
          usernamePassword(credentialsId: 'docker-cred',
          usernameVariable: "USERNAME",
          passwordVariable: "PASSWORD"
        )]) {
              bat "docker login --username $USERNAME --password $PASSWORD"
              bat 'docker push lennonjansuy/webapp:dev'
        } 
      }
    }
    stage("Push To Github (Clone build to other repo)"){
      steps {
        withCredentials([gitUsernamePassword(credentialsId: 'gh-cred', gitToolName: 'Default')]) {
          git credentialsId: 'gh-cred', url: 'https://github.com/lenn0n/jenkins-post-build.git'
          bat "echo 'node_modules' > .gitignore"
          bat 'git add .'
          bat 'git commit -m "Commit from Jenkins" || echo "GOT AN ERROR, JUST CONTINUE"'
          bat 'git push -u origin HEAD:master || echo "GOT AN ERROR, JUST CONTINUE"'
        }
      }`
    }
    stage("Push Build Folder in Linux Machines and Restart"){
      steps {
      echo 'TBD'
      }
    }
    stage("Send Email Notification"){
      steps {
        emailext (
          subject: "Pipeline Email Report",
          body: """
            <html>
              <header>
                <style>
                  body {
                    background-color: white;
                    color: white
                  }
                </style>
              </header>
              <body>
                <p>
                  A changes was made to your repository ${GIT_URL}
                </p>
                 <table border="0">
                  <tr><td>Branch:         </td><td> ${GIT_BRANCH}</td></tr>
                  <tr><td>Commit:         </td><td> ${GIT_COMMIT}</td></tr>
                  <tr><td>Build #:        </td><td> ${env.BUILD_NUMBER}</td></tr>
                  <tr><td>Job Name:       </td><td> ${env.JOB_NAME}</td></tr>
                  <tr><td>Server URL:     </td><td> ${env.JOB_URL}</td></tr>
                </table>
              </body>
            </html>
          """,
          to: 'lennonbenedictjansuy@gmail.com',
          from: 'admin@lenn0n.xyz',
          replyTo: 'no-reply@lenn0n.xyz',
          mimeType: 'text/html'
        )
      }
    }
    stage("Kubernetes Deployment Restart"){
      steps {
        echo 'TBD'
      }
    }

  }
  post {
    always {
      deleteDir()
    }
  }

}