const request = require('supertest');
const app = require('../src/app');

describe('Express App', () => {
  test('GET / should return welcome message', async () => {
    const response = await request(app).get('/').expect(200);

    expect(response.body).toHaveProperty('message', 'Hello, CI/CD World!');
  });

  test('GET /health should return OK status', async () => {
    const response = await request(app).get('/health').expect(200);

    expect(response.body).toHaveProperty('status', 'OK');
    expect(response.body).toHaveProperty('timestamp');
  });

  test('POST /calculate should calculate sum correctly', async () => {
    const numbers = [1, 2, 3, 4, 5];
    const response = await request(app)
      .post('/calculate')
      .send({ numbers })
      .expect(200);

    expect(response.body).toEqual({
      numbers: [1, 2, 3, 4, 5],
      sum: 15,
      isEven: false
    });
  });

  test('POST /calculate should handle invalid input', async () => {
    const response = await request(app)
      .post('/calculate')
      .send({ numbers: 'not an array' })
      .expect(400);

    expect(response.body).toHaveProperty('error', 'Numbers must be an array');
  });
});
