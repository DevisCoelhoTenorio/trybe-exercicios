let array = ['java', 'javascript', 'python', 'html', 'css'];
let quantidade= [];
let menor= 0;

for (let index=0; index <array.length; index += 1){
    quantidade.push(array[index].length);
}
for (let index2 = 0; index2 <quantidade.length; index2+=1){
    if(quantidade[index2]<quantidade[index2]+1){
    menor=array[index2];
    }
}
console.log(menor);
