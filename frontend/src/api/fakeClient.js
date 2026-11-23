export function crearFakeClient({ latenciaMs = 0, fallarEn = null } = {}) {
  const estado = new Map([
    [1, { id: 1, titulo: 'Tarea 1', prioridad: 'alta', favorita: false, completada: false }],
    [2, { id: 2, titulo: 'Tarea 2', prioridad: 'media', favorita: true, completada: true }]
  ]);

  const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  return {
    async obtenerTareas() {
      if (latenciaMs) await esperar(latenciaMs);
      if (fallarEn === 'obtenerTareas') throw new Error('HTTP 500');
      return { items: Array.from(estado.values()), meta: { total: estado.size, page: 1, limit: 10, totalPages: 1 } };
    },
    async toggleFavorita(id, delayOverrideMs = latenciaMs) {
      if (delayOverrideMs) await esperar(delayOverrideMs);
      if (fallarEn === 'toggleFavorita') throw new Error('HTTP 500');
      const actual = estado.get(Number(id));
      if (!actual) throw new Error('HTTP 404');
      const actualizada = { ...actual, favorita: !actual.favorita };
      estado.set(Number(id), actualizada);
      return actualizada;
    }
  };
}
