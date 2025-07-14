# 🚀 Docker Complete Guide – From Zero to Hero

Welcome to your all-in-one guide to understanding and working with Docker — the modern way to build, ship, and run applications.

---

## 📦 What is Docker?

Docker is an open-source containerization platform that enables developers to package applications along with their dependencies into isolated environments called **containers**.

### 🧱 Docker Image vs Docker Container

* **Docker Image** = Think of it like an `.iso` file (CD/DVD) – a read-only template.
* **Docker Container** = A running instance of an image – lightweight and efficient like a virtual machine, but **not** a full VM.

> ⚠️ Unlike VMs, containers **share the host OS kernel**, making them faster and less resource-hungry.

---

## 🛠 Docker vs Virtual Machines (VMs)

| Feature         | Docker (Containers) | Virtual Machine (VM) |
| --------------- | ------------------- | -------------------- |
| Startup Time    | Seconds             | Minutes              |
| OS Kernel       | Shared with host    | Separate OS instance |
| Resource Usage  | Low                 | High                 |
| Portability     | High (image-based)  | Moderate             |
| Isolation Level | Process-level       | Hardware-level       |

---

## 🔧 Docker Installation & Setup

Follow the [official Docker documentation](https://docs.docker.com/get-docker/) for installation steps on your OS.

Once installed, test with:

```bash
docker --version
docker info
```

---

## 🐳 Docker Hub & Pulling Images

Docker Hub is a public image repository.

### Pull Example:

```bash
docker pull postgres
docker pull mongo
```

---

## 🚀 Running Containers

### PostgreSQL

```bash
docker run -e POSTGRES_PASSWORD=mysecretpassword -d postgres
docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres
docker run --name my-postgres-old -e POSTGRES_PASSWORD=mysecretpassword -d postgres:13.8
docker stop my-postgres
docker container ls
```

### MongoDB

```bash
docker run --name my-mongodb -p 4000:27017 -d mongo
docker logs my-mongodb
```






## 🗂 Docker Volumes – Persistent Storage


Docker containers are **ephemeral** — their data is lost when the container stops. Volumes solve this by providing persistent storage that exists outside the container lifecycle.

#### ✅ Why Volumes?

* Persist data (e.g., databases)
* Share data between containers
* Simplify backups and migrations

#### 📦 Types of Volumes

* **Named Volumes** (managed by Docker)
* **Bind Mounts** (host system path mapped to container)

#### 🔧 Common Volume Commands

```bash
# List all volumes
docker volume ls

# Create a volume
docker volume create my-volume

# Remove a volume
docker volume rm my-volume

# Use a volume in a container
docker run -v my-volume:/data -d ubuntu

# Mount host directory (bind mount)
docker run -v /home/user/data:/app/data -d ubuntu

docker volume prune
```

#### 📝 Example – Persisting MongoDB Data

```bash
docker volume create mongo-data

docker run -d \
  --name mongodb \
  -v mongo-data:/data/db \
  mongo
```

---

### 🌐 Docker Networks – Inter-Container Communication

Docker networks allow containers to communicate with each other securely and efficiently.

#### ✅ Why Use Docker Networks?

* Isolate services
* Avoid hardcoding IP addresses
* Resolve container names as hostnames

#### 🔧 Common Network Commands

```bash
# List networks
docker network ls

# Create a custom bridge network
docker network create my-network

# Run containers on the same network
docker run -d --net my-network --name mongo mongo
docker run -d --net my-network --name app my-app
```
#### 📝 Example – MongoDB with Mongo Express

Containers can communicate using service names:

```bash
# Create network
docker network create mongo-network

# MongoDB
docker run -d --net mongo-network --name mongodb \
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=password \
mongo

# Mongo Express
docker run -d --net mongo-network --name mongo-express \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=password \
-e ME_CONFIG_MONGODB_SERVER=mongodb \
-p 8081:8081 mongo-express
```

---

### 🧪 Multi-Stage Docker Builds – Optimized Dockerfiles

A **multi-stage build** lets you:

* Build dependencies in one stage
* Copy only the final compiled app into the final image
* Keep images small, fast, and secure

#### 🏗️ Why Multi-Stage?

* Clean final image (no dev tools)
* Smaller image size
* Better caching and CI/CD performance

#### 📝 Example – Node.js Multi-Stage Dockerfile

```Dockerfile
# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Run
FROM node:18-alpine

WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["node", "dist/index.js"]
```

#### 🔧 Build & Run

```bash
docker build -t my-node-app:multi-stage .
docker run -d -p 3000:3000 my-node-app:multi-stage
```

> 🧼 Result: Clean image with only runtime essentials – no source code or build tools.


## 🛠 Docker Compose – Multi-Container Apps

### `docker-compose.yaml`

```yaml
version: '3.8'

services:
  mongodb:
    image: mongo
    container_name: mongodb
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=password
    networks:
      - mongo-net
    ports:
      - "27017:27017"

  mongo-express:
    image: mongo-express
    container_name: mongo-express
    environment:
      - ME_CONFIG_MONGODB_ADMINUSERNAME=admin
      - ME_CONFIG_MONGODB_ADMINPASSWORD=password
      - ME_CONFIG_MONGODB_SERVER=mongodb
    ports:
      - "8081:8081"
    networks:
      - mongo-net

networks:
  mongo-net:
    driver: bridge
```

### Commands:

```bash
docker compose -f docker-compose.yaml up -d
docker compose -f docker-compose.yaml down
```

---

## 📁 Dockerfile – Build Custom Images

### Example: Node.js Dockerfile

```Dockerfile
# Use official image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy files
COPY package*.json ./
RUN npm install
COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["node", "index.js"]
```

### Build & Run Image:

```bash
docker build -t waseemmalik547/hey-node-js:0.0.0.1.RELEASE .
docker run -d -p 3000:3000 waseemmalik547/hey-node-js:0.0.0.1.RELEASE
```

---

## 🔐 Docker Hub Login & Push Image

```bash
docker login
docker push waseemmalik547/hey-node-js:0.0.0.1.RELEASE
docker pull waseemmalik547/hey-node-js:0.0.0.1.RELEASE
```

---

## 📌 Common Docker Commands

| Command                   | Description                                    |
| ------------------------- | ---------------------------------------------- |
| `docker ps`               | List running containers                        |
| `docker ps -a`            | List all containers                            |
| `docker image ls`         | List images                                    |
| `docker container ls`     | Same as `docker ps`                            |
| `docker stop <container>` | Stop container                                 |
| `docker rm <container>`   | Remove container                               |
| `docker rmi <image>`      | Remove image                                   |
| `docker container prune`  | Remove all stopped containers                  |
| `docker system prune`     | Remove all unused containers, networks, images |

---

## 📚 Helpful References

* [🔗 Docker Documentation](https://docs.docker.com/)
* [🔗 Docker CLI Reference](https://docs.docker.com/engine/reference/commandline/cli/)
* [🔗 Docker API Reference](https://docs.docker.com/engine/api/latest/)
* [🔗 Docker Hub](https://hub.docker.com/)

---

## 💡 Pro Tips

* Use `.dockerignore` to exclude files from builds.
* Use `--rm` in `docker run` for auto-removal after stop.
* Use named volumes for persistent database data.
* Use labels and tags for versioning your images.
* Always pin image versions in production (`mongo:6.0`, not `mongo`).

---

## 🙌 Contributing

Feel free to fork and improve this guide with PRs.

---

## 📜 License

MIT © 2025 [Waseem Malik](https://github.com/waseemmalik547)

---
