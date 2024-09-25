pipeline {
  agent any

  stages {
    stage("Test Application"){
      steps {
        nodejs(nodeJSInstallationName: 'nodejs') {
          sh 'npm run test'
        }
      }
    }
    stage("Build Application"){
      steps {
        nodejs(nodeJSInstallationName: 'nodejs') {
          sh 'npm install'
          sh 'npm run build'
        }
      }
    }
    stage("Dockerize Application"){
      steps {
          sh 'docker build . -t lennonjansuy/webapp:dev'
          sh 'docker images'
      }
    }
    stage("Push To DockerHub"){
      steps {
        withCredentials ([
          usernamePassword(credentialsId: 'docker-cred',
          usernameVariable: "USERNAME",
          passwordVariable: "PASSWORD"
        )]) {
          sh 'docker login --username $USERNAME --password $PASSWORD'
          sh 'docker push lennonjansuy/webapp:dev'
        } 
      }
    }
    stage("Push To Github (Clone build to other repo)"){
      steps {
        withCredentials([gitUsernamePassword(credentialsId: 'gh-cred', gitToolName: 'Default')]) {
          git credentialsId: 'gh-cred', url: 'https://github.com/lenn0n/jenkins-post-build.git'
          sh "echo 'node_modules' > .gitignore"
          sh 'git add .'
          sh "git commit -m 'Commit from Jenkins' || echo 'CONTINUE'"
          sh "git push -u origin HEAD:master || echo 'CONTINUE'"
        }
      }
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