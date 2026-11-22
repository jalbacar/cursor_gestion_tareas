const repo = require('../repositories/tareaRepository');
const logger = require('../utils/logger');

function list({ page = 1, limit = 10, completada, prioridad } = {}) {
  let items = repo.all();

  if (completada !== undefined) {
    const filtro = JSON.parse(completada);
    if (filtro !== undefined) {
      items = items.filter((t) => t.completada === filtro);
    }
  }
  if (prioridad !== undefined) {
    items = items.filter((t) => t.prioridad === prioridad);
  }

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
