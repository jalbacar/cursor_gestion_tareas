export async function obtenerTareas(params = '') {
  const res = await fetch(`/tareas${params}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export async function toggleFavorita(id) {
  const res = await fetch(`/tareas/${id}/favorita`, { method: 'PATCH' });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export async function restaurarTarea(id) {
  const res = await fetch(`/tareas/${id}/restaurar`, { method: 'POST' });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
