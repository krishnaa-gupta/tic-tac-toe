# Tic-Tac-Toe CI/CD Deployment Steps

## Step 1: Create Application

* Create Tic-Tac-Toe application using HTML, CSS and JavaScript.
* Test application locally.

---

## Step 2: Create GitHub Repository

```bash
git init
git add .
git commit -m "Initial Commit"
git branch -M main
git remote add origin <repo-url>
git push -u origin main
```

---

## Step 3: Create Dockerfile

```dockerfile
FROM nginx:alpine

COPY App/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

---

## Step 4: Build Docker Image

```bash
docker build -t tic-tac-toe .
```

Verify:

```bash
docker images
```

---

## Step 5: Run Docker Container

```bash
docker run -d -p 80:80 --name tic-tac-toe tic-tac-toe
```

Verify:

```bash
docker ps
```

---

## Step 6: Launch EC2 Instance

Security Group:

* SSH (22)
* HTTP (80)
* Jenkins (8080)

Connect:

```bash
ssh -i key.pem ec2-user@<public-ip>
```

---

## Step 7: Install Docker on EC2

```bash
sudo yum update -y
sudo yum install docker -y

sudo systemctl start docker
sudo systemctl enable docker

sudo usermod -aG docker ec2-user
```

Verify:

```bash
docker --version
```

---

## Step 8: Install AWS CLI

```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"

unzip awscliv2.zip

sudo ./aws/install
```

Verify:

```bash
aws --version
```

Configure:

```bash
aws configure
```

Enter:

```text
AWS Access Key
AWS Secret Key
Region
Output Format
```

---

## Step 9: Create Amazon ECR Repository

AWS Console

→ ECR

→ Create Repository

Repository Name:

```text
tic-tac-toe
```

Login:

```bash
aws ecr get-login-password --region <region> \
| docker login \
--username AWS \
--password-stdin <account-id>.dkr.ecr.<region>.amazonaws.com
```

---

## Step 10: Tag Docker Image

```bash
docker tag tic-tac-toe:latest \
<account-id>.dkr.ecr.<region>.amazonaws.com/tic-tac-toe:latest
```

---

## Step 11: Push Image to ECR

```bash
docker push \
<account-id>.dkr.ecr.<region>.amazonaws.com/tic-tac-toe:latest
```

---

## Step 12: Install Jenkins

```bash
sudo yum install java-17-amazon-corretto -y

sudo wget -O /etc/yum.repos.d/jenkins.repo \
https://pkg.jenkins.io/redhat-stable/jenkins.repo

sudo rpm --import \
https://pkg.jenkins.io/redhat-stable/jenkins.io-2023.key

sudo yum install jenkins -y

sudo systemctl start jenkins
sudo systemctl enable jenkins
```

Access:

```text
http://<public-ip>:8080
```

---

## Step 13: Configure Jenkins

Install Plugins:

* Git
* Pipeline
* Docker Pipeline
* AWS Credentials

Add Credentials:

* GitHub Credentials
* AWS Credentials

---

## Step 14: Create Jenkins Pipeline

Stages:

1. Checkout Code
2. Build Docker Image
3. Login to ECR
4. Push Image to ECR
5. Deploy Container

---

## Step 15: Configure GitHub Webhook

GitHub Repository

→ Settings

→ Webhooks

→ Add Webhook

Payload URL:

```text
http://<jenkins-ip>:8080/github-webhook/
```

Content Type:

```text
application/json
```

---

## Step 16: Test CI/CD Pipeline

Make a code change:

```bash
git add .
git commit -m "Updated Application"
git push origin main
```

Pipeline Flow:

GitHub → Jenkins → Docker Build → Amazon ECR → EC2 Deployment

---

## Step 17: Verify Deployment

Check Containers:

```bash
docker ps
```

Check Images:

```bash
docker images
```

Open Browser:

```text
http://<ec2-public-ip>
```

Verify application is running successfully.
