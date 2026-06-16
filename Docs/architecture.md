# Architecture

## Project Overview

This project demonstrates a CI/CD pipeline and monitoring setup for a containerized Tic-Tac-Toe web application using GitHub, Jenkins, Docker, Amazon ECR, Amazon EC2, Prometheus, and Grafana.

## Architecture Flow

Developer

→ GitHub Repository

→ GitHub Webhook

→ Jenkins Pipeline

→ Docker Image Build

→ Amazon ECR

→ Amazon EC2

→ Prometheus

→ Grafana

→ End User

## Workflow

1. Developer pushes code to GitHub.
2. GitHub triggers Jenkins through a webhook.
3. Jenkins builds and pushes the Docker image to Amazon ECR.
4. The application runs on an EC2 instance.
5. Prometheus collects server metrics.
6. Grafana visualizes the metrics through dashboards.
