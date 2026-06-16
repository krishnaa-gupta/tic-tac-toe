# Deployment Guide

1. Push code changes to the GitHub repository.
2. GitHub webhook triggers the Jenkins pipeline.
3. Jenkins builds and pushes the Docker image to Amazon ECR.
4. Pull the latest Docker image from Amazon ECR on the EC2 instance.
5. Run the Docker container.
6. Verify application accessibility using the EC2 public IP.
7. Monitor the server using Prometheus and Grafana dashboards.
