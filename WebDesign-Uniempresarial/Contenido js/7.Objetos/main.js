'use strict';

//objeto literal de JS

let myObject = {
    nombre: 'Felix',
    apellidos: 'Ruiz',
    Edad: 18,
    genero: 'masculino'
}
console.log(myObject.apellidos);
myObject.apellidos="Rodriguez";
console.log(myObject);
//Iterar objeto 
//Object.entries(myObject).forEach((e) =>-console.log(e));
//Object.entries(myObject).forEach(([key,value]) =>-console.log(key,value));
Object.values(myObject).forEach((key)=> console.log(key));