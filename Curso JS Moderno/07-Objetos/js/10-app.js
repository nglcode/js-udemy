const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true

}

const medidas = {
    peso: '1 kg',
    medida: '1m'
}

console.log(producto)
console.log(medidas)

// Unir dos objetos
const resultado = Object.assign(producto, medidas);

// Spread operator o Rest operator; los tres puntos significan 'coge una copia de...'
const resultado2 = {...producto, ...medidas}

console.log(resultado)
console.log(resultado2)