// Initializes the `to-do` service on path `/to-do`
const { ToDo } = require('./to-do.class');
const createModel = require('../../models/to-do.model');
const hooks = require('./to-do.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/to-do', new ToDo(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('to-do');

  service.hooks(hooks);
};
