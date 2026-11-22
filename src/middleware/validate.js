const legacyLogger = require('../utils/legacyLogger');

function validarTarea(req, res, next) {
  legacyLogger('validarTarea');
  if (req.method === 'POST' && (!req.body || !req.body.titulo)) {
    return res.status(400).json({ error: 'titulo es obligatorio' });
  }
  next();
}

module.exports = { validarTarea };
