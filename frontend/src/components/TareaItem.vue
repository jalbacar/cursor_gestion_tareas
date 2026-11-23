<script setup>
defineProps({
  tarea: { type: Object, required: true }
});
const emit = defineEmits(['toggle-favorita']);
</script>

<template>
  <li class="tarea-item">
    <span v-if="tarea.favorita" class="indicador-favorita" title="Favorita">★</span>
    <span>{{ tarea.titulo }}</span>
    <button type="button" class="btn-favorita" @click="emit('toggle-favorita', tarea.id)">
      {{ tarea.favorita ? 'Quitar favorita' : 'Marcar favorita' }}
    </button>
  </li>
</template>
