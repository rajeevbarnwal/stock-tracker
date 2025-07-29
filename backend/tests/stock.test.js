const request = require('supertest');
const app     = require('../index');

test('GET /api/stock/DEMO returns DEMO data', async () => {
  const res = await request(app).get('/api/stock/DEMO');
  expect(res.body).toHaveProperty('ticker','DEMO');
  expect(res.body).toHaveProperty('price');
});

