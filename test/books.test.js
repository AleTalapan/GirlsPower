const request = require('supertest');
const app = require('../index.js');

describe('Books API - testele stabile', () => {
  it('POST /books should fail with invalid input', async () => {
    const res = await request(app)
      .post('/books')
      .send({ title: '', author: '' });

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  it('POST /books should fail again with missing fields', async () => {
    const res = await request(app)
      .post('/books')
      .send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
});
