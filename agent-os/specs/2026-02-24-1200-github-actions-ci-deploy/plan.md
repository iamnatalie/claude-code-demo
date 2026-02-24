# GitHub Actions CI/CD Pipeline — Express App Deploy to S3

## Context

The project has a working Express.js app in `app/` (3 endpoints, passing Jest tests) but no CI/CD pipeline. We're creating a GitHub Actions workflow, docs, and an optional test — then verifying everything works via Chrome browser automation. The deploy step **intentionally fails** (per CLAUDE.md) for the debugging demo.

## Task 1: Save Spec Documentation

Create `agent-os/specs/2026-02-24-1200-github-actions-ci-deploy/` with:

- **plan.md** — Full plan (this document)
- **shape.md** — Shaping notes (scope, decisions, context)
- **standards.md** — Full content of 3 standards: global/coding-style, global/error-handling, testing/test-writing
- **references.md** — Existing test patterns in `app/__tests__/index.test.js`

## Task 2: Create GitHub Actions Workflow (devops-engineer)

**File:** `.github/workflows/deploy.yml` (CREATE)

Single-job pipeline triggered on push to `main`:

1. **Checkout** — `actions/checkout@v4`
2. **Setup Node.js** — `actions/setup-node@v4` with `node-version-file: app/.nvmrc`, npm caching
3. **Install deps** — `npm ci` in `app/` directory
4. **Run tests** — `npm test` in `app/` directory
5. **Build** — `npm run build` in `app/` directory
6. **Deploy to S3** — `aws s3 sync app/dist/ s3://my-demo-app-bucket --delete` using `secrets.AWS_ACCESS_KEY_ID` and `secrets.AWS_SECRET_ACCESS_KEY`

Steps 1-5 will succeed. Step 6 intentionally fails (no AWS secrets, no bucket, no dist/).

## Task 3: Create Project README (docs-writer)

**File:** `README.md` at repo root (CREATE)

Contents: project description, quick start (run locally + tests), CI/CD pipeline overview with note about intentional deploy failure, project structure.

## Task 4: Add Build Validation Test (test-writer)

**File:** `app/__tests__/build.test.js` (CREATE)

Simple test verifying `npm run build` completes without errors. Follows existing test patterns from `app/__tests__/index.test.js`.

## Task 5: Browser Test in Chrome

After committing, use Chrome browser automation to:
1. Start the app locally (`npm start` in `app/`)
2. Navigate to `http://localhost:3000` and verify JSON response
3. Navigate to `http://localhost:3000/health` and verify health endpoint

## Agent Team Structure

| Agent | Role | Tasks |
|-------|------|-------|
| **app-developer** | Express app code | No changes needed (app complete) |
| **devops-engineer** | GitHub Actions YAML | Task 2 |
| **test-writer** | Jest tests | Task 4 |
| **docs-writer** | README docs | Task 3 |

## Key Design Decisions

- **Single job** (not separate test/deploy jobs) — simple for the demo
- **`npm ci`** over `npm install` — deterministic CI installs
- **Direct AWS env vars** over `aws-actions/configure-aws-credentials` — simpler, transparent
- **No app changes needed** — existing build script (`echo 'Build complete'`) is sufficient
- **`working-directory: app`** on all npm steps — app lives in subdirectory

## Files Modified

| File | Action | Agent |
|------|--------|-------|
| `.github/workflows/deploy.yml` | CREATE | devops-engineer |
| `README.md` | CREATE | docs-writer |
| `app/__tests__/build.test.js` | CREATE | test-writer |
| `agent-os/specs/2026-02-24-1200-github-actions-ci-deploy/*` | CREATE | leader |
