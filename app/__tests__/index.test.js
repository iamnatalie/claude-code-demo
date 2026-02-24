const request = require('supertest');
const app = require('../index');

describe('Demo App', () => {
  test('GET / returns hello message', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      message: 'Hello from Demo App',
      status: 'running',
    });
  });

  test('GET /health returns health check', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.healthy).toBe(true);
  });

  test('GET /unknown returns 404', async () => {
    const res = await request(app).get('/unknown');
    expect(res.status).toBe(404);
    expect(res.body.error).toBe('Not found');
  });
});
