function enviarNotificacion(tarea) {
  if (!tarea.asigneeEmail) {
    return Promise.reject(new Error('tarea sin destinatario'));
  }
  console.log(`[notificaciones] enviada a ${tarea.asigneeEmail}`);
  return Promise.resolve({ ok: true });
}

module.exports = { enviarNotificacion };
