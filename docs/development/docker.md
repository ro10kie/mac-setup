---
title: Docker
description: Run containers and Compose projects on an Apple Silicon Mac
---

[Docker Desktop](https://docs.docker.com/desktop/setup/install/mac-install/) provides a container engine, the `docker` command, and Docker Compose on macOS. Install it when a project uses containers or provides a Compose file.

## Installation

Install the [Docker Desktop Homebrew cask](https://formulae.brew.sh/cask/docker-desktop):

```sh
brew install --cask docker-desktop
```

Open **Docker** from Applications and complete its first-run setup. Wait until
the engine reports that it is running. Check the Docker CLI and engine:

```sh
docker version
```

This should show both a client and a server. Check Docker Compose separately:

```sh
docker compose version
```

Docker Desktop supplies both commands, so they do not require separate
Homebrew formulae.

## Usage

Start Docker Desktop before running commands that need the engine. An **image**
is a template; a **container** is an instance created from an image. Replace
uppercase placeholders such as `IMAGE`, `TAG`, and `CONTAINER_NAME` with values
from your project.

### Check the engine

| Command | What it does |
| --- | --- |
| `docker info` | Show details about the running engine, including its storage and configuration. |

### Work with images

| Command | What it does |
| --- | --- |
| `docker pull IMAGE:TAG` | Download a specific image and tag from a registry. |
| `docker image ls` | List images available locally. |
| `docker build -t IMAGE:TAG BUILD_CONTEXT` | Build an image from a Dockerfile in `BUILD_CONTEXT` and give it a local name and tag. |

### Work with containers

For an image that runs a network service, start a container in the background
and publish its port on this Mac. `127.0.0.1` limits access to the local
machine; replace the port placeholders with the host and container ports:

```sh
docker run -d --name CONTAINER_NAME -p 127.0.0.1:HOST_PORT:CONTAINER_PORT IMAGE:TAG
```

Inspect, manage, and remove containers with these commands:

| Command | What it does |
| --- | --- |
| `docker ps` | List running containers, including their names, status, and published ports. |
| `docker ps -a` | Include stopped containers. |
| `docker logs -f CONTAINER_NAME` | Follow a container's output. Press **Control-C** to stop following without stopping the container. |
| `docker exec -it CONTAINER_NAME sh` | Open a shell in a running container, if its image includes `sh`. |
| `docker stop CONTAINER_NAME` | Stop a running container while keeping it available to start again. |
| `docker start CONTAINER_NAME` | Restart a stopped container. |
| `docker rm CONTAINER_NAME` | Remove a stopped container. |

### Work with Compose projects

Run these commands from a project directory containing `compose.yaml` or
`docker-compose.yml`:

| Command | What it does |
| --- | --- |
| `docker compose up -d` | Start the project's services in the background. |
| `docker compose up -d --build` | Rebuild images defined by the project before starting its services. |
| `docker compose ps` | Show the services and their current state. |
| `docker compose logs -f` | Follow service output. Press **Control-C** to stop following without stopping the services. |
| `docker compose down` | Stop and remove the project's service containers and networks. Named volumes are kept by default. |

Use the project's documentation for required environment variables, volumes,
and ports. The [Docker CLI reference](https://docs.docker.com/reference/cli/docker/)
and [Compose CLI reference](https://docs.docker.com/reference/cli/docker/compose/)
cover additional commands.
