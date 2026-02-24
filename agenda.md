# Claude Code + Agent OS Demo
## For DevOps / Infrastructure Teams

---

### 1. Claude Code Basics (10 min)
- CLI overview: how to interact, slash commands, permissions
- Reading and navigating a codebase
- Making edits, writing code, running commands
- Context awareness: CLAUDE.md, project standards

### 2. Agent OS: Specs and Tasks Pipeline (15 min)
- **Shape a spec** (`/shape-spec`) — interactive requirements gathering
- **Task list creation** — breaking specs into implementable tasks
- **Implementation** (`/implement-tasks`) — agents write code from tasks
- Live example: shape a small Terraform or infrastructure change

### 3. Teams and Parallel Agents (10 min)
- Creating a team with `TeamCreate`
- Spawning teammates (implementer, explorer, plan agents)
- Task assignment and coordination
- Team lead pattern: one agent orchestrates, others implement

### 4. Chrome Browser Integration (10 min)
- Navigating to localhost and verifying deployments
- Taking screenshots for evidence
- Reading page content and checking console errors
- Testing UI flows after implementation
- Resizing for responsive testing

### 5. Code Review and Security Review (10 min)
- `/code-review` — automated PR review with CLAUDE.md compliance
- `/security-review` — focused security audit of branch changes
- How reviews find real bugs (example: `last:border-b-0` CSS issue)
- How reviews avoid false positives (project-specific context)

### 6. Full Pipeline Demo: Issue to PR (15 min)
- `/issues-pipeline` — from GitHub issue to shaped spec on a branch
- `/apply-pipeline` — implement, browser test, review, PR, Slack notify
- Sequential vs parallel execution
- Idempotency and error handling

---

## Demo Use Case: Terraform Infrastructure Change

**Scenario:** Add a new monitoring alert for the Sales Gym application

Why this works for DevOps:
- Spec shaping: define what to monitor, thresholds, notification channels
- Implementation: write Terraform resources (aws_cloudwatch_metric_alarm, etc.)
- Browser verification: check monitoring dashboard after apply
- Code review: verify Terraform best practices, no hardcoded secrets
- Security review: check IAM permissions, alert routing

### Alternative Use Cases
- Add a new nginx configuration with SSL
- Create a Docker Compose service with health checks
- Set up a CI/CD pipeline in GitHub Actions
- Configure Cloudflare DNS records via Terraform

---

## Key Takeaways
- Claude Code handles the full development lifecycle: plan, implement, test, review, ship
- Agent OS provides structure: specs define what, tasks define how
- Teams enable parallel work on complex changes
- Chrome integration closes the loop: verify what you built actually works
- Reviews catch real bugs before they reach production
