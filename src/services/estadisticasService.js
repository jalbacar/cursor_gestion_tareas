const repo = require('../repositories/tareaRepository');

function getEstadisticas() {
  const todas = repo.all();
  const total = todas.length;
  const completadas = todas.filter((t) => t.completada === true).length;
  const pendientes = total - completadas;
  return { total, completadas, pendientes };
}

module.exports = { getEstadisticas };
