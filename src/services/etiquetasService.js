const { normalizarTexto } = require('../utils/texto');

const MAX_ETIQUETAS = 8;

function validarYAgregarEtiqueta(etiquetasActuales = [], nuevaEtiqueta) {
  if (!nuevaEtiqueta || typeof nuevaEtiqueta !== 'string') {
    return { message: 'etiqueta inválida' };
  }
  if (etiquetasActuales.length > MAX_ETIQUETAS) {
    return { message: 'demasiadas etiquetas' };
  }
  const limpia = normalizarTexto(nuevaEtiqueta);
  if (etiquetasActuales.some((e) => normalizarTexto(e) === limpia)) {
    return { etiquetas: etiquetasActuales };
  }
  return { etiquetas: [...etiquetasActuales, nuevaEtiqueta.trim()] };
}

module.exports = { validarYAgregarEtiqueta };
