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
    stage("Push To Github"){
      steps {
        sh 'git config --global user.email "auto@jenkins.com"'
        sh 'git config --global user.name "Jenkins"'
        script {
          String branch = sh 'git branch | grep "jenkins"'
          if (branch != 'jenkins') {
            sh 'git remote add jenkins https://github.com/lenn0n/jenkins-post-build.git'
          }
        }
        sh 'git add .'
        sh "git commit -m 'Commit from Jenkins'"
        withCredentials([gitUsernamePassword(credentialsId: 'gh-cred', gitToolName: 'Default')]) {
            sh "git push -u jenkins HEAD:master"
        }
      }
    }
    stage("Push To EC2"){
      steps {
        echo 'TBD'
      }
    }
    stage("Restart Application (PM2, Deployments)"){
      steps {
        echo 'TBD'
      }
    }

  }

}