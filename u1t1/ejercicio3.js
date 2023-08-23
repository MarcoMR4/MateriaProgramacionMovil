// 3.- Utilizando la API de RickAndMorty https://rickandmortyapi.com/ obtener los datos de
// este endpoint https://rickandmortyapi.com/api/character y mostrarlos en consola.

const apiUrl = "https://rickandmortyapi.com/api/character"

async function datos() {
    try {
        const respuesta = await fetch(apiUrl);
        const datos = await respuesta.json();
        return datos.results;

    } catch (error) {
        console.error("Error: " + error)
    }
}



async function obtenerDatosPares() {
    const datosPersonajes = await datos();

    personajesPares = datosPersonajes.filter(personaje =>
        personaje.id % 2 == 0
    );

    personajesPares.forEach(personaje => {
        console.log(`Id: ${personaje.id}`);
        console.log(`Nombre: ${personaje.name}`);
        console.log(`Especie: ${personaje.species}`);
        if (personaje.type == "" || personaje.type == null) {
            personaje.type = "Programación Móvil"
        }
        console.log(`Tipo: ${personaje.type}`);
        console.log('---------------------------');
    });
}


obtenerDatosPares();