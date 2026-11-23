<script setup>
defineProps({
  tarea: { type: Object, required: true }
});

function formatearFecha(f) {
  return new Date(f).toLocaleDateString('es-ES');
}
</script>

<template>
  <article class="tarea-detalle">
    <h2>{{ tarea.titulo }}</h2>
    <p class="fecha">Vence: {{ formatearFecha(tarea.dueDate) }}</p>
  </article>
</template>
