# Project Setup & Deployment Steps

## 1. Provision AWS Infrastructure

```bash
terraform init
terraform plan
terraform apply
```

## 2. Push Code to GitHub

```bash
git add .
git commit -m "Code Update"
git push origin main
```

## 3. Configure Jenkins Pipeline

Pipeline Stages:

1. Checkout Code
2. Build Docker Image
3. Login to Amazon ECR
4. Push Image to Amazon ECR

## 4. Configure GitHub Webhook

```text
http://<jenkins-ip>:8080/github-webhook/
```

## 5. Trigger the Pipeline

```bash
git add .
git commit -m "Update"
git push origin main
```

Flow:

Terraform → AWS Infrastructure

GitHub → Jenkins → Docker Build → Amazon ECR → Amazon EC2

## 6. Configure Monitoring

Install and configure:

* Node Exporter on Application Server
* Prometheus on Monitoring Server
* Grafana on Monitoring Server

## 7. Verify Monitoring

Prometheus:

```text
http://<monitoring-server-ip>:9090
```

Grafana:

```text
http://<monitoring-server-ip>:3000
```

## 8. Verify Application

```bash
docker ps
```

Open:

```text
http://<ec2-public-ip>
```
