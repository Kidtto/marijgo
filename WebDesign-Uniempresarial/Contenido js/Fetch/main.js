fetch("https://pokeapi.co/api/v2/pokemon")
.then ((response) => response.json())
.then((json) => {
    console.log(json.results);
    for (let p of json.results){
        console.log(p.name);
    }
})
.catch((error) => console.error ("Se ha generado:"+error))
.finally(console.info("Ha finzalidazo la petición"));

//Tarea en parejas: pintar otra API (no Rick and Morty, JSON place holder ni )