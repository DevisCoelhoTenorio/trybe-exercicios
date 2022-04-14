const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const media = grades.map((elemento, index) => {
    let valor = elemento.reduce((acc, valor) => acc + valor, 0);
    const resultado = valor / elemento.length;
    return resultado;
});

const studentAverage = students.map((elemento, index) => ({
    name: elemento,
    average: media[index],
}));

console.log((studentAverage));
  


// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];