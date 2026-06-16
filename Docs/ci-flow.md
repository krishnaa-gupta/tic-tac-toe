# CI/CD Flow

1. Developer pushes code to the GitHub repository.
2. GitHub webhook triggers the Jenkins pipeline.
3. Jenkins checks out the latest source code.
4. Jenkins builds a Docker image.
5. Jenkins authenticates with Amazon ECR.
6. Jenkins pushes the Docker image to Amazon ECR.
7. The application is deployed on an EC2 instance.
8. Prometheus collects server metrics.
9. Grafana displays metrics through dashboards.
