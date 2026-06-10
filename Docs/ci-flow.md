# CI Pipeline Flow

1. Developer pushes code changes to the GitHub repository.
2. GitHub webhook automatically triggers the Jenkins pipeline.
3. Jenkins checks out the latest source code.
4. Jenkins executes the test stage.
5. Jenkins builds a Docker image using the Dockerfile.
6. Jenkins tags the Docker image.
7. Jenkins authenticates with Amazon ECR.
8. Jenkins pushes the Docker image to Amazon ECR.
9. The latest Docker image is stored and ready for deployment.
