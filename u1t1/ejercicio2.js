// 2.- Dado un arreglo de “n” números, genera una función que devuelva todas las
// combinaciones de arreglos posibles que se puedan crear con el arreglo original.

function combinaciones(input) {
    const resultado = [[]];

    for (const elemento of input) {
        const longitud = resultado.length;
        for (let i = 0; i < longitud; i++) {
            const combinacion = [...resultado[i], elemento];
            resultado.push(combinacion);
        }
    }
    return resultado;
}

let arreglo = [1, 2, 3, 4, 5]
const resultado = combinaciones(arreglo)
console.log(resultado)

