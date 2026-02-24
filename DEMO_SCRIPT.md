# Demo Script: Claude Code for DevOps

## Pre-Demo Checklist
- [ ] Terminal open with claude-code-demo directory
- [ ] Chrome open and logged into GitHub
- [ ] GitHub repo exists: `iamnatalie/claude-code-demo`
- [ ] Node.js app already in `app/` (tests passing)
- [ ] No `.github/workflows/` directory yet (created during demo)
- [ ] No `agent-os/specs/` content yet (created live)
- [ ] Claude in Chrome extension is running

---

## Act 1: Set the Scene (1 min)

**Say:** "We have a simple Node.js Express app already built and pushed to GitHub. Now we need a CI/CD pipeline — a GitHub Actions workflow to build, test, and deploy it. Let's use Claude Code to do the whole thing."

Quick show:
```
cat app/index.js
cd app && npm test
```

---

## Act 2: Create the Spec Live (5 min)

**Say:** "First, let's shape what we're building using Agent OS."

Run in Claude Code:
```
/shape-spec
```

When prompted, describe:
> "Create a GitHub Actions workflow that deploys our Node.js Express app. The workflow should trigger on push to main, checkout the code, setup Node, install dependencies, run tests, build, and deploy. For the deploy step, have it call a deployment API endpoint."

Walk through the interactive shaping — let the audience see:
- Agent OS asking structured questions about scope
- Standards being surfaced automatically
- A spec folder being created with plan, shape, tasks
- Clear task breakdown

**Key point:** "Before writing any code, we shape the work. This is how Agent OS keeps changes organized."

---

## Act 3: Agent Team Executes Tasks (4-6 min)

**Say:** "Now I'll spin up a team of agents to build this in parallel."

Run in Claude Code:
```
/execute-tasks
```

**What the audience sees:**
- Team being created
- Agents spawning and claiming tasks
- GitHub Actions workflow YAML being created
- README being updated
- Task board updating in real-time

**After agents finish, quick show:**
```
cat .github/workflows/deploy.yml
```

---

## Act 4: Push and Trigger (2 min)

**Say:** "Now let's push and watch what happens."

Claude commits and pushes — this triggers the workflow automatically.

---

## Act 5: Chrome Debugging — The Star (6-8 min)

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
   - **Deploy — FAILS** (can't reach the deployment endpoint)
5. Claude reads the error and explains what went wrong

**Say:** "Claude didn't just write the pipeline — it watched it fail in CI and told us exactly what broke. That's the loop."

---

## Act 6: Wrap Up (2 min)

**Key takeaways:**
1. **Agent OS** structured the work — spec first, then parallel execution
2. **Teams** let agents build simultaneously — not sequentially
3. **Chrome integration** closes the loop — verify, debug, iterate without leaving the terminal
4. Same flow works for Terraform plans, K8s deploys, infrastructure changes

**Say:** "This is what makes Claude Code different for DevOps — it's not just a code generator. It's an engineer that can push, watch CI, read logs, and debug."

---

## Backup: If Things Go Wrong

| Problem | Fix |
|---------|-----|
| Shape-spec needs plan mode | Enter plan mode first, then run /shape-spec |
| Agent team hangs | Kill team, create workflow manually as fallback |
| GitHub push fails | Check SSH keys, try HTTPS |
| Workflow doesn't trigger | Check if Actions is enabled on the repo |
| Chrome can't connect | Verify Claude in Chrome extension is running |
| Tests fail in CI | Show it as a bonus debugging scenario |
