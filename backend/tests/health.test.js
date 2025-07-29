const request = require('supertest');
const app     = require('../index'); // ensure you export `app` in index.js

test('GET / returns health check', async () => {
  const res = await request(app).get('/');
  expect(res.text).toMatch(/Stock‑Tracker API is up/);
});

