# Docker Setup

This project includes Docker configuration for easy development and deployment.

## Quick Start

### Production Build
```bash
# Build and run production container
docker-compose up --build

# Or build manually
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### Development Build
```bash
# Run development container with hot reload
docker-compose --profile dev up --build

# Or build manually
docker build -f Dockerfile.dev -t portfolio-dev .
docker run -p 3001:3000 -v $(pwd):/app portfolio-dev
```

## Docker Commands

### Build Image
```bash
# Production
docker build -t portfolio .

# Development
docker build -f Dockerfile.dev -t portfolio-dev .
```

### Run Container
```bash
# Production
docker run -p 3000:3000 portfolio

# Development with volume mount
docker run -p 3001:3000 -v $(pwd):/app portfolio-dev
```

### Stop Container
```bash
docker-compose down
```

## Features

- **Multi-stage build** for optimized production images
- **Non-root user** for security
- **Health checks** for monitoring
- **Volume mounting** for development
- **Hot reload** in development mode
- **Alpine Linux** for smaller image size

## Ports

- **Production**: http://localhost:3000
- **Development**: http://localhost:3001

## Health Check

The application includes a health check endpoint at `/api/health` that returns:
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 123.456
}
``` 