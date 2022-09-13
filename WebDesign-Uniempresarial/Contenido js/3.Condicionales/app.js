'use strict';
let num3=55;
let num4=12;
if (num3 > num4){
    console.log("entré");
}else {
    if (num3 % 5 === 0){
    }
}

//Condicional ternario

let respuesta = (num4 >= 10) ? "num4 es mayor que 10" : "No es mayor que 10";
//console.log(respuesta);

//Switch

let opcion = 2;

switch (opcion){
    case '1':
        console.log("Opcion 1");
        break; 
    case 2:
        console.log("Opcion 2");
    case 3:
        console.log("Opcion 3");
        break; 
    case 4:
        console.log("Opcion 4");
    default: 
        console.log("Opcion fuera de rango");

}
switch (true){
    case opcion >= 0 && opcion <=3:
        console.log("Está aplazado");
        break; 
    case opcion >= 3 && opcion <=5:
        console.log("Está aprovado");
        break;
    case opcion > 5:
        console.log("Opcion fuera de rango");
        break;
}