'use strict';

//Funcion clasica

function printinCad(cadena="No pasó parametro"){
    //Remplate string
    console.log(`Esto es una prueba de cadena ${cadena}`);
} 

//Invocacion 

printinCad("Estoy pasando parámetro");

//Funcion tipo flecha

const operacion = (num1=1,num2=1) => {
    let result = Math.pow(num1,num2);
    return result;
}

console.log(operacion(5,3))
