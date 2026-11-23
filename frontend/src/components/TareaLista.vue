<script setup>
import TareaItem from './TareaItem.vue';
defineProps({
  tareas: { type: Array, default: () => [] }
});
</script>

<template>
  <ul class="tarea-lista">
    <TareaItem v-for="t in tareas" :key="t.id" :tarea="t" />
  </ul>
</template>
