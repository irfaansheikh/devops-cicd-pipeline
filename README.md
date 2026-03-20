![CICD](./ss/cicd1.png)

# Project 1 — CI/CD Pipeline

# DevOps CI/CD Pipeline with GitHub Actions

This project demonstrates how to build an automated CI/CD pipeline that builds and deploys a containerized application when code is pushed to the repository.

The pipeline uses GitHub Actions to automate the build and deployment workflow.

![CICD](./ss/cicd2.png)


# Project Overview

The goal of this project is to simulate a real DevOps workflow where code changes trigger automated build and deployment processes.

When code is pushed to the repository:

        1. GitHub Actions workflow is triggered
        2. Application is built
        3. Docker image is created
        4. Application is deployed to a server

This removes the need for manual deployment.

# Architecture:

    Developer
        ↓
    GitHub Repository
        ↓
    GitHub Actions CI/CD Pipeline
        ↓
    Build Docker Image
        ↓
    Deploy to Server (EC2)

# Project Structure:

devops-cicd-pipeline/ <br>
    app/ <br>
    ├── app.js <br>
    ├── package.json <br>
    └── Dockerfile <br>
    .github/workflows/ <br>
    └── main.yml <br>
    README.md <br>

# Tools Used:

CI/CD Platform

    • GitHub Actions

Containerization

    • Docker

Cloud Infrastructure

    • Amazon EC2

Version Control

    • GitHub

# CI/CD Workflow

Pipeline steps executed:

        1. Checkout repository
        2. Install dependencies
        3. Build application
        4. Build Docker image
        5. Deploy to server

Example workflow trigger:

    on:
    push:
        branches:
        - main

This means every push to the main branch triggers the pipeline.

# Deployment Process

When a developer pushes code:

        1. GitHub Actions starts a workflow
        2. The application is built
        3. A Docker image is created
        4. The application is deployed to the server

This ensures deployments are automated and consistent.

# What This Project Demonstrates
        • Continuous Integration
        • Continuous Deployment
        • Automated builds
        • Automated deployments
        • Containerized application delivery

# Future Improvements
        • Push Docker images to Docker Hub
        • Add automated testing stage
        • Integrate with Kubernetes deployments

# Screenshots

Install dependencies

![Install dependencies](<./ss/install-dependencies.png>)

Docker Build Application

![Docker Build Application](<./ss/docker-build-application.png>) 

Docker Run Application

![Docker Run Application](<./ss/docker-run-application.png>) 

Application on Browser

![Application on Browser](<./ss/app-on-browser.png>) 

Docker Hub Login

![Docker Hub Login](<./ss/dockerhub-login.png>)

Docker Tag and Image Push to Docker Hub

![Docker Tag and Image Push to Docker Hub](<./ss/docker-tag-push.png>)

Login to EC2 Instance

![Login to EC2 Instance](<./ss/login-ec2.png>)

Docker on EC2 Instance

![Docker on EC2 Instance](<./ss/docker-ec2.png>)

Pull Docker Image on EC2 Instance

![Pull Docker Image on EC2 Instance](<./ss/pull-docker-ec2.png>)

Docker Run Application on EC2 Instance

![Docker Run Application on EC2 Instance](<./ss/docker-run-application-ec2.png>) 

Application on EC2 Instance IP 

![Application on Browser](<./ss/app-on-ec2-ip.png>)

Adding SSH keys on EC2 Instance  

![Adding SSH keys on EC2 Instance](<./ss/ssh-ec2.png>)

CICD Pipeline - Deploy to EC2 Server from GitHub Actions

![CICD Pipeline - Deploy to EC2 Server from GitHub Actions](<./ss/deploy-to-ec2.png>)
