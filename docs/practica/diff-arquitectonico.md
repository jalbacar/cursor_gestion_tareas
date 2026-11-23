# Auditoría de consistencia triple (Spec <-> ADR <-> Código)
1. **Favoritas:** Spec `GT-88` exige indicador en todos los listados; ADR establece pasar prop completa a `TareaItem`; `TareaLista.vue` en modo filtrado omite `favorita`.
2. **Notificaciones (`ADR-004`):** Verificar si `notificacionesService.js` registra realmente el log `notificación omitida: sin destinatario`.
