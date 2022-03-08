let numbers=[5,9,3,19,70,8,100,2,35,27];

var total=0;

for (var cont = 0; cont < numbers.length; cont+= 1){

    total= total + numbers[cont];

    if(cont === numbers.length-1){

        if(total/numbers.length > 20){

            console.log("Valor maior que 20");
        }
        else{

            console.log("Valor menor que 20");
        }

        console.log(total/numbers.length);
    }
    
    
}