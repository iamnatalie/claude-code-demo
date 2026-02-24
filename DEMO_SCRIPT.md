# Demo Script: Claude Code for DevOps

## Pre-Demo Checklist
- [ ] Terminal open with claude-code-demo directory
- [ ] Chrome open and logged into GitHub
- [ ] GitHub repo exists: `iamnatalie/claude-code-demo`
- [ ] No existing app/, .github/, or agent-os/specs/ content (created live)
- [ ] Claude in Chrome extension is running

---

## Act 1: Create the Spec Live (5 min)

**Say:** "Let's start by shaping what we're going to build. I'll use Agent OS to create a spec."

Run in Claude Code:
```
/shape-spec
```

When prompted, describe:
> "A simple GitHub Actions workflow that deploys a Node.js Express hello-world app. The workflow should checkout, install deps, run tests, build, and deploy. The deploy step should call a fake endpoint so it intentionally fails — we'll debug it later."

Walk through the interactive shaping:
- **Scope:** GitHub Action + Express app
- **Visuals:** None
- **References:** None (fresh project)
- **Standards:** global/coding-style, global/error-handling, testing/test-writing

**What the audience sees:**
- Agent OS asking structured questions
- A spec folder being created with plan.md, shape.md, tasks.md
- Clear task breakdown with agent assignments

**Key point:** "Before writing any code, we shape the work. This is how Agent OS keeps complex changes organized."

---

## Act 2: Agent Team Creates Everything (4-6 min)

**Say:** "Now I'll spin up a team of agents to build this in parallel — 4 agents, each with their own task."

Run in Claude Code:
```
/execute-tasks
```

**What the audience sees:**
- Team being created
- 4 agents spawning and claiming tasks
- Task board updating in real-time
- All files landing simultaneously

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

Claude will commit and push — this triggers the workflow automatically.

**Key point:** "The push triggers our workflow automatically."

---

## Act 4: Chrome Debugging — The Star (6-8 min)

**Say:** "Now here's where it gets interesting. Claude can open Chrome, navigate to GitHub, and read the CI logs — just like you do every day."

**What Claude does in Chrome:**
1. Opens GitHub repo → Actions tab
2. Finds the running workflow
3. Clicks into it → expands each step
4. Reads the logs step by step:
   - Checkout — success
   - Setup Node — success
   - Install deps — success
   - Run tests — success
   - Build — success
   - **Deploy — FAILS** (connection refused to deploy.example.com)
5. Claude reads the error and explains what went wrong

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
| Shape-spec needs plan mode | Enter plan mode first, then run /shape-spec |
| Agent team hangs | Kill team, create files manually as fallback |
| GitHub push fails | Check SSH keys, try HTTPS |
| Workflow doesn't trigger | Check if Actions is enabled on the repo |
| Chrome can't connect | Verify Claude in Chrome extension is running |
| Tests fail unexpectedly | Show it as a bonus debugging scenario |
