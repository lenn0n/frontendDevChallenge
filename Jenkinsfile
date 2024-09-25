pipeline {
  agent any
  stages {
    // stage("Test Application"){
    //   steps {
    //     nodejs(nodeJSInstallationName: 'nodejs') {
    //       bat 'npm run test'
    //     }
    //   }
    // }
    // stage("Build Application"){
    //   steps {
    //     nodejs(nodeJSInstallationName: 'nodejs') {
    //       bat 'npm install'
    //       bat 'npm run build'
    //     }
    //   }
    // }
    // stage("Dockerize Application"){
    //   steps {
    //     bat 'docker build . -t lennonjansuy/webapp:dev'
    //     bat 'docker images'
    //   }
    // }
    // stage("Push To DockerHub"){
    //   steps {
    //     withCredentials ([
    //       usernamePassword(credentialsId: 'docker-cred',
    //       usernameVariable: "USERNAME",
    //       passwordVariable: "PASSWORD"
    //     )]) {
    //           bat "docker login --username $USERNAME --password $PASSWORD"
    //           bat 'docker push lennonjansuy/webapp:dev'
    //     } 
    //   }
    // }
    // stage("Push To Github (Clone build to other repo)"){
    //   steps {
    //     withCredentials([gitUsernamePassword(credentialsId: 'gh-cred', gitToolName: 'Default')]) {
    //       git credentialsId: 'gh-cred', url: 'https://github.com/lenn0n/jenkins-post-build.git'
    //       bat "echo 'node_modules' > .gitignore"
    //       bat 'git add .'
    //       bat 'git commit -m "Commit from Jenkins" || echo "GOT AN ERROR, JUST CONTINUE"'
    //       bat 'git push -u origin HEAD:master || echo "GOT AN ERROR, JUST CONTINUE"'
    //     }
    //   }
    // }
    stage("Push Build Folder in Linux Machines and Restart"){
      steps {
      echo 'TBD'
      }
    }
    stage("Send Email Notification"){
      steps {
        withCredentials([string(credentialsId: 'email-recipient', variable: 'recipient')]) {
          emailext (
            subject: "Pipeline Email Report - ${BUILD_DISPLAY_NAME}",
            body: """
              <html>
                <head>
                  <style>
                    .wrapper {
                      background-color: rgba(0, 0, 0, 0.1);
                      padding: 20px;
                      border-radius: 20px;
                    }
                    .title {
                      display: flex;
                      gap: 10px;
                    }
                    h2 {
                      padding-left: 10px;
                    }
                  </style>
                </head>
                <body>
                <div class="wrapper">
                    <div class="title">
                      <img src="https://avatars.githubusercontent.com/u/45531522?v=4" alt="" height="50px" width="50px"/>
                      <h2>
                        A change was made to your repository.
                      </h2>
                    </div>
                    <p>This email was automatically generated after the build finished. See the details below.</p>
                    <table border="0">
                      <tr><td>Repository:     </td><td> ${GIT_URL}</td></tr>
                      <tr><td>Branch:         </td><td> ${GIT_BRANCH}</td></tr>
                      <tr><td>Commit:         </td><td> ${GIT_COMMIT}</td></tr>
                      <tr><td>Build ID:       </td><td> ${env.BUILD_NUMBER}</td></tr>
                      <tr><td>Job Name:       </td><td> ${env.JOB_NAME}</td></tr>
                      <tr><td>Jenkins URL:    </td><td> ${env.JOB_URL}</td></tr>
                    </table>
                  </div>
                </body>
              </html>
            """,
            to: recipient,
            from: 'dev@lennonbenedictjansuy.com',
            replyTo: 'no-reply@lenn0n.xyz',
            mimeType: 'text/html'
          )
        }
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