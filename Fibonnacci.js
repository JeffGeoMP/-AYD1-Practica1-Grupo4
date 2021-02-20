/*
201602855
*/
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}



/*Numero primo*/
var num = parseInt(prompt("Ingrese el numero"));
var i=1;
var cont=0;

while(i<=num-1){
    if(num%i==0){cont= cont+1;}
    i++;
}
if(cont==1){console.log(num," Si es primo");}
else{console.log(num," no es primo");}