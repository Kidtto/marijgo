'use strict';
/**Declaración de arreglos*/

const myArray1 = [2,4,6,8,true,'Maria',800,'2'];
let myArray2 = new Array('a','e','i','o','u');     //new: objetos

console.log(myArray1[6]);
console.log(myArray2[3]);

/**Iteración de arreglos
 * Fir in, For of, Foreach
 */
for (let i of myArray1){
    //console.log(i);
}
for(let j in myArray1){
    console.log(j);
}
for(let k=0; k<myArray1.lenght; k++){
    console.log(k);
}

