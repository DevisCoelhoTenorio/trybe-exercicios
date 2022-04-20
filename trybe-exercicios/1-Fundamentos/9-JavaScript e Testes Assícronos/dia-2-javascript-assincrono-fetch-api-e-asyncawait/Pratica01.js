// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const objeto = {
      method: 'GET',
      headers: {'Accept': 'application/json'}
  };
  fetch(API_URL, objeto)
    .then(response => response.json())
    .then(data => console.log(data.joke));
};


window.onload = () => fetchJoke();