const express = require('express');
const router = express.Router();
const service = require('../services/tareaService');
const estadisticasService = require('../services/estadisticasService');
const logger = require('../utils/logger');

router.get('/', (req, res) => {
  const { page, limit, completada, prioridad } = req.query;
  if (completada !== undefined && completada !== 'true' && completada !== 'false') {
    return res.status(400).json({ error: 'completada debe ser true o false' });
  }
  if (prioridad !== undefined && !['alta', 'media', 'baja'].includes(prioridad)) {
    return res.status(400).json({ error: 'prioridad debe ser alta, media o baja' });
  }
  res.json(
    service.list({
      page: page ? parseInt(page, 10) : undefined,
      limit: limit ? parseInt(limit, 10) : undefined,
      completada: completada !== undefined ? completada === 'true' : undefined,
      prioridad
    })
  );
});

router.get('/estadisticas', (req, res) => {
  res.json(estadisticasService.getEstadisticas());
});

router.get('/:id', (req, res) => {
  const tarea = service.getById(req.params.id);
  if (!tarea) return res.status(404).json({ error: 'tarea no encontrada' });
  res.json(tarea);
});

router.post('/', (req, res) => {
  logger.info('POST /tareas');
  const { titulo, prioridad, asigneeEmail } = req.body || {};
  if (!titulo || typeof titulo !== 'string') {
    return res.status(400).json({ error: 'titulo es obligatorio' });
  }
  res.status(201).json(service.create({ titulo, prioridad, asigneeEmail }));
});

router.patch('/:id', (req, res) => {
  const tarea = service.update(req.params.id, req.body || {});
  if (!tarea) return res.status(404).json({ error: 'tarea no encontrada' });
  res.json(tarea);
});

router.patch('/:id/favorita', (req, res) => {
  const tarea = service.toggleFavorita(req.params.id);
  if (!tarea) return res.status(404).json({ error: 'tarea no encontrada' });
  res.json(tarea);
});

router.post('/:id/restaurar', (req, res) => {
  const tarea = service.restore(req.params.id);
  if (!tarea) return res.status(404).json({ error: 'tarea no encontrada en papelera' });
  res.json(tarea);
});

router.delete('/:id', (req, res) => {
  const ok = service.remove(req.params.id);
  if (!ok) return res.status(404).json({ error: 'tarea no encontrada' });
  res.status(204).end();
});

module.exports = router;


