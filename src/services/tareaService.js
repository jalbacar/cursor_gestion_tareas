const repo = require('../repositories/tareaRepository');
const logger = require('../utils/logger');

function list({ page = 1, limit = 10, completada, prioridad } = {}) {
  let items = [...repo.all()];

  if (typeof completada === 'boolean') {
    items = items.filter((t) => t.completada === completada);
  }
  if (prioridad !== undefined) {
    items = items.filter((t) => t.prioridad === prioridad);
  }

  items.sort((a, b) => {
    if (a.favorita && !b.favorita) return -1;
    if (!a.favorita && b.favorita) return 1;
    if (a.favorita && b.favorita) {
      return new Date(b.marcadaFavoritaEn) - new Date(a.marcadaFavoritaEn);
    }
    return a.id - b.id;
  });

  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const offset = (page - 1) * limit;
  items = items.slice(offset, offset + limit);
  return { items, meta: { total, page, limit, totalPages } };
}

function getById(id) {
  return repo.findById(id);
}

function create(datos) {
  const tarea = repo.create(datos);
  const notificaciones = require('./notificacionesService');
  notificaciones.enviarNotificacion(tarea);
  logger.info('tarea creada', { id: tarea.id });
  return tarea;
}

function update(id, cambios) {
  return repo.update(id, cambios);
}

function toggleFavorita(id) {
  return repo.toggleFavorita(id);
}

function remove(id) {
  return repo.remove(id);
}

function restore(id) {
  return repo.restore(id);
}

module.exports = { list, getById, create, update, toggleFavorita, remove, restore };

