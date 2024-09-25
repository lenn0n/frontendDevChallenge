pipeline {
  agent any

  stages {
    // stage("Test Application"){
    //   steps {
    //     nodejs(nodeJSInstallationName: 'nodejs') {
    //       sh 'npm run test'
    //     }
    //   }
    // }
    // stage("Build Application"){
    //   steps {
    //     nodejs(nodeJSInstallationName: 'nodejs') {
    //       sh 'npm install'
    //       sh 'npm run build'
    //     }
    //   }
    // }
    // stage("Dockerize Application"){
    //   steps {
    //       sh 'docker build . -t lennonjansuy/webapp:dev'
    //       sh 'docker images'
    //   }
    // }
    // stage("Push To DockerHub"){
    //   steps {
    //     withCredentials ([
    //       usernamePassword(credentialsId: 'docker-cred',
    //       usernameVariable: "USERNAME",
    //       passwordVariable: "PASSWORD"
    //     )]) {
    //       sh 'docker login --username $USERNAME --password $PASSWORD'
    //       sh 'docker push lennonjansuy/webapp:dev'
    //     } 
    //   }
    // }
    // stage("Push To Github (Clone build to other repo)"){
    //   steps {
    //     withCredentials([gitUsernamePassword(credentialsId: 'gh-cred', gitToolName: 'Default')]) {
    //       git credentialsId: 'gh-cred', url: 'https://github.com/lenn0n/jenkins-post-build.git'
    //       sh "echo 'node_modules' > .gitignore"
    //       sh 'git add .'
    //       sh "git commit -m 'Commit from Jenkins' || true"
    //       sh "git push -u origin HEAD:master || true"
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
        emailext (
          subject: "Test Subject",
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
                  A changes was made in the branch '${BRANCH_NAME}. ' 
                </p>
                <div>BUILD #: ${BUILD_NUMBER}</div>
                <div>BUILD NAME: ${BUILD_DISPLAY_NAME}</div>
                <div>JOB NAME: ${JOB_NAME}</div>
                <div>SERVER: ${JENKINS_URL}</div>
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