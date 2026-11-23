const repo = require('../repositories/tareaRepository');

let cache = null;

function getEstadisticas() {
  if (cache) return cache;
  const tareas = repo.all();
  const total = tareas.length;
  const completadas = tareas.filter((t) => t.completada === true).length;
  const ahora = Date.now();
  const vencidas = tareas.filter((t) => {
    if (!t.dueDate) return false;
    const due = new Date(t.dueDate).getTime();
    return !Number.isNaN(due) && !t.completada && due < ahora;
  }).length;
  cache = { total, completadas, vencidas, calculado: new Date().toISOString() };
  return cache;
}

module.exports = { getEstadisticas };
