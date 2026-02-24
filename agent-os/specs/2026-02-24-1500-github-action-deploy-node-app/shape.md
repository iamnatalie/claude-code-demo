# GitHub Action: Deploy Node App — Shaping Notes

## Scope

Build a simple GitHub Action workflow that deploys a demo Node.js (Express) app. This is a **demo project** designed to showcase two Claude Code capabilities:

1. **Agent OS Teams** — Multiple agents collaborate in parallel to create the app, workflow, tests, and docs
2. **Chrome Browser Testing** — Navigate GitHub's Actions UI to watch the workflow run, read logs, and debug failures

The action **intentionally does not need to succeed perfectly**. The demo value is in showing the creation process with agent teams and the debugging/investigation workflow in Chrome.

## Decisions

- **Framework:** Express.js — minimal, well-known, easy to understand in a demo
- **GitHub Action trigger:** `push` to `main` — simplest trigger for demo purposes
- **Workflow steps:** Install deps → Run tests → Build → Deploy (deploy step will likely fail since there's no real deployment target — this is intentional for the debugging demo)
- **Agent team size:** 4 agents working in parallel
- **No real deployment target:** The deploy step references a placeholder (e.g., a non-existent server or cloud service), creating a natural failure point to debug in Chrome

## Context

- **Visuals:** None — this is a CLI/GitHub UI demo
- **References:** No existing code in this repo to reference
- **Product alignment:** Aligns with the demo agenda (agenda.md) — specifically sections 3 (Teams and Parallel Agents) and 4 (Chrome Browser Integration)

## Agent Team Design

| Agent | Role | Responsibility |
|-------|------|---------------|
| **app-developer** | Node.js App | Express hello-world app, package.json, app entry point |
| **devops-engineer** | GitHub Actions | `.github/workflows/deploy.yml` with build, test, deploy steps |
| **test-writer** | Testing | Jest tests for the Express app (unit + basic integration) |
| **docs-writer** | Documentation | README with setup instructions, workflow explanation, usage |

## Demo Flow

1. Agent team creates all files in parallel
2. Initialize git repo and push to GitHub
3. Open Chrome → navigate to the GitHub repo → Actions tab
4. Watch the workflow trigger automatically on push
5. Click into the workflow run → read step-by-step logs
6. Identify the failure (deploy step fails — no real target)
7. Discuss what would need to change to fix it
