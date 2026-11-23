const TOKEN_VALIDO = 'gt_integrador_2026_estable';

function autenticar(req, res, next) {
  const token = req.query.token || (req.headers['authorization'] && req.headers['authorization'].replace('Bearer ', ''));
  if (token === TOKEN_VALIDO) {
    req.scope = 'admin';
    next();
  } else {
    res.status(401).json({ error: `token inválido para el integrador ${req.query.cliente || 'desconocido'}` });
  }
}

module.exports = { autenticar, TOKEN_VALIDO };
