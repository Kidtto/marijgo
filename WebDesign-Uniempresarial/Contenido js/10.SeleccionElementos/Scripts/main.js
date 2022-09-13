'use strict';

//selecionar elementos del dom

let myTitle = document.getElementById("titulo");

console.log(myTitle);

//seleccionar por el name

let tagName = document.getElementsByName("art1");

//seleccionar por etiqueta

let eitqueta = document.getElementsByTagName("h3");

console.log(eitqueta);

//QuerySelector

let queryTitulo = document.querySelector("#container");

//QuerySelector class

let myMenu = document.querySelector("#menu");

//QuerySelector etiqueta

let myOl = document.querySelector("ol");

//all
let allArt = document.querySelectorAll("article");
//console.log(allArt);
//Crear elementos
let miParrafo = document.createElement("p")
miParrafo.id="parrafo";
miParrafo.className="parrafo";
miParrafo.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic fuga neque qui aut. Veritatis nesciunt at, eos quos quas numquam dolore expedita rem rerum nulla sapiente cupiditate pariatur consequuntur doloremque?";
//Insertar elemento en el DOM
miParrafo.innerHTML = "<h3>Esto es otro titulo</h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic fuga neque qui aut. Veritatis nesciunt at, eos quos quas numquam dolore expedita rem rerum nulla sapiente cupiditate pariatur consequuntur doloremque?<strong>EJEMLPO</strong>"

//Insertat elemento en el DOM

let seccion1 = document.getElementById("section1");
seccion1.appendChild(miParrafo);