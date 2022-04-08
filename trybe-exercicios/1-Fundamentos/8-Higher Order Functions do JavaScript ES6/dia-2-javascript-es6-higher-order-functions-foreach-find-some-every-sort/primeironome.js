const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  const name = names.find((valor) => valor.length === 8);
  return name;
}

console.log(findNameWithFiveLetters());