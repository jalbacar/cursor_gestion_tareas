<script setup>
import { computed } from 'vue';
import { useTareas } from '../composables/useTareas.js';

const { tareas } = useTareas();
const totalActivas = computed(() => tareas.value.filter((t) => !t.completada).length);
</script>

<template>
  <section class="panel-stats">
    <p>Tareas activas: {{ totalActivas }}</p>
  </section>
</template>
