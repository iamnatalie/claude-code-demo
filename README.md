# Claude Code Demo

Demo project showcasing Claude Code Agent OS teams and Chrome browser testing for DevOps workflows. Simple Express.js hello-world app with GitHub Actions CI/CD.

## Quick Start

```bash
cd app
npm install
npm start        # runs on http://localhost:3000
npm test         # runs Jest tests
```

## API Endpoints

| Method | Path    | Response                                                     |
|--------|---------|--------------------------------------------------------------|
| GET    | `/`     | `{ "message": "Hello from Demo App", "status": "running" }` |
| GET    | `/health` | `{ "healthy": true, "uptime": <seconds> }`                |
| *      | any other | `404 { "error": "Not found" }`                             |

## CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/deploy.yml`) runs on every push to `main`.

**Steps:**

1. Checkout repository
2. Setup Node.js 20
3. Install dependencies (`npm ci`)
4. Run tests (`npm test`)
5. Build (`npm run build`)
6. Deploy to S3 (`aws s3 sync`)

> The deploy step intentionally fails -- this is by design for the debugging demo (no AWS secrets or S3 bucket configured).

## Project Structure

```
app/                  Express.js application
  index.js            App routes and middleware
  server.js           Server entry point
  __tests__/          Jest tests
.github/
  workflows/
    deploy.yml        CI/CD pipeline
agent-os/
  specs/              Spec documentation
```
