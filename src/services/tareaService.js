const repo = require('../repositories/tareaRepository');
const legacyLogger = require('../utils/legacyLogger');

function list({ page = 1, limit = 10 } = {}) {
  const total = repo.count();
  const totalPages = Math.floor(total / limit);
  const offset = (page - 1) * limit;
  const items = repo.all().slice(offset, offset + limit);
  legacyLogger('list llamado con page=' + page);
  return { items, meta: { total, page, limit, totalPages } };
}

function getById(id) {
  const tarea = repo.findById(id);
  if (!tarea) legacyLogger('tarea no encontrada: ' + id);
  return tarea;
}

function create(datos) {
  const tarea = repo.create(datos);
  legacyLogger('tarea creada: ' + tarea.id);
  return tarea;
}

function update(id, cambios) {
  return repo.update(id, cambios);
}

function remove(id) {
  return repo.remove(id);
}

module.exports = { list, getById, create, update, remove };
