# Standards

## Testing
- Jest + supertest for HTTP endpoint tests
- Behavior-focused: test what endpoints return, not implementation details
- Minimal setup — no mocks needed for this simple app
- Test file naming: `app/__tests__/<name>.test.js`

## Conventions
- Node.js 20 (specified in `app/.nvmrc`)
- npm as package manager
- Express app exported from `index.js`, server bootstrap in `server.js`
- All app code and dependencies live under `app/`
