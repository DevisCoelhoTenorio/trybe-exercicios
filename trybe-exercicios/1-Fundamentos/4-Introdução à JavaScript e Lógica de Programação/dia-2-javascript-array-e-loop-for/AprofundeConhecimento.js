let numbers=[5,9,3,19,70,8,100,2,35,27];

var total=0;

for (var cont = 0; cont < numbers.length; cont+= 1){

    total= total + numbers[cont];

    if(cont === numbers.length-1){

        console.log(total);
    }
    
    
}