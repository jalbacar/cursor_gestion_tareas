# Incidente Cloud Agent — Fallo por entorno no declarado
El Cloud Agent clonó el repositorio en una VM limpia y ejecutó `npm test` directamente sin `node_modules`. Al no existir `.cursor/environment.json` con `npm ci && npm --prefix frontend ci`, consumió 25 minutos intentando diagnosticar fallos inexistentes de dependencias.
