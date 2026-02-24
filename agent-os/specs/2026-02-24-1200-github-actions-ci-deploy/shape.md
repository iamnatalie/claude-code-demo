# Shape: GitHub Actions CI/CD Pipeline

## Scope

**In scope:**
- Single GitHub Actions workflow file for CI/CD
- README documentation for the project
- Build validation test
- Browser verification of running app

**Out of scope:**
- Modifying the Express app (already complete)
- Real AWS deployment (intentionally broken)
- Multiple workflow jobs or environments
- Docker containerization

## Decisions

1. **Single-job workflow** — Keeps the demo simple and readable. A multi-job setup with separate test/deploy stages is overkill for a demo.

2. **Intentional deploy failure** — The S3 deploy step will fail because there are no AWS secrets configured, no real S3 bucket, and no `dist/` output. This is by design for the debugging demo.

3. **`npm ci` over `npm install`** — CI best practice for deterministic installs from lockfile.

4. **Direct `aws s3 sync` over action** — Using raw AWS CLI with environment variables rather than `aws-actions/configure-aws-credentials` action. More transparent for demo purposes.

5. **`working-directory: app`** — All npm commands run in the `app/` subdirectory since that's where `package.json` lives.

6. **Node version from `.nvmrc`** — Uses `node-version-file: app/.nvmrc` (currently Node 20) for consistency.

## Context

- Express app has 3 endpoints: `/` (hello), `/health` (health check), 404 catch-all
- Existing Jest tests cover all 3 endpoints
- Build script is `echo 'Build complete'` — placeholder for demo
- App runs on port 3000
