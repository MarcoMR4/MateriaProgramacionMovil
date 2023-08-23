// 1.- Dado un string de longitud “n” en formato CamelCase, devuelve el número de palabras
// que contiene dicho string, así como el mismo string pero en formato snake_case

function words(input) {
    let contador = 0
    const caracteres = input.split('');

    caracteres.forEach(caracter => {
        if (caracter === caracter.toUpperCase()) {
            contador++;
        }
    });
    return contador;
}

function transformar(input) {
    nuevoArreglo = [];
    input.split('').forEach((caracter, index) => {
        if (caracter === caracter.toUpperCase() && index !== 0) {
            nuevoArreglo.push('_')
        }
        nuevoArreglo.push(caracter.toLowerCase());
    });
    return nuevoArreglo.join('');
}

let input = "HolaMundoEnJavaScript";

console.log("Cadena recibida: " + input);
console.log("Palabras: " + words(input));
console.log("Cadena transformada: " + transformar(input))