let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api, callback) => {
  let xhttp = XMLHttpRequest();
  xhttp.open('GET', url_api, true);
  xhttp.onreadystatechange = event => {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText))
      }
    }
  }
}