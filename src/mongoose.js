const mongoose = require('mongoose');
const logger = require('./logger');

module.exports = function (app) {
  mongoose.set('strictQuery', true);
  mongoose.connect(
    app.get('mongodb')
  ).catch(err => {
    logger.error(err);
    process.exit(1);
  });

  app.set('mongooseClient', mongoose);
};
