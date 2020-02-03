const { responseHandler } = require('../src/client/js/responseHandler.js');

test('Throw error when incorrect data structure is inputted', () => {
  let data = {
    subjectivity: 'subjective'
  };
  expect(() => responseHandler(data)).toThrow();
});
