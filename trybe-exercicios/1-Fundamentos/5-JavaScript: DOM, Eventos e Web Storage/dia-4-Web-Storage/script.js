let corDeFundo1 = document.getElementById('corDeFundo');
const corDoTexto = document.getElementById('corDoTexto');
const tamanho = document.getElementById('tamanho');
const espaço = document.getElementById('espaço');
const fonte = document.getElementById('fonte');

let corpo1 =document.getElementById('body');
console.log(corDeFundo1);

corDeFundo1.addEventListener('change', function(){
corpo1.style.backgroundColor = corDeFundo1.value;
});
