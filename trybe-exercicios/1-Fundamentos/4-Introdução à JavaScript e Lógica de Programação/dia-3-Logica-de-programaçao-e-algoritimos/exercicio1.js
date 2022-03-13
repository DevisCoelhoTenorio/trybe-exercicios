let num = 4;
let resultado=num;

for (let index =0; index < num; index += 1){
    resultado= resultado*(num-1);
    num -= 1;
}
console.log(resultado);
