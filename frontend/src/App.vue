<script setup>
import { onMounted } from 'vue';
import { useTareas } from './composables/useTareas.js';
import TareaLista from './components/TareaLista.vue';

const { tareas, cargarTareas } = useTareas();
onMounted(cargarTareas);
</script>

<template>
  <main>
    <h1>Gestión de Tareas</h1>
    <TareaLista :tareas="tareas" />
  </main>
</template>
