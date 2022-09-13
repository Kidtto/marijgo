const form = document.getElementById('form');
const btn = document.getElementById('btnDatos');
const names = document.getElementById('inputNames');
const age = document.getElementById('inputAge');
const email = document.getElementById('inputEmail');
const city = document.getElementById('inputCity');
const policy = document.getElementById('checkPolitica');

//Control de validación

const objectValid = {
    nombres:false, 
    edad:false,
    correo:false,
    ciudad:false,
    politica:false
};

//Validar el formulario completo

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(validForm() === -1){
        alert('Enviando el formulario');
    }else{
        alert('Error en valores del formulario');
    }
});

const validForm = () =>{
    const values = Object.values(objectValid);
    let response = values.findIndex(e => e === false);
    return response; 
};

names.addEventListener('change',(e/*evento*/)=>{
    console.log(e.target.value);
    const nameRegex = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{4,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    let valorNames = e.target.value;
    objectValid.nombres = valorNames.match(nameRegex) ? true : false;
    console.log(Object.values(objectValid));
});
age.addEventListener('change',function(e){
    const ageRegex = /^([0-9]{1,2}$)/g;
    if ((age.value.match(ageRegex)) && (parseInt(age.value)>=18)){
        objectValid.edad = true;
    }else{
        objectValid.edad = false;
    }
    console.log(Object.values(objectValid));
});

email.addEventListener('change', function validarEmail(valor) {
    if (/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/){
     objectValid.correo = true;
    } else {
     objectValid.correo = false;
    } 
});

city.addEventListener('change',(e)=>{
    if((city.value===null || city.value==='Selecciona')){
        objectValid.ciudad=false;
    }
    else{
        objectValid.ciudad=true;
    }
    console.log(Object.values(objectValid));
});

policy.addEventListener('change', function(e){
    objectValid.politica = e.target.checked === true ? true : false;
    console.log(Object.values(objectValid));
});

