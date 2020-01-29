let form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const loader = document.querySelector('#loader');

  // check what text was put into the form field
  let formText = document.getElementById('url').value;

  let data = {
    url: formText
  };
  loader.style = 'display: block';
  fetch('/test', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(res => {
      Client.responseHandler(res);
      loader.style = '';
    });
});
