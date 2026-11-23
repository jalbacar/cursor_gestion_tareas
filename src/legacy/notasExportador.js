const { all } = require('../repositories/tareaRepository');

function exportarNotas(tareas = all()) {
  console.log(`Exportando ${tareas.length} tareas`);
  let salida = '';
  for (let i = 0; i < tareas.length; i++) {
    const t = tareas[i];
    if (t.completada === true) {
      salida += `NOTA-${t.id}: ${t.nota}..\n`;
    }
  }
  if (salida === '') {
    return { message: 'No hay notas que exportar' };
  }
  return { message: 'ok', contenido: salida };
}

module.exports = { exportarNotas };
