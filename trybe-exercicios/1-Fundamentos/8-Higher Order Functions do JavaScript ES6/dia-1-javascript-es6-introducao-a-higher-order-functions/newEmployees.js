const cadastrar = (nomeCompleto) => {
  const email = nomeCompleto.toLowerCase().split(' ').join('_');
  return {nomeCompleto, email: `${email}@trybe.com`};
};

const newEmployees= (func) => {
  const employees = {
    id1: func('Pedro Guerra'),
    id2: func('Luiza Drumond'),
    id3:func('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(cadastrar));