let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character/';

const fetchData = (url_api, callback) => {
  let xhttp = XMLHttpRequest();
  xhttp.open('GET', url_api, true);
  xhttp.onreadystatechange = event => {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error(`Error ${url_api}`);
        return callback(error, null);
      }
    }
  }
  xhttp.send();
}

fetchData(API, (error1, data1) => {
  if(error1) return console.error(error1);
});