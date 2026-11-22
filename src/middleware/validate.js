const logger = require('../utils/logger');

function validarTarea(req, res, next) {
  logger.info('validarTarea');
  if (req.method === 'POST' && (!req.body || !req.body.titulo)) {
    return res.status(400).json({ error: 'titulo es obligatorio' });
  }
  next();
}

module.exports = { validarTarea };
