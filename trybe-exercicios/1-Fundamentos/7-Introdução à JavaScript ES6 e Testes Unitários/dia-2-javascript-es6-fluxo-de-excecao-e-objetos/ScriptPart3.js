const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  function addChave (objeto, chave, valor){
  objeto[chave] = valor;
  };

  function mostrarChave (objeto){
//   console.log(Object.keys(objeto));
  }

  function mostrarTamanho (objeto){
//   console.log(Object.keys(objeto).length); 
  }

  function mostrarValor (objeto){
//   console.log(Object.values(objeto));
  }

  addChave(lesson2, 'turno', 'noturno');
  mostrarChave(lesson2);
  mostrarTamanho(lesson2);
  mostrarValor(lesson2);

  const allLessons = Object.assign({},{lesson1, lesson2, lesson3});
//   console.log(allLessons);

  const quantidadeEstudante = () => {
  console.log(Object.keys(allLessons).length);
  }
//   quantidadeEstudante();
//   console.log(lesson2);

const valorChave = (objeto, posicao) =>{
console.log(Object.values(objeto)[posicao]);
}

// valorChave(lesson1, 0);
const verificar = (objeto, chave, valor) => {
const array = Object.entries(objeto);
let verificador = false;
for (let index in array) {
  if (array[index[0]] === key && array[index][1] === value) verificador = true;
}
return verificador;

}  