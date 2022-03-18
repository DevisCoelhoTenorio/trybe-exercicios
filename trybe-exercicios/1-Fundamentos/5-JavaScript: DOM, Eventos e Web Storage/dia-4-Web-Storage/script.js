let corDeFundo1 = document.getElementById('corDeFundo');
const corDoTexto = document.getElementById('corDoTexto');
const tamanho = document.getElementById('tamanho');
const espaço = document.getElementById('espaço');
const fonte = document.getElementById('fonte');

let corpo1 =document.getElementById('body');

corDeFundo1.addEventListener('change', function(){
corpo1.style.backgroundColor = corDeFundo1.value;
localStorage.setItem('CorDeFundo', corDeFundo1.value);
});

corDoTexto.addEventListener('change', function(){
    corpo1.style.color = corDoTexto.value;
    localStorage.setItem('corDoTexto', corDoTexto.value);
});

tamanho.addEventListener('change', function(){
    corpo1.style.fontSize = tamanho.value + 'px';
    localStorage.setItem('tamanho', tamanho.value + 'px');
});

espaço.addEventListener('change', function(){
    corpo1.style.letterSpacing = espaço.value + 'px';
    localStorage.setItem('espaço', espaço.value + 'px');
});

fonte.addEventListener('change', function(){
    corpo1.style.fontFamily = fonte.value;
    localStorage.setItem('fonte', fonte.value);
});

window.onload = function (){
    corpo1.style.backgroundColor = localStorage.getItem('CorDeFundo');
    corpo1.style.color=localStorage.getItem('corDoTexto');
    corpo1.style.fontSize=localStorage.getItem('tamanho');
    corpo1.style.letterSpacing=localStorage.getItem('espaço');
    corpo1.style.fontFamily=localStorage.getItem('fonte');


};