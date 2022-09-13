'use strict';
/**
 * Contenedores
 

var var1 = 23; //ambito global
let var2 = 12 //ambito local
const IVA_1 = 19;
var var1 = "Hola mundo";
//let var2 = 23;
console.log(var1);
if(true){
var var1 = false;
}
console.log(var1);*/
//Suma de dos numeros 

let numero1; 
let numero2;
let suma;
suma = 0;
numero1= parseFloat( prompt("Introduzca un número")); //Cambiar la cadena a numero
numero2=prompt("Introduzca un número");
suma = numero1 + parseFloat(numero2);
console.info("La suma es:"+suma); 
alert("La suma es" +suma);




