let numbers=[5,9,3,19,70,8,100,2,35,27];
let impar=0;

for(var cont=0; cont < numbers.length; cont += 1){
    if(numbers[cont]%2 !== 0){
        impar += 1;
    }
}
if(impar=== 0){
console.log('Nenhum valor ímpar encontrado')
}
else{
console.log(impar);
}

    







    // total= total + numbers[cont];

    // if(cont === numbers.length-1){

    //     if(total/numbers.length > 20){

    //         console.log("Valor maior que 20");
    //     }
    //     else{

    //         console.log("Valor menor que 20");
    //     }

    //     console.log(total/numbers.length);
    // }
    
//var total=0;

// for(var cont =0; cont < numbers.length; cont +=1){
//     if(numbers[cont]>max){
//         max =numbers[cont];
//     }
// }


// console.log(max);
