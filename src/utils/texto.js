function normalizarTexto(s) {
  return (s ?? '').trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

module.exports = { normalizarTexto };
