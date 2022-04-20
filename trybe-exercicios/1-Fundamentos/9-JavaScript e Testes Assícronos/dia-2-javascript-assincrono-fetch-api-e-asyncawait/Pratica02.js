const API_URL = "https://api.coincap.io/v2/assets";

function append(elemento) {
    const list = document.getElementById('rank');
    const newElement = document.createElement('li');
    newElement.textContent = elemento;
    newElement.classList.add('coin');
    list.appendChild(newElement);
}

const top10 = (data) => {
    for(let i = 0; i <= 9; i += 1) {
      const coin = 
        `moeda: ${data.data[i].name}\n,
        rank: ${data.data[i].rank}\n,
        preço: ${data.data[i].priceUsd}`
        
      append(coin);
    } 
}
const fetchJoke = () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  fetch(API_URL, requestOptions)
    .then(response => response.json())
    .then(data => top10(data))
    .catch(error => alert(error));
};


window.onload = () => fetchJoke();