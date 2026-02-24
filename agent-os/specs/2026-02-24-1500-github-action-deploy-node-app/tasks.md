# Tasks: GitHub Action — Deploy Node App

## Task 1: Create Node.js Express App

**Agent:** app-developer
**Status:** pending
**Depends on:** none

Create a minimal Express hello-world application in the `app/` directory:

**Files to create:**

- `app/index.js` — Express app with a single `GET /` route returning `{ message: "Hello from Demo App", status: "running" }`. Export the app for testing.
- `app/server.js` — Entry point that imports the app and listens on `process.env.PORT || 3000`
- `app/package.json` — name: `demo-node-app`, dependencies: `express`, devDependencies: `jest`, `supertest`. Scripts: `"start": "node server.js"`, `"test": "jest"`, `"build": "echo 'Build complete'"`
- `app/.nvmrc` — Contents: `20`

Keep it dead simple. This is a demo, not a production app.

---

## Task 2: Create GitHub Actions Workflow

**Agent:** devops-engineer
**Status:** pending
**Depends on:** none

Create `.github/workflows/deploy.yml` with this workflow:

- **Trigger:** push to `main` branch
- **Runner:** `ubuntu-latest`
- **Steps:**
  1. `actions/checkout@v4`
  2. `actions/setup-node@v4` with `node-version-file: 'app/.nvmrc'`
  3. Install dependencies: `cd app && npm install`
  4. Run tests: `cd app && npm test`
  5. Build: `cd app && npm run build`
  6. Deploy to production (this step intentionally fails):
     ```
     echo "Deploying to production server..."
     curl -f -X POST https://deploy.example.com/api/deploy \
       -H "Authorization: Bearer ${{ secrets.DEPLOY_TOKEN }}" \
       -d '{"app": "demo-node-app", "version": "${{ github.sha }}"}'
     ```

The `-f` flag on curl ensures it returns a non-zero exit code on HTTP errors. The deploy step **must fail** — `deploy.example.com` doesn't exist. This is intentional for the debugging demo.

---

## Task 3: Create Tests

**Agent:** test-writer
**Status:** pending
**Depends on:** none

Create `app/__tests__/index.test.js` using Jest + supertest:

- Test that `GET /` returns status 200
- Test that `GET /` response body contains `{ message: "Hello from Demo App", status: "running" }`
- Test that `GET /unknown` returns status 404

The app should be imported from `../index.js`. Use `supertest` to make HTTP requests.

Ensure `app/package.json` has `jest` and `supertest` in devDependencies (coordinate with Task 1).

---

## Task 4: Create Documentation

**Agent:** docs-writer
**Status:** pending
**Depends on:** none

Create `README.md` at the project root with:

- **Title:** "Demo: GitHub Actions Deploy Workflow"
- **What it is:** A demo project showcasing Claude Code Agent OS teams and Chrome browser testing
- **Local setup:** `cd app && npm install && npm start`, then visit `http://localhost:3000`
- **GitHub Action:** Explain the workflow triggers on push to main, runs install → test → build → deploy
- **Expected behavior:** The deploy step intentionally fails (deploy.example.com doesn't exist) — this is designed for a debugging demo
- **How to fix:** Replace the deploy step with a real deployment target (e.g., Vercel, Railway, AWS)

---

## Task 5: Git Commit and Push

**Status:** pending
**Depends on:** Task 1, Task 2, Task 3, Task 4

After all files are created:

1. `git add app/ .github/ README.md`
2. `git commit -m "Add Node.js app with GitHub Actions deploy workflow"`
3. `git push origin main`

This triggers the GitHub Actions workflow automatically.

---

## Task 6: Chrome Browser Testing and Debugging

**Status:** pending
**Depends on:** Task 5

Use Chrome browser automation to verify and debug:

1. Navigate to `https://github.com/iamnatalie/claude-code-demo`
2. Click the **Actions** tab
3. Wait for the workflow run to appear (triggered by the push)
4. Click into the workflow run
5. Expand each step and read logs:
   - Checkout — expect success
   - Setup Node — expect success
   - Install deps — expect success
   - Run tests — expect success
   - Build — expect success
   - **Deploy — expect failure** (DNS resolution error for deploy.example.com)
6. Take a screenshot of the failure
7. Read and report the error message from the deploy step logs
