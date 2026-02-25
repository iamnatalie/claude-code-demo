# CI Workflow Plan

## Goal
Add a GitHub Actions CI/CD pipeline for the Express demo app with an intentionally failing deploy step (for debugging demo purposes).

## Tasks
1. Save spec documentation (this folder)
2. Create `.github/workflows/deploy.yml` — CI pipeline with build, test, and intentional deploy failure
3. Add `app/__tests__/build.test.js` — validates build script works
4. Create `README.md` — project overview and quick start
5. Local verification — run tests, browser-test endpoints
6. GitHub Actions verification — confirm workflow runs in Chrome

## Files Created
- `agent-os/specs/2026-02-25-ci-workflow/*` — spec docs
- `.github/workflows/deploy.yml` — GitHub Actions workflow
- `app/__tests__/build.test.js` — build test
- `README.md` — project documentation

## Verification Criteria
- `cd app && npm test` passes all tests (3 existing + 1 new)
- App serves correct JSON on `/`, `/health`, and 404
- GitHub Actions workflow triggers on push, deploy step fails intentionally
