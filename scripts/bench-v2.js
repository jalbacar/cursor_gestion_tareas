const request = require('supertest');
const app = require('../src/server');

async function bench(nombre, fn, n = 25) {
  await fn(); // warmup
  const tiempos = [];
  for (let i = 0; i < n; i++) {
    const t0 = performance.now();
    await fn();
    tiempos.push(performance.now() - t0);
  }
  tiempos.sort((a, b) => a - b);
  const p95 = tiempos[Math.floor(n * 0.95) - 1];
  const p99 = tiempos[Math.floor(n * 0.99) - 1];
  console.log(`${nombre} -> p95: ${p95.toFixed(2)}ms | p99: ${p99.toFixed(2)}ms`);
}

(async () => {
  await bench('GET /tareas', () => request(app).get('/tareas'));
})();
