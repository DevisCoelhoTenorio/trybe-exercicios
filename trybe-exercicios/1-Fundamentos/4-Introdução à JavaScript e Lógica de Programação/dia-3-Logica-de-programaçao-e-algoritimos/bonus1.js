let num = 5;
let quadrado =[];

for (let index2 =0; index2 < num; index2 += 1){

    for (let index = 0; index < num; index += 1){
    if(quadrado.length < num){

    
    quadrado.push('*');
    }
    }

console.log(quadrado.join(''));
}