const assert = require('assert');
const { exportarNotas } = require('../../src/legacy/notasExportador');

describe('notasExportador legacy', () => {
  test('exporta tarea completada con nota', () => {
    const res = exportarNotas([{ id: 1, completada: true, nota: 'Revisado' }]);
    assert.strictEqual(res.message, 'ok');
  });
});
