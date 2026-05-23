# DevOps Zero to Hero 🚀

> A structured, hands-on DevOps learning repository — covering everything from Linux fundamentals to Kubernetes orchestration, with real-world scripts, configs, and notes built along the way.

This is my complete DevOps learning journey documented in one place. Each folder is a self-contained module with notes, commands, scripts, and configs — organized so anyone can follow the same path from zero to production-ready.

---

## Table of Contents

- [Who This Is For](#who-this-is-for)
- [Modules](#modules)
- [How to Use This Repo](#how-to-use-this-repo)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [About](#about)

---

## Who This Is For

- Developers transitioning into DevOps or Cloud Engineering
- Students looking for structured, practical DevOps notes
- Engineers who want quick reference material on tools like Docker, Kubernetes, Ansible, or Terraform
- Anyone who learns better by doing rather than just reading

---

## Modules

### 🐧 Linux
Core Linux skills every DevOps engineer needs — file system navigation, user management, permissions, process management, and essential commands.

📁 `Linux/`

---

### 💻 Shell Scripting
Bash scripting for automation — variables, loops, conditionals, functions, cron jobs, and real DevOps automation scripts.

📁 `shell-scripting/`

---

### 🌐 Computer Networks
Networking fundamentals for DevOps — IP addressing, DNS, HTTP/HTTPS, TCP/UDP, firewalls, and how traffic flows in cloud environments.

📁 `Computer Networks/`

---

### 🐙 Git & GitHub
Version control from the ground up — branching strategies, rebasing, pull requests, resolving conflicts, and GitHub workflows for teams.

📁 `Git & Github/`

---

### 🐳 Docker
Containerization fundamentals — writing Dockerfiles, building and pushing images, Docker Compose for multi-service apps, networking, and volumes.

📁 `DOCKER/`

---

### ☸️ Kubernetes
Container orchestration at scale — Pods, Deployments, Services, ConfigMaps, Secrets, Ingress, Helm charts, and managing production clusters.

📁 `Kubernetes/`

---

### 🔁 Jenkins
CI/CD pipelines with Jenkins — setting up Jenkins, writing declarative pipelines, integrating with GitHub, Docker builds, and automated deployments.

📁 `jenkins/`

---

### 🤖 Ansible
Infrastructure automation — inventory files, playbooks, roles, variables, and automating server configuration and deployments at scale.

📁 `ansible/`

---

### 🏗️ Terraform
Infrastructure as Code — provisioning cloud resources on AWS with Terraform, state management, modules, variables, and remote backends.

📁 `Terraform/`

---

## How to Use This Repo

Each module folder is independent. You can go through them in order (recommended for beginners) or jump straight to the tool you need.

**Recommended learning order:**

```
Linux → Shell Scripting → Computer Networks → Git & GitHub
  → Docker → Kubernetes → Jenkins → Ansible → Terraform
```

Clone the repo and work through each folder locally:

```bash
git clone https://github.com/Wcoder547/devops-zero-to-hero.git
cd devops-zero-to-hero
```

Each folder contains notes, commands, and scripts you can run and modify on your own machine or a cloud VM.

---

## Prerequisites

No prior DevOps experience needed. To follow along with the hands-on parts you'll want:

- A Linux machine, VM, or WSL2 on Windows
- Docker installed ([docs.docker.com](https://docs.docker.com/get-docker/))
- An AWS free-tier account for Terraform and cloud sections
- Git installed and a GitHub account

---

## Project Structure

```
devops-zero-to-hero/
├── Linux/                  # Linux fundamentals & commands
├── shell-scripting/        # Bash scripts & automation
├── Computer Networks/      # Networking concepts for DevOps
├── Git & Github/           # Version control & workflows
├── DOCKER/                 # Containerization & Docker Compose
├── Kubernetes/             # Container orchestration
├── jenkins/                # CI/CD pipelines
├── ansible/                # Configuration management
├── Terraform/              # Infrastructure as Code
├── CI.jpg                  # CI pipeline diagram
├── cd.jpg                  # CD pipeline diagram
├── PIPELINE.jpg            # Full CI/CD pipeline overview
├── DevOps.jpg              # DevOps lifecycle diagram
├── project-desc.pdf        # Full project description
└── README.md
```

---

## About

This repository is the result of going through DevOps tools and practices the right way — not just watching tutorials, but writing the scripts, breaking things, and building real understanding of how production systems work.

It covers the full DevOps toolchain: Linux as the foundation, containers with Docker, orchestration with Kubernetes, automation with Ansible, infrastructure provisioning with Terraform, and CI/CD pipelines with Jenkins — with Git and networking knowledge tying it all together.

**Built by [Waseem Akram](https://www.linkedin.com/in/wasim-akram-dev/)** — Full-Stack Developer and DevOps Engineer based in Pakistan, working across the MERN stack, Generative AI, and cloud automation. This repo represents the DevOps side of that work — the infrastructure knowledge behind the applications.

---

*If this helped you, consider giving it a ⭐ — it helps others find it too.*
