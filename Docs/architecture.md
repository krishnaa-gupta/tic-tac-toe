# Architecture

## Project Overview

This project implements Infrastructure as Code (IaC), CI/CD, and monitoring for a containerized application using Terraform, Jenkins, Docker, AWS, Prometheus, and Grafana.

## Architecture Flow

Terraform → AWS Infrastructure (EC2)

GitHub → Jenkins → Docker Build → Amazon ECR → Amazon EC2

Node Exporter → Prometheus → Grafana

## Workflow

1. Terraform provisions AWS EC2 instances.
2. GitHub webhook triggers the Jenkins pipeline.
3. Jenkins builds and pushes Docker images to Amazon ECR.
4. The application is deployed on Amazon EC2.
5. Prometheus collects metrics from Node Exporter.
6. Grafana visualizes system metrics through dashboards.
