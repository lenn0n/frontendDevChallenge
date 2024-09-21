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
          bat 'docker login --username $USERNAME --password $PASSWORD'
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
          bat "git commit -m 'Commit from Jenkins' || true"
          bat "git push -u origin HEAD:master || true"
        }
      }
    }
    stage("Push Build Folder in Linux Machines and Restart"){
      steps {
        echo 'TBD'
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
