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

Connect:

```bash
ssh -i key.pem ec2-user@<public-ip>
```

## 5. Install Docker & AWS CLI

```bash
sudo yum install docker -y
sudo systemctl start docker
sudo systemctl enable docker
```

```bash
aws configure
```

## 6. Create Amazon ECR Repository

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

## 7. Install Jenkins

```bash
sudo yum install java-17-amazon-corretto -y
sudo yum install jenkins -y

sudo systemctl start jenkins
sudo systemctl enable jenkins
```

Access:

```text
http://<public-ip>:8080
```

## 8. Configure CI Pipeline

Pipeline Stages:

1. Checkout Code
2. Test Stage
3. Build Docker Image
4. Login to Amazon ECR
5. Push Image to Amazon ECR

## 9. Configure GitHub Webhook

```text
http://<jenkins-ip>:8080/github-webhook/
```

## 10. Test Pipeline

```bash
git add .
git commit -m "Code Update"
git push origin main
```

Flow:

GitHub → Jenkins → Docker Build → Amazon ECR

## 11. Verify

```bash
docker images
docker ps
```

Open:

```text
http://<ec2-public-ip>
```
