const express = require('express');

const formulariosRouter = require('./formularioRouter');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/formularios', formulariosRouter);
}
module.exports = routerApi;
