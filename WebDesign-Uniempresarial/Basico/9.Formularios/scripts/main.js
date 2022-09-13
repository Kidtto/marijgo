'use strict';
const btn = document.getElementById('boton2');

btn.addEventListener('click',(event)=>{//Segundo parámetro: función tipo anónima
event.preventDefault();
const form = document.getElementById('fomr');
console.log(form);
});