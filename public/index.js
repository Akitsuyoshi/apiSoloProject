window.onload = () => {
  let v = document.getElementById('window').value;

  getDataFromApi(v);

  const form = document.forms[0];
  form.addEventListener('submit', e => e.preventDefault());
  form.addEventListener('submit', e => {
    v = document.getElementById('window').value;
    getDataFromApi(v);
  });
};

function getDataFromApi(link) {
  return fetch(link)
    .then(res => res.json())
    .then(res => {
      const iframe = document.getElementById('frame').contentWindow.document.body;

      iframe.firstChild.innerText = JSON.stringify(res, null, '\t');
    })
    .catch(err => window.location.reload(true));
}
