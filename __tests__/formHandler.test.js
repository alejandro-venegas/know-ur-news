global.fetch = require('jest-fetch-mock');
test('Test submit event listener', () => {
  jest.spyOn(window, 'alert').mockImplementation(() => {});
  document.body.innerHTML = `<form class="">
    <h2>Type the URL:</h2>
    <input type ="text" id="url" value= "google.com"/>
    <input type="submit" name="" value="Analyze" />
    <div id="loader"></div>
  </form>`;

  const formHandler = require('../src/client/js/formHandler.js');
  fetch.mockResponseOnce(JSON.stringify([{ id: 1 }]));
  const form = document.querySelector('form');
  form.submit();

  expect(global.fetch).toBeCalled();
});
