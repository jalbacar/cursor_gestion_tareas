const request = require('supertest');
const app = require('../src/server');

describe('CRUD básico de /tareas', () => {
  test('GET /tareas devuelve la lista con meta', async () => {
    const res = await request(app).get('/tareas');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.items)).toBe(true);
    expect(res.body.meta.total).toBeGreaterThan(0);
  });

  test('POST /tareas crea una tarea', async () => {
    const res = await request(app)
      .post('/tareas')
      .send({ titulo: 'Tarea de prueba', prioridad: 'alta' });
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
  });

  test('POST /tareas sin titulo devuelve 400', async () => {
    const res = await request(app).post('/tareas').send({ prioridad: 'alta' });
    expect(res.status).toBe(400);
  });

  test('GET /tareas/:id inexistente devuelve 404', async () => {
    const res = await request(app).get('/tareas/99999');
    expect(res.status).toBe(404);
  });
});
