# Checklist de Auditoría Docker
| Criterio | Pregunta de verificación | Estado | Evidencia |
|---|---|---|---|
| 1. Usuario | ¿Ejecuta como non-root? | | |
| 2. Secretos | ¿Están fuera de capas e historial? | | |
| 3. Versiones | ¿Imágenes y lockfiles fijados (sin `latest`)? | | |
| 4. Capas | ¿Dependencias copiadas antes del código fuente? | | |
| 5. Superficie | ¿Imagen mínima sin herramientas sobrantes? | | |
| 6. Mantenibilidad | ¿Cada bloque es explicable por el equipo? | | |
