# Plan: GitHub Action — Deploy Node App

## Overview

Create a demo Node.js app with a GitHub Actions workflow for deployment. Use Agent OS teams for parallel creation, then verify and debug via Chrome browser automation on GitHub.

---

## Task 1: Save Spec Documentation

Create `agent-os/specs/2026-02-24-1500-github-action-deploy-node-app/` with:
- **plan.md** — This plan
- **shape.md** — Shaping notes and decisions
- **standards.md** — Relevant standards
- **references.md** — Reference notes

---

## Task 2: Create Node.js Express App

**Agent: app-developer**

Create a minimal Express hello-world application:

- `app/index.js` — Express server, single `GET /` route returning `{ message: "Hello from Demo App", status: "running" }`
- `app/server.js` — Server entry point (listens on `PORT` env var or 3000)
- `app/package.json` — Dependencies: `express`. Scripts: `start`, `test`, `build`
- `app/.nvmrc` — Pin Node.js version (e.g., `20`)

Keep it dead simple. This is a demo, not a production app.

---

## Task 3: Create GitHub Actions Workflow

**Agent: devops-engineer**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Node App
on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version-file: 'app/.nvmrc'
      - name: Install dependencies
        run: cd app && npm install
      - name: Run tests
        run: cd app && npm test
      - name: Build
        run: cd app && npm run build
      - name: Deploy to production
        run: |
          echo "Deploying to production server..."
          curl -X POST https://deploy.example.com/api/deploy \
            -H "Authorization: Bearer ${{ secrets.DEPLOY_TOKEN }}" \
            -d '{"app": "demo-node-app", "version": "${{ github.sha }}"}'
```

The deploy step **intentionally fails** — `deploy.example.com` doesn't exist. This creates the debugging scenario for the Chrome demo.

---

## Task 4: Create Tests

**Agent: test-writer**

Create `app/__tests__/index.test.js`:

- Test that `GET /` returns 200
- Test that response contains expected JSON shape
- Test that unknown routes return 404
- Use Jest + supertest

Create or update `app/package.json` with test dependencies: `jest`, `supertest`.

---

## Task 5: Create Documentation

**Agent: docs-writer**

Create `README.md` at project root:

- What this project is (demo for Agent OS + Chrome testing)
- How to run locally (`cd app && npm install && npm start`)
- How the GitHub Action works (trigger, steps, expected failure)
- How to fix the deploy step (replace with real deployment target)

---

## Task 6: Initialize Git Repo and Push to GitHub

**Sequential — after Tasks 2-5 complete**

1. `git init` in project root
2. Create `.gitignore` (node_modules, .env, etc.)
3. `git add` all files
4. `git commit -m "Initial commit: demo Node app with GitHub Actions deploy workflow"`
5. Create GitHub repo via `gh repo create`
6. `git push` to trigger the workflow

---

## Task 7: Chrome Browser Testing and Debugging

**Sequential — after Task 6**

Use Chrome browser automation to:

1. Navigate to the GitHub repo page
2. Click on the **Actions** tab
3. Wait for the workflow run to appear
4. Click into the workflow run
5. Expand each step to read logs:
   - Checkout — should succeed
   - Setup Node — should succeed
   - Install dependencies — should succeed
   - Run tests — should succeed (if tests are correct)
   - Build — should succeed
   - Deploy — **should fail** (can't reach deploy.example.com)
6. Screenshot the failure
7. Read the error message from the logs
8. Discuss what went wrong and how to fix it

---

## Success Criteria

- [ ] All 4 agents work in parallel on Tasks 2-5
- [ ] Code is pushed to GitHub and triggers the workflow
- [ ] Chrome shows the Actions run with visible step-by-step logs
- [ ] Deploy step fails with a clear error (DNS/connection failure)
- [ ] We can read and interpret the failure in Chrome
