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
    //       bat 'docker build -t webapp .'
    //       bat 'docker images'
    //   }
    // }
    // stage("Push To DockerHub"){
    //   steps {
    //     withCredentials ([
    //       usernamePassword(credentialsId: 'docker-cred',
    //       usernameVariable: "USERNAME",
    //       passwordVariable: "PASSWORD"
    //     )]) {
    //       bat 'docker login --username $USERNAME -- password PASSWORD'
    //       bat 'docker push webapp:dev'
    //     } 
    //   }
    // }
    // stage("Push To Github"){
    //   steps {
    //     bat 'git config --global user.email "auto@jenkins.com"'
    //     bat 'git config --global user.name "Jenkins"'
    //     bat 'git remote add jenkins https://github.com/lenn0n/jenkins-post-build.git'
    //     bat 'git add .'
    //     bat "git commit -m 'Commit from Jenkins'"
    //     withCredentials([gitUsernamePassword(credentialsId: 'gh-cred', gitToolName: 'Default')]) {
    //         bat "git push -u origin HEAD:jenkins"
    //     }
    //   }
    // }
    // stage("Push To EC2"){
    //   steps {

    //   }
    // }
    // stage("Restart Application (PM2, Deployments)"){
    //   steps {

    //   }
    // }

  }

}
