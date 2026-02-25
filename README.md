# Claude Code Demo

Demo project showcasing Claude Code Agent OS teams and Chrome browser testing for DevOps workflows.

## Quick Start

```bash
cd app && npm install && npm start
```

The server starts on `http://localhost:3000`.

## API Endpoints

| Endpoint | Method | Response |
|----------|--------|----------|
| `/` | GET | `{ message, status }` |
| `/health` | GET | `{ healthy, uptime }` |
| `/*` | GET | `{ error: "Not found" }` (404) |

## CI/CD

The GitHub Actions workflow (`.github/workflows/deploy.yml`) runs on pushes and PRs to `main`. It installs dependencies, runs tests, and builds the app.

**Note:** The deploy step intentionally fails (`exit 1`). This is by design -- the demo uses a broken deploy to showcase debugging CI pipelines with Claude Code and Chrome browser testing.

## Project Structure

```
app/
  index.js          # Express app with routes
  server.js         # Server entry point
  package.json      # Dependencies and scripts
  __tests__/        # Jest test suite
.github/
  workflows/
    deploy.yml      # CI & Deploy workflow
```

## Testing

```bash
cd app && npm test
```

Tests use Jest and supertest to verify route responses and status codes.
