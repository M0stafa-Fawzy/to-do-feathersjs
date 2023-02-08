const app = require('../../src/app');

describe('\'to-do\' service', () => {
  it('registered the service', () => {
    const service = app.service('to-do');
    expect(service).toBeTruthy();
  });
});
