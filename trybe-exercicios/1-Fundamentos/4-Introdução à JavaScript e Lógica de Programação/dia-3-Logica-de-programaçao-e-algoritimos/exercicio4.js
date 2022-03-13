let numerosPrimos=[];
let cont=0;
let num=0;

    for(let index= 2 ;index <=50; index +=1){

        cont=0;

       for (let index2=1; index2 <= index; index2 +=1){

           if(index%index2 ===0 ){
               cont += 1;

           }
           num=index;
           }
           if(cont === 2){
            numerosPrimos.push(num);
        }
        }
        
console.log(numerosPrimos[numerosPrimos.length-1]);
