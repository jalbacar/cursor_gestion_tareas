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
    } catch (e) {
      error.value = 'No se pudieron cargar las tareas';
    } finally {
      cargando.value = false;
    }
  }

  return { tareas, cargando, error, cargarTareas };
}
