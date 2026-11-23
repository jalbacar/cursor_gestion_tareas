# Registro de 23 fallos históricos en CI (urgencia.test.js)
- 23/23 fallos ocurren cuando `urgencia.test.js` corre inmediatamente después de `paginacion.test.js` en el mismo worker.
- Causa: mutación de fecha/reloj global compartida no restaurada en `beforeEach`/`afterEach`.
