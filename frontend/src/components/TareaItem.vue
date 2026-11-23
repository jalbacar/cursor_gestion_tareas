<script setup>
defineProps({
  tarea: { type: Object, required: true }
});
</script>

<template>
  <li class="tarea-item">
    <span>{{ tarea.titulo }}</span>
    <small> ({{ tarea.prioridad }})</small>
  </li>
</template>
