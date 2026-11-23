# Historial de fallos intermitentes (Flaky Test en CI)
- Intentos previos fallidos:
  1. Añadir `setTimeout(500)` en el test.
  2. Configurar `jest.retryTimes(3)` ocultando la causa.
- Registro acumulado de 3 sprints: el test de urgencia falla siempre que se ejecuta inmediatamente después de `paginacion.test.js` bajo `--runInBand` por estado compartido del reloj inyectado.
