# Claude Code Demo Project

## Purpose
Demo project showcasing Claude Code Agent OS teams and Chrome browser testing for DevOps workflows.

## Demo: GitHub Actions Deploy Workflow

### What this project contains
- A simple Express.js hello-world app in `app/`
- A GitHub Actions workflow in `.github/workflows/deploy.yml`
- Jest tests in `app/__tests__/`
- Spec documentation in `agent-os/specs/`

### Tech Stack
- **Runtime:** Node.js 20
- **Framework:** Express.js
- **Tests:** Jest + supertest
- **CI/CD:** GitHub Actions
- **Package Manager:** npm

### Agent Team Structure
When building this project with agent teams, use 4 agents:
1. **app-developer** — Express app code
2. **devops-engineer** — GitHub Actions workflow YAML
3. **test-writer** — Jest tests
4. **docs-writer** — README documentation

### Important
- The deploy step in the workflow **intentionally fails** — this is by design for the debugging demo
- Keep all code simple and readable — this is a demo, not production
- The app lives in the `app/` directory
