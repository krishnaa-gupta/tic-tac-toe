# Deployment Guide

1. Push code changes to the GitHub repository.
2. GitHub webhook triggers the Jenkins pipeline.
3. Jenkins checks out the latest source code.
4. Jenkins builds the Docker image.
5. Jenkins pushes the image to Amazon ECR.
6. Pull the latest Docker image from Amazon ECR on the Amazon EC2 instance.
7. Run the Docker container.
8. Verify application accessibility through the Amazon EC2 public IP.
