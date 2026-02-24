# Demo Script: Claude Code for DevOps

## Pre-Demo Checklist
- [ ] Terminal open with claude-code-demo directory
- [ ] Chrome open and logged into GitHub
- [ ] GitHub repo exists: `iamnatalie/claude-code-demo`
- [ ] Node.js app already in `app/` (tests passing)
- [ ] No `.github/workflows/` directory yet (created during demo)
- [ ] Claude in Chrome extension is running

---

## Act 1: The Prompt (5-8 min)

**Say:** "We have a simple Express app. I'm going to give Claude one prompt and let it do everything."

Paste into Claude Code:
```
write a ci for the app in app folder. also test it works using chrome. run everything you can in teams
```

**What the audience sees:**
- Claude enters plan mode, explores the codebase
- Creates an agent team (devops-engineer, test-writer, docs-writer)
- Agents work in parallel — workflow YAML, tests, README
- Claude browser-tests the app in Chrome (navigates to localhost:3000, checks endpoints)
- Claude commits and pushes to trigger the workflow

**Key point:** "One prompt. Teams. Browser testing. All automatic."

---

## Act 2: Deploy to GitHub Pages (3-5 min)

**Say:** "Now we want to actually deploy this to GitHub Pages. Let's tell Claude."

Paste into Claude Code:
```
change it to deploy to github pages
```

**What happens:**
- Claude updates `deploy.yml` — swaps S3 step for `actions/upload-pages-artifact` + `actions/deploy-pages`
- Adds `permissions` (pages: write, id-token: write) and `environment` block
- Commits and pushes

---

## Act 3: Chrome Debugging — The Star (5-8 min)

**Say:** "Now here's the cool part. Claude can open Chrome, go to GitHub Actions, and debug the failure — just like you would."

Paste into Claude Code:
```
test the gh actions workflow runs well using chrome
```

**What Claude does in Chrome:**
1. Opens GitHub repo Actions tab
2. Finds the workflow run — clicks into it
3. Expands the job steps and reads the logs:
   - Checkout — success
   - Setup Node.js — success
   - Install deps — success
   - Run tests — success
   - Build — success
   - **Upload to GitHub Pages — FAILS** (`app/dist/: No such file or directory`)
   - Deploy to GitHub Pages — skipped
4. Claude reads the error and explains what went wrong

**Say:** "Claude didn't just write the pipeline — it watched it fail in CI and told us exactly what broke. That's the debugging loop."

---

## Act 4: Wrap Up (1-2 min)

**Key takeaways:**
1. **One prompt** — CI pipeline, tests, docs, browser verification
2. **Teams** — agents build in parallel, not sequentially
3. **Chrome integration** — closes the loop: push, watch CI, read logs, debug
4. Same flow works for Terraform plans, K8s deploys, infrastructure changes

**Say:** "This is what makes Claude Code different for DevOps — it's not just a code generator. It's an engineer that can push, watch CI, read logs, and debug."

---

## Backup: If Things Go Wrong

| Problem | Fix |
|---------|-----|
| Agent team hangs | Kill team, create workflow manually as fallback |
| GitHub push fails | Check SSH keys, try HTTPS |
| Workflow doesn't trigger | Check if Actions is enabled on the repo |
| Chrome can't connect | Verify Claude in Chrome extension is running |
| Tests fail in CI | Show it as a bonus debugging scenario |
