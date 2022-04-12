const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const listaCompleta = products.map((produto, index) =>{
return {[produto]: prices[index]}
});

console.log(listaCompleta);
