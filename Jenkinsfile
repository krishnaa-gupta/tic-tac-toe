pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Test'){
            steps {
                echo 'Running Tests...'
            }
        }
        stage ('Build Docker Image'){
            steps {
                sh 'docker build -t tic-tac-toe .'
            }
        }
        stage ('Push Image to ECR'){
            steps {
                sh '''
                aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 524140443570.dkr.ecr.ap-south-1.amazonaws.com

                docker tag tic-tac-toe:latest 524140443570.dkr.ecr.ap-south-1.amazonaws.com/tic-tac-toe:latest

                docker push 524140443570.dkr.ecr.ap-south-1.amazonaws.com/tic-tac-toe:latest
                '''
            }
        }
    }
}