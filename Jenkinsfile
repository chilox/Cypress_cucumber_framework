pipeline{
    agent any

   tools {nodejs "node"} 

   stages {

    stage('Cypress Test Suite'){
        parallel {
            stage('Slave 1'){
                agent {
                    label "nodo1"
                }
                steps {
                    git url: 'https://github.com/chilox/Cypress_cucumber_framework.git'
                    bat 'npm install'
                    bat 'npm update'
                    bat 'npx cypress run --record --key 5bd2098e-d7ef-41e7-9d93-b9b9de8f8a9c  --parallel'
                }
            }

            stage('Slave 2'){
                agent {
                    label "nodo2"
                }
                steps {
                    git url: 'https://github.com/chilox/Cypress_cucumber_framework.git'
                    bat 'npm install'
                    bat 'npm update'
                    bat 'npx cypress run --record --key 5bd2098e-d7ef-41e7-9d93-b9b9de8f8a9c  --parallel'
                }
            }

            
        }
    }
   }
}