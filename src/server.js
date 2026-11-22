const express = require('express');
const legacyLogger = require('./utils/legacyLogger');
const tareasRouter = require('./routes/tareas');

const app = express();
app.use(express.json());
app.use('/tareas', tareasRouter);

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => legacyLogger('servicio arriba en puerto ' + PORT));
}

module.exports = app;
