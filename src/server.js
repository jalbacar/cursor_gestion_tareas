const express = require('express');
const logger = require('./utils/logger');
const tareasRouter = require('./routes/tareas');

const app = express();
app.use(express.json());
app.use('/tareas', tareasRouter);

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => logger.info('servicio arriba', { port: PORT }));
}

module.exports = app;
