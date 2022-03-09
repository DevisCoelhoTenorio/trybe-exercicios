let palavra= "banana";
let palavra2=[];
let index2 = 0;

for (let index = palavra.length-1 ; index >=0; index -= 1){
    
    palavra2.push(palavra[index]);
    index2 +=1;
}

console.log(palavra2);
