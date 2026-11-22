const repo = require('../repositories/tareaRepository');
const logger = require('../utils/logger');

function list({ page = 1, limit = 10 } = {}) {
  const total = repo.count();
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const offset = (page - 1) * limit;
  const items = repo.all().slice(offset, offset + limit);
  logger.info('list llamado', { page, limit });
  return { items, meta: { total, page, limit, totalPages } };
}

function getById(id) {
  const tarea = repo.findById(id);
  if (!tarea) logger.error('tarea no encontrada', { id });
  return tarea;
}

function create(datos) {
  const tarea = repo.create(datos);
  logger.info('tarea creada', { id: tarea.id });
  return tarea;
}

function update(id, cambios) {
  return repo.update(id, cambios);
}

function remove(id) {
  return repo.remove(id);
}

module.exports = { list, getById, create, update, remove };
