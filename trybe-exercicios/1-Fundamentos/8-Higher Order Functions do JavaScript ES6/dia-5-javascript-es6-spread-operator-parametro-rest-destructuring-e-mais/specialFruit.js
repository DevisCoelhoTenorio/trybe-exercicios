// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'uva', 'mamao'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['pera', 'maca', 'melao'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));

const totalFrutas = [...specialFruit, ...additionalItens];

console.log(totalFrutas);