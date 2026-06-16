# Deployment Guide

1. Provision AWS infrastructure using Terraform.
2. Push code changes to the GitHub repository.
3. GitHub webhook triggers the Jenkins pipeline.
4. Jenkins builds and pushes the Docker image to Amazon ECR.
5. Pull and deploy the Docker image on Amazon EC2.
6. Verify application accessibility using the EC2 public IP.
7. Monitor infrastructure metrics using Prometheus and Grafana.
