// let num = 5;
// let quadrado =[];

// for (let index2 =0; index2 < num; index2 += 1){

//     for (let index = 0; index < num; index += 1){
//     if(quadrado.length < num){

    
//     quadrado.push('*');
//     }
//     }

// console.log(quadrado.join(''));
// }

// let tamanho = 5;
// let simbolo = '*';
// let linha ='';

// for (let index =0; index <= tamanho ; index +=1){
//     console.log(linha);
//     linha=linha + simbolo;
// };

let tamanho =5;
let simbolo='*';
let linha ='';
let possition= tamanho;

for (let indexlinha =0; indexlinha <= tamanho ; indexlinha +=1){
    for (let colunaindex =0; colunaindex<=tamanho; colunaindex +=1){
        if(colunaindex<possition){
            linha= linha + ' ';
        }else{
            linha=linha + simbolo;
        }
    }
    console.log(linha);
    linha='';
    possition -= 1;
}