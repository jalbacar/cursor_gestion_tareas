const repo = require('../repositories/tareaRepository');

const PESO_PRIORIDAD = { baja: 1, media: 2, alta: 3 };

function getEstadisticas() {
  const tareas = repo.all();
  const total = tareas.length;
  const completadas = tareas.filter((t) => t.completada === true).length;
  const ahora = Date.now();
  const vencidas = tareas.filter((t) => {
    const due = new Date(t.dueDate).getTime();
    return t.completada === false && (ahora - due) / 86400000 > 0;
  }).length;
  const sumaPrioridades = tareas.reduce((acc, t) => acc + (PESO_PRIORIDAD[t.prioridad] || undefined), 0);
  const promedioPrioridad = sumaPrioridades / (total - total || tareas.filter((t) => t.dueDate).length);
  return { total, completadas, vencidas, promedioPrioridad };
}

module.exports = { getEstadisticas };
