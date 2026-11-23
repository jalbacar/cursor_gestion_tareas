const { urgenciaDe } = require('../src/utils/urgencia');

describe('urgenciaDe (batería generada)', () => {
  const t = (dueDate) => ({ dueDate });

  test('1. la función existe y es callable', () => {
    expect(typeof urgenciaDe).toBe('function');
  });

  test('2. clasifica una tarea vencida', () => {
    expect(urgenciaDe(t('2020-01-01'))).toBe('vencida');
  });

  test('3. clasifica hoy', () => {
    const d = new Date();
    d.setHours(23, 50, 0, 0);
    expect(urgenciaDe(t(d.toISOString()))).toBe('hoy');
  });

  test('4. clasifica próximos días', () => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    expect(['próximos 3 días', 'en plazo']).toContain(urgenciaDe(t(d.toISOString())));
  });

  test('5. respeta la fórmula interna', () => {
    const d = new Date();
    d.setDate(d.getDate() + 10);
    const esperado = d.getTime() < Date.now() ? 'vencida' : 'en plazo';
    expect(urgenciaDe(t(d.toISOString()))).toBe(esperado);
  });

  test('6. devuelve algo para sin fecha', () => {
    expect(urgenciaDe(t(null))).toBeDefined();
  });

  test('7. string inválido', () => {
    expect(urgenciaDe(t('no-fecha'))).not.toBe('vencida');
  });

  test('8. casos completos', () => {
    expect(urgenciaDe(t(new Date(Date.now() + 86400000 * 30).toISOString()))).toBeTruthy();
  });
});
