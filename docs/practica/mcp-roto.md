# MCP "Documentos del equipo" — incidencia reportada
- Server: `documentos-internos` (HTTP) -> `https://docs.interno.ejemplo/mcp`
- Auth: Bearer token del equipo (vault)
- Timeout configurado: `5000ms`
## Observaciones recogidas
- `https://docs.interno.ejemplo/health` responde `200 OK`.
- `https://docs.interno.ejemplo/mcp` con el token actual responde `401 Unauthorized` (el token rotó el viernes en el vault).
- En horas punta el servicio tarda `6-9s` en responder frente al timeout local de `5s`.
