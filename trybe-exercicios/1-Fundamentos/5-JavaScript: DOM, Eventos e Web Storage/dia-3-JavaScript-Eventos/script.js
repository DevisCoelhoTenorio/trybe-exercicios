function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function criarDiasDoMes (){
      let pegarListaDia = document.getElementById('days');

      for (let index =0; index< dezDaysList.length;index += 1){
        let day = dezDaysList[index];
        let liDay=document.createElement('li');

        if(day === 24 || day === 31){
            liDay.className ='day holiday'
            liDay.innerText=day;
            pegarListaDia.appendChild(liDay);

        }else if (day === 4 || day === 11 || day === 18){
            liDay.className='day friday';
            liDay.innerText=day;
            pegarListaDia.appendChild(liDay);

        }else if (day === 25){
            liDay.className='day holiday friday';
            liDay.innerText=day;
            pegarListaDia.appendChild(liDay);
        }else{
            liDay.innerText=day;
            liDay.className='day';
            pegarListaDia.appendChild(liDay);
        }
      };
  };
  criarDiasDoMes();

  function criarBotaoFeriado(nomeDoBotao){
      let caixaBotao =document.getElementsByClassName('buttons-container')[0];
      let novoBotao = document.createElement('button');
      let idNovoBotao= 'btn-holiday';

      novoBotao.innerText = nomeDoBotao;
      novoBotao.id= idNovoBotao;
      caixaBotao.appendChild(novoBotao);
    };
criarBotaoFeriado('Feriados');

function pintarFeriados(){
    let pegarBotaoFeriado = document.getElementById('btn-holiday');
    let pegarFeriados = document.querySelectorAll('.holiday');
    let corDeFundo = 'red';
    let novaCor = 'rgb(238, 238, 238)';


    pegarBotaoFeriado.addEventListener('click', function(){

        for (let index =0; index < pegarFeriados.length; index += 1){

            if(pegarFeriados[index].style.backgroundColor === novaCor){
                pegarFeriados[index].style.backgroundColor = corDeFundo;
            }else {
                pegarFeriados[index].style.backgroundColor = novaCor;
            }
        }
    });
};
pintarFeriados();

function criarBotaoSexta(nomeDoBotao){
    let caixaBotao = document.getElementsByClassName('buttons-container')[0];
    let novoBotao = document.createElement('button');
    let novoBotaoId= 'btn-friday';

    novoBotao.innerText =nomeDoBotao;
    novoBotao.id=novoBotaoId;
    caixaBotao.appendChild(novoBotao);
}
criarBotaoSexta('Sexta-feira');

function mudarSexta (diasSexta){
    let pegarBotaSexta = document.getElementById('btn-friday');
    let sexta = document.getElementsByClassName('friday');
    let novoTexto = 'Sexta-feira';

    pegarBotaSexta.addEventListener('click', function(){
        for(let index =0; index < sexta.length; index +=1){
            if(sexta[index].innerText !== novoTexto){
                sexta[index].innerText = novoTexto;
            }else{
                sexta[index].innerText = diasSexta[index];
            }
        }
    })
};
let diasDeSexta =[ 4, 11 ,18 ,25];
mudarSexta(diasDeSexta);

function zoom(){
    let days = document.querySelector('#days');

    days.addEventListener('mouseover', function (event){
        event.target.style.fontSize = '30px';
        event.target.style.fontWeight ='600';

    })
}
zoom();
function zoomout(){
    let days = document.querySelector('#days');

    days.addEventListener('mouseout', function (event){
        event.target.style.fontSize = '20px';
        event.target.style.fontWeight ='200';

    })
}
zoomout();

function newTaskSpan(task){
    let tasksContainer = document.querySelector('.my-tasks');
    let taskName =document.createElement('span');

    taskName.innerText = task;
    tasksContainer.appendChild(taskName);
}
newTaskSpan('jogar bola');

function newTaskDiv(color){
    let taskContainer = document.querySelector('.my-task');
    let newTask = document.createElement('div');

    newTask.className = 'task';
    newTask.style.backgroundColor = color;
    taskContainer.appendChild(newTask);
};
newTaskDiv('green');
