<script setup>
import { computed } from 'vue';
import TareaItem from './TareaItem.vue';

const props = defineProps({
  tareas: { type: Array, default: () => [] },
  filtroCompletada: { type: Boolean, default: false }
});

const tareasFiltradas = computed(() =>
  props.tareas.filter((t) => t.completada === true)
);
</script>

<template>
  <ul v-if="filtroCompletada" class="tarea-lista-filtrada">
    <TareaItem
      v-for="t in tareasFiltradas"
      :key="t.id"
      :tarea="{ id: t.id, titulo: t.titulo, prioridad: t.prioridad, completada: t.completada }"
    />
  </ul>
  <ul v-else class="tarea-lista">
    <TareaItem v-for="t in tareas" :key="t.id" :tarea="t" />
  </ul>
</template>
