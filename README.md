# My React App

This is a **React** application built using **Vite**, containerized with **Docker** for easy deployment.

---

## Features

- Built with React + TypeScript (Vite as build tool)
- Fast development server with HMR
- Production-ready Docker image
- Serves static files via Nginx inside Docker

---

## Prerequisites

- [Node.js](https://nodejs.org/) (for local development)
- [Docker](https://www.docker.com/) (for building and running the container)

---

## Development

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

---

## Docker Deployment

### Build Docker Image

```bash
docker build -t my-app .
```

### Run Docker Container

```bash
docker run -p 3000:80 my-app
```