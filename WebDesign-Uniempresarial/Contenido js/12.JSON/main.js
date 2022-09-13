'use strict';
let cadJSON = { "nombres":"Juan Adres"};
// [] -> arreglo, {} -> objeto


let datos = [
    {
        "nombres": "Juan Andres",
        "apellidos": "Vargas Solano",
        "edad": 34,
        "materias": ["lógica","programacion","matemáticas"],
        "soltero" : true 
    },
    {
    "nombres": "Mario Andres",
    "apellidos": "Marquez",
    "edad": 19,
    "materias": ["lógica","programacion","matemáticas"],
    "soltero" : true
    }    
];

Object.entries(datos).forEach((e)=> console.log(e));
