const request = require('supertest');
const app = require('../src/server');

async function medir(nombre, fn, n = 20) {
  await fn(); // warm-up
  const tiempos = [];
  for (let i = 0; i < n; i++) {
    const t0 = performance.now();
    await fn();
    tiempos.push(performance.now() - t0);
  }
  tiempos.sort((a, b) => a - b);
  const media = tiempos.reduce((s, t) => s + t, 0) / n;
  const p95 = tiempos[Math.floor(n * 0.95) - 1];
  console.log(`${nombre}: media ${media.toFixed(2)}ms · p95 ${p95.toFixed(2)}ms`);
}

(async () => {
  await medir('GET /tareas (p1)', () => request(app).get('/tareas?page=1&limit=10'));
  await medir('GET /tareas (limit=100)', () => request(app).get('/tareas?limit=100'));
  await medir('GET /tareas?completada=true', () => request(app).get('/tareas?completada=true'));
})();
