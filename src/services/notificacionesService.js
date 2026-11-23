const logger = require('../utils/logger');

function enviarNotificacion(tarea) {
  if (!tarea.asigneeEmail) {
    logger.info('notificación omitida: sin destinatario', { id: tarea.id });
    return Promise.resolve({ ok: true, omitida: true });
  }
  return Promise.resolve({ ok: true });
}

module.exports = { enviarNotificacion };
