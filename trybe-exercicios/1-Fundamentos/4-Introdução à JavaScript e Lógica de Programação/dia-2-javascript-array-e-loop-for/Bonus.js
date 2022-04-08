// Bônus
//01
let numbers= [5,9,3,19,70,8,100,2,35,27];

console.log(numbers.sort(function(a,b){
        if(a > b) return 1; //inverter o retorno entre os if muda o ordenamento de crescente para decrescente

        if(a <b) return -1;

        return 0;
    }));
// sort necessita de uma função para ordenar numeros.
// portanto deve ser usasdo .sort(function(a,b){ })

//02
console.log(numbers.sort(function(a,b){
        if(a > b) return -1; //inverter o retorno entre os if muda o ordenamento de crescente para decrescente

        if(a <b) return 1;

        return 0;
    }));

//03
let numbers2= [5,9,3,19,70,8,100,2,35,27];
let multiplicado =[];

for ( let key =0; key <numbers2.length; key += 1){
    if(key < numbers2.length -1){
        multiplicado.push(numbers2[key]*numbers2[key +1]);
    }else{
        multiplicado.push(numbers2[key]*2);
    }
}
console.log(multiplicado);


