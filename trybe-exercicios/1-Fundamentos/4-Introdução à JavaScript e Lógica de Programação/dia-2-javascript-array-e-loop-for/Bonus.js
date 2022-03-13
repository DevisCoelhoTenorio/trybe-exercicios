let numbers= [5,9,3,19,70,8,100,2,35,27];

console.log(numbers.sort(function(a,b){
        if(a > b) return 1; //inverter o retorno entre os if muda o ordenamento de crescente para decrescente

        if(a <b) return -1;

        return 0;
    }));

// sort necessita de uma função para ordenar numeros.
// portanto deve ser usasdo .sort(function(a,b){ })
