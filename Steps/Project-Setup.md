# Tic-Tac-Toe Project Setup & Deployment Steps

## 1. Push Code to GitHub

```bash
git init
git add .
git commit -m "Initial Commit"
git branch -M main
git remote add origin <repo-url>
git push -u origin main
```

## 2. Build Docker Image

```bash
docker build -t tic-tac-toe .
```

Verify:

```bash
docker images
```

## 3. Run Docker Container

```bash
docker run -d -p 80:80 --name tic-tac-toe tic-tac-toe
```

Verify:

```bash
docker ps
```

## 4. Launch Amazon EC2

Allow:

* SSH (22)
* HTTP (80)
* Jenkins (8080)
* Node Exporter (9100)

Connect:

```bash
ssh -i key.pem ec2-user@<public-ip>
```

## 5. Create Amazon ECR Repository

Login to ECR:

```bash
aws ecr get-login-password --region <region> \
| docker login --username AWS \
--password-stdin <account-id>.dkr.ecr.<region>.amazonaws.com
```

Tag & Push Image:

```bash
docker tag tic-tac-toe:latest \
<account-id>.dkr.ecr.<region>.amazonaws.com/tic-tac-toe:latest

docker push \
<account-id>.dkr.ecr.<region>.amazonaws.com/tic-tac-toe:latest
```

## 6. Configure Jenkins Pipeline

Pipeline Stages:

1. Checkout Code
2. Test Stage
3. Build Docker Image
4. Login to Amazon ECR
5. Push Image to Amazon ECR

## 7. Configure GitHub Webhook

```text
http://<jenkins-ip>:8080/github-webhook/
```

## 8. Test Pipeline

```bash
git add .
git commit -m "Code Update"
git push origin main
```

Flow:

GitHub → Jenkins → Docker Build → Amazon ECR

## 9. Configure Monitoring

Install and configure:

* Node Exporter on Application Server
* Prometheus on Monitoring Server
* Grafana on Monitoring Server

## 10. Verify Monitoring

Open:

```text
http://<monitoring-server-ip>:9090
```

Prometheus Target Health should show:

```text
node_exporter UP
```

Open:

```text
http://<monitoring-server-ip>:3000
```

View Grafana Dashboard.

## 11. Verify Application

```bash
docker images
docker ps
```

Open:

```text
http://<ec2-public-ip>
```
