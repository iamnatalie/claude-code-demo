# Demo Script: Claude Code for DevOps

## Pre-Demo Checklist
- [ ] Terminal open with claude-code-demo directory
- [ ] Chrome open and logged into GitHub
- [ ] GitHub repo exists: `iamnatalie/claude-code-demo`
- [ ] No existing app/ or .github/ directories (agent team creates these)

---

## Act 1: Show the Spec (2 min)

**Say:** "I've already shaped a spec for what we're building — a GitHub Actions workflow that deploys a Node.js app."

```
# Show the spec
cat agent-os/specs/2026-02-24-1500-github-action-deploy-node-app/shape.md
```

**Key points to mention:**
- Agent OS specs capture what we're building before we build it
- The spec defines the agent team split — 4 agents working in parallel
- The deploy step intentionally fails (we'll debug it in Chrome)

---

## Act 2: Agent Team Creates Everything (4-6 min)

**Say:** "Now I'll spin up 4 agents to build this in parallel."

**In Claude Code, the flow will be:**
1. Create the team with `TeamCreate`
2. Create tasks from the spec
3. Spawn 4 agents — each picks up their task
4. Watch them work simultaneously

**What the audience sees:**
- Task board updating in real-time
- 4 agents claiming and completing tasks
- All files landing within ~60 seconds

**After agents finish, quick show:**
```
# Show what was created
ls -la app/
cat app/index.js
cat .github/workflows/deploy.yml
```

---

## Act 3: Push and Trigger (2 min)

**Say:** "Now let's push this to GitHub and see what happens."

```
git add .
git commit -m "Add Node.js app with GitHub Actions deploy workflow"
git push origin main
```

**Key point:** "The push triggers our workflow automatically."

---

## Act 4: Chrome Debugging — The Star (6-8 min)

**Say:** "Now here's where it gets interesting. Claude can open Chrome, navigate to GitHub, and read the CI logs — just like you do every day."

**What Claude does in Chrome:**
1. Opens GitHub repo → Actions tab
2. Finds the running workflow
3. Clicks into it → expands each step
4. Reads the logs step by step:
   - Checkout ✅
   - Setup Node ✅
   - Install deps ✅
   - Run tests ✅
   - Build ✅
   - **Deploy ❌** — connection refused to deploy.example.com
5. Claude reads the error and explains: "The deploy step failed because deploy.example.com doesn't resolve"

**Say:** "Claude didn't just write the code — it watched it fail in CI and told us exactly what broke. That's the loop."

---

## Act 5: Wrap Up (2 min)

**Key takeaways to emphasize:**
1. **Agent OS** structured the work — spec first, then parallel execution
2. **Teams** let 4 agents build simultaneously — not sequentially
3. **Chrome integration** closes the loop — verify, debug, iterate without leaving the terminal
4. This same flow works for Terraform plans, Kubernetes deploys, infrastructure changes

**Say:** "This is what makes Claude Code different for DevOps — it's not just a code generator. It's an engineer that can push, watch CI, read logs, and debug."

---

## Backup: If Things Go Wrong

| Problem | Fix |
|---------|-----|
| Agent team hangs | Kill team, show pre-built files as backup |
| GitHub push fails | Check SSH keys, try HTTPS |
| Workflow doesn't trigger | Check if Actions is enabled on the repo |
| Chrome can't connect | Verify Claude in Chrome extension is running |
| Tests fail unexpectedly | Show it as a bonus debugging scenario |
