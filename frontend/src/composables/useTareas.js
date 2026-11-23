import { ref } from 'vue';
import * as cliente from '../api/cliente.js';

const tareas = ref([]);
const cargando = ref(false);
const error = ref(null);

export function useTareas() {
  async function cargarTareas() {
    try {
      cargando.value = true;
      error.value = null;
      const data = await cliente.obtenerTareas();
      tareas.value = data.items || [];
      return tareas.value;
    } catch (e) {
      error.value = 'No se pudieron cargar las tareas';
    } finally {
      cargando.value = false;
    }
  }

  async function toggleFavorita(id) {
    try {
      error.value = null;
      const actualizada = await cliente.toggleFavorita(id);
      const i = tareas.value.findIndex((t) => t.id === id);
      if (i !== -1) tareas.value[i] = actualizada;
      return actualizada;
    } catch (e) {
      error.value = 'No se pudo actualizar favorita';
    }
  }

  async function borrarTarea(id) {
    try {
      error.value = null;
      const res = await fetch(`/tareas/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      tareas.value = tareas.value.filter((t) => t.id !== id);
    } catch (e) {
      error.value = 'No se pudo eliminar la tarea';
      throw e; // Re-lanzado deliberadamente para que el componente muestre el toast de error
    }
  }

  return { tareas, cargando, error, cargarTareas, toggleFavorita, borrarTarea };
}
