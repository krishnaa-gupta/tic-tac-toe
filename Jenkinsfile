pipeline {
agent any

```
environment {
    AWS_REGION = "ap-south-1"
    ECR_REPO = "524140443570.dkr.ecr.ap-south-1.amazonaws.com/tic-tac-toe"
    CONTAINER_NAME = "tic-tac-toe"
}

stages {

    stage('Checkout') {
        steps {
            checkout scm
        }
    }

    stage('Build Docker Image') {
        steps {
            sh '''
            docker build -t tic-tac-toe .
            '''
        }
    }

    stage('Push Image to ECR') {
        steps {
            sh '''
            aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin 524140443570.dkr.ecr.ap-south-1.amazonaws.com

            docker tag tic-tac-toe:latest $ECR_REPO:latest

            docker push $ECR_REPO:latest
            '''
        }
    }

    stage('Deploy Latest Container') {
        steps {
            sh '''
            aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin 524140443570.dkr.ecr.ap-south-1.amazonaws.com

            docker pull $ECR_REPO:latest

            docker stop $CONTAINER_NAME || true

            docker rm -f $CONTAINER_NAME || true

            while docker ps -a --format '{{.Names}}' | grep -w $CONTAINER_NAME; do
                sleep 2
            done

            docker run -d \
              --name $CONTAINER_NAME \
              -p 80:80 \
              $ECR_REPO:latest
            '''
        }
    }
}

post {
    success {
        echo 'Application deployed successfully!'
    }

    failure {
        echo 'Deployment failed!'
    }
}
```

}
