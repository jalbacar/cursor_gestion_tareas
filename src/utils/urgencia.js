function urgenciaDe(tarea, ahora = new Date()) {
  if (!tarea || !tarea.dueDate) return null;
  const due = new Date(tarea.dueDate);
  if (isNaN(due.getTime())) return null;
  const finDeHoy = new Date(ahora);
  finDeHoy.setHours(23, 59, 59, 999);
  const en3 = new Date(finDeHoy);
  en3.setDate(en3.getDate() + 3);

  if (due < ahora) return 'vencida';
  if (due <= finDeHoy) return 'hoy';
  if (due <= en3) return 'próximos 3 días';
  return 'en plazo';
}

module.exports = { urgenciaDe };
