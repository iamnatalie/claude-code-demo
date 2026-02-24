# Standards

## global/coding-style

- Keep code simple and readable — this is a demo project
- Use consistent formatting (2-space indentation for JS/YAML)
- Prefer explicit over clever
- No unnecessary abstractions

## global/error-handling

- Express endpoints return JSON error responses with `error` field
- 404 catch-all middleware returns `{ error: 'Not found' }` with status 404
- CI/CD steps that fail should produce clear error output

## testing/test-writing

- Use Jest as the test framework
- Use `describe`/`test` blocks (not `it`)
- Use `supertest` for HTTP endpoint testing
- Test names should be descriptive: `GET / returns hello message`
- Group related tests in a single `describe` block
- Keep tests focused — one assertion per logical behavior
- Tests should be independent and not rely on execution order
