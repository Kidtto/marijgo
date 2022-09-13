'use strict';
let cadena = "enero-febrero-marzo-abril-mayo-junio-julio";
const myArray1 = [2,4,6,8,true,'Maria',800,'2'];
//método slpit 
let resultArray = cadena.split('-');
//console.log(resultArray);
//método find
let result = myArray1.find((e) => e === true  );
//console.log(result);

//método findIndex 

result = myArray1.findIndex((e) => e === 'Maria')
result = myArray1.filter((e) => e % 2 === 0)


console.log(result);