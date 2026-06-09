# CI/CD Flow

1. Developer pushes code to GitHub
2. GitHub Webhook triggers Jenkins
3. Jenkins pulls latest code
4. Jenkins builds Docker image
5. Jenkins pushes image to AWS ECR
6. Jenkins pulls latest image on EC2
7. Old container is removed
8. New container is deployed