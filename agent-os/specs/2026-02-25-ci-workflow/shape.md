# Shaping Notes

## Key Decisions
- **Single job** (`build-and-deploy`) — keeps the demo simple and easy to follow
- **`working-directory: app`** on each step — app lives in subdirectory, not repo root
- **`npm ci`** over `npm install` — deterministic, faster CI installs
- **`node-version-file: app/.nvmrc`** — reads Node 20 from existing .nvmrc
- **`exit 1` for deploy** — clear, intentional failure for the debugging demo
- **Cache npm** with `cache-dependency-path: app/package-lock.json` — faster CI runs

## What We're NOT Doing
- No multi-job pipeline (overkill for a demo)
- No actual deployment target (intentional)
- No environment secrets or variables needed
- No Docker or container builds
