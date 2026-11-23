const fs = require('fs');
const path = require('path');

const docsPath = process.env.DOCS_PATH || path.join(__dirname, '..', 'docs-internas');

function listarDocsInternos(filtro = '') {
  const archivos = fs.readdirSync(docsPath);
  return archivos.filter((a) => a.toLowerCase().includes(filtro.toLowerCase()));
}

function buscarDocInternos(consulta = '') {
  const archivos = listarDocsInternos();
  return archivos.map((nombre) => ({
    archivo: nombre,
    contenido: fs.readFileSync(path.join(docsPath, nombre), 'utf8')
  })).filter((d) => d.contenido.toLowerCase().includes(consulta.toLowerCase()));
}

if (require.main === module) {
  console.log(JSON.stringify({
    status: 'ok',
    tools: ['listar_docs_internos', 'buscar_doc_internos'],
    sample: buscarDocInternos('caducidad')
  }, null, 2));
}

module.exports = { listarDocsInternos, buscarDocInternos };
