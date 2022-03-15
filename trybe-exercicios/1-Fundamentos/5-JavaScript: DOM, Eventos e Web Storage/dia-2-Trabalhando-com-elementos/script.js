// 1
const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
//2
const pai = elementoOndeVoceEsta.parentElement;

pai.style.color = "red";
//3
const pirmeiroFilhofoFilho = elementoOndeVoceEsta.firstElementChild;

pirmeiroFilhofoFilho.innerText = "peimeiroFilhoDoFilho";
//4

const primeiroFilho=pai.firstElementChild;
//5
const primeiroFilho2=elementoOndeVoceEsta.previousElementSibling;
//6
const textElement = elementoOndeVoceEsta.nextSibling;
//7 
const terceiroFilho= elementoOndeVoceEsta.nextElementSibling;
//8
const terceiroFilho2 = pai.lastElementChild.previousElementSibling;





