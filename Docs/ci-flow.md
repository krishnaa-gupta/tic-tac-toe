# CI/CD Flow

1. Terraform provisions AWS infrastructure.
2. Developer pushes code to the GitHub repository.
3. GitHub webhook triggers the Jenkins pipeline.
4. Jenkins checks out the latest source code.
5. Jenkins builds a Docker image.
6. Jenkins authenticates with Amazon ECR.
7. Jenkins pushes the Docker image to Amazon ECR.
8. The application is deployed on an Amazon EC2 instance.
9. Prometheus collects metrics from Node Exporter.
10. Grafana displays metrics through dashboards.
