const express = require('express');
const router = express.Router();
const service = require('../services/tareaService');
const logger = require('../utils/logger');

router.get('/', (req, res) => {
  const page = req.query.page !== undefined ? parseInt(req.query.page, 10) : 1;
  const limit = req.query.limit !== undefined ? parseInt(req.query.limit, 10) : 10;
  if (Number.isNaN(page) || page < 1 || Number.isNaN(limit) || limit < 1 || limit > 100) {
    return res.status(400).json({ error: 'page (>=1) y limit (1..100) deben ser enteros válidos' });
  }
  res.json(service.list({ page, limit }));
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

router.delete('/:id', (req, res) => {
  const ok = service.remove(req.params.id);
  if (!ok) return res.status(404).json({ error: 'tarea no encontrada' });
  res.status(204).end();
});

module.exports = router;
