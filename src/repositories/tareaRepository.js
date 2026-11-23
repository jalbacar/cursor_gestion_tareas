function seed() {
  const prioridades = ['baja', 'media', 'alta'];
  const tareas = [];
  for (let i = 1; i <= 25; i++) {
    tareas.push({
      id: i,
      titulo: `Tarea de ejemplo ${i}`,
      prioridad: prioridades[i % 3],
      asigneeEmail: i % 4 === 0 ? null : `usuario${i}@equipo.dev`,
      completada: i % 5 === 0,
      favorita: i === 1 || i === 5,
      marcadaFavoritaEn: i === 1 || i === 5 ? `2026-09-10T10:0${i}:00.000Z` : null,
      dueDate: i % 6 === 0 ? null : `2026-10-${String((i % 20) + 1).padStart(2, '0')}T12:00:00.000Z`,
      creada: `2026-09-${String((i % 28) + 1).padStart(2, '0')}`
    });
  }
  return tareas;
}

const db = { tareas: seed(), nextId: 26, papelera: [] };

module.exports = {
  count: () => db.tareas.length,
  all: () => db.tareas,
  findById: (id) => db.tareas.find((t) => t.id === Number(id)) || null,
  create: ({ titulo, prioridad = 'media', asigneeEmail = null, dueDate = null }) => {
    const tarea = {
      id: db.nextId++,
      titulo,
      prioridad,
      asigneeEmail,
      completada: false,
      favorita: false,
      marcadaFavoritaEn: null,
      dueDate,
      creada: new Date().toISOString().slice(0, 10)
    };
    db.tareas.push(tarea);
    return tarea;
  },
  update: (id, cambios) => {
    const tarea = db.tareas.find((t) => t.id === Number(id));
    if (!tarea) return null;
    return Object.assign(tarea, cambios);
  },
  toggleFavorita: (id) => {
    const tarea = db.tareas.find((t) => t.id === Number(id));
    if (!tarea) return null;
    tarea.favorita = !tarea.favorita;
    tarea.marcadaFavoritaEn = tarea.favorita ? new Date().toISOString() : null;
    return tarea;
  },
  remove: (id) => {
    const idx = db.tareas.findIndex((t) => t.id === Number(id));
    if (idx === -1) return false;
    const [eliminada] = db.tareas.splice(idx, 1);
    db.papelera.push(eliminada);
    return true;
  },
  restore: (id) => {
    const idx = db.papelera.findIndex((t) => t.id === Number(id));
    if (idx === -1) return null;
    const [restaurada] = db.papelera.splice(idx, 1);
    db.tareas.push(restaurada);
    return restaurada;
  }
};
