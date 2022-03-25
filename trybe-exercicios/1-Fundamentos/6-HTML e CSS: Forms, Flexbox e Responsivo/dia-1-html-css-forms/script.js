const enviar = document.getElementById('enviar');

enviar.addEventListener('click', function(event){
    const concordo =document.getElementById('concordo2');
    const nome =document.getElementById('nome').value;
    const email =document.getElementById('email').value;
    const texto =document.getElementById('resposta').value;

    if(nome.length <10 || email.length < 10 || texto.length <30 || concordo.value !== "c2"){
        alert('Dados Inválidos');
        event.preventDefault();
    }else{
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip');
    }
})
