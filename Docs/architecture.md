# Architecture

## Project Overview

This project demonstrates the implementation of a CI pipeline for a containerized Tic-Tac-Toe web application using GitHub, Jenkins, Docker, Amazon ECR, and Amazon EC2.

The application source code is stored in GitHub. Whenever code changes are pushed to the repository, Jenkins automatically retrieves the latest code, builds a Docker image, and pushes the image to Amazon Elastic Container Registry (ECR). The Docker image can then be pulled and deployed on an Amazon EC2 instance.

## Architecture Flow

Developer
→ GitHub Repository
→ GitHub Webhook
→ Jenkins Pipeline
→ Docker Image Build
→ Amazon ECR
→ Amazon EC2
→ End User

## Workflow Description

1. The developer pushes code changes to the GitHub repository.
2. GitHub triggers a webhook notification to Jenkins.
3. Jenkins checks out the latest source code from the repository.
4. Jenkins builds a Docker image using the application's Dockerfile.
5. The Docker image is tagged and pushed to Amazon ECR.
6. The image is pulled from Amazon ECR and deployed on an Amazon EC2 instance.
7. End users access the application through the EC2-hosted web server.
