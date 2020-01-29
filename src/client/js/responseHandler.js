function responseHandler(data) {
  const { polarity, subjectivity } = data;
  if (polarity) {
    const polaritySpan = document.querySelector('#polarity span');
    polaritySpan.textContent = polarity.charAt(0).toUpperCase() + polarity.slice(1);
    polaritySpan.className = polarity;

    document.querySelector('#subjectivity span').textContent =
      subjectivity.charAt(0).toUpperCase() + subjectivity.slice(1);
  } else {
    alert('There was a problem with the URL you provided');
  }
}

export { responseHandler };
