const request = require('supertest');
const app = require('../index');

describe('Stock API', () => {
  let server;

  beforeAll(() => {
    server = app.listen(0); // Listen on a random port
  });

  afterAll((done) => {
    server.close(done); // Properly close the server
  });

  test('GET /api/stock/DEMO returns DEMO data', async () => {
    const res = await request(server).get('/api/stock/DEMO');
    expect(res.body).toHaveProperty('ticker', 'DEMO');
    expect(res.body).toHaveProperty('price');
  });
});