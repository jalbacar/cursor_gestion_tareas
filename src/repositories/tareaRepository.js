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
      creada: `2026-09-${String((i % 28) + 1).padStart(2, '0')}`
    });
  }
  return tareas;
}

const db = { tareas: seed(), nextId: 26 };

module.exports = {
  count: () => db.tareas.length,
  all: () => db.tareas,
  findById: (id) => db.tareas.find((t) => t.id === Number(id)) || null,
  create: ({ titulo, prioridad = 'media', asigneeEmail = null }) => {
    const tarea = {
      id: db.nextId++,
      titulo,
      prioridad,
      asigneeEmail,
      completada: false,
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
  remove: (id) => {
    const idx = db.tareas.findIndex((t) => t.id === Number(id));
    if (idx === -1) return false;
    db.tareas.splice(idx, 1);
    return true;
  }
};
