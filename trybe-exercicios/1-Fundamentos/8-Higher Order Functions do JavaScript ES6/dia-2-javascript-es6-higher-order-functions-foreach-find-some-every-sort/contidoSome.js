const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  const check = arr.some((valor) => valor === name);
  return check;
}

console.log(hasName(names, 'José'))