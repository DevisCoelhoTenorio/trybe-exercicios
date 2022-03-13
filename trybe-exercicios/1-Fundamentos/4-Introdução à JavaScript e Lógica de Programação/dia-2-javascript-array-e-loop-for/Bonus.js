let numbers= [5,9,3,19,70,8,100,2,35,27];

let snumbers=[];

for (let index =1; index<numbers.length; index +=1){
    for (let sindex = 0; sindex <index; sindex +=1){

        

            snumbers.push(numbers[sindex]*numbers[index]);
            
        }
    }

console.log(snumbers);
