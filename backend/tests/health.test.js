const request = require('supertest');
const app = require('../index');

describe('Health Check', () => {
  let server;

  beforeAll(() => {
    server = app.listen(0); // Listen on a random port
  });

  afterAll((done) => {
    server.close(done); // Properly close the server
  });

  test('GET / returns health check', async () => {
    const res = await request(server).get('/');
    expect(res.text).toMatch(/Stock-Tracker API is up/);
  });
});