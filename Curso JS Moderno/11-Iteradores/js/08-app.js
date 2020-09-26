const pendientes = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

for(let x in pendientes) {
    console.log(x)
}

const automovil = {
    model: 'Camaro',
    year: 1969,
    engine: '6.0'
}

for(let atributo in automovil) {
    console.log(`${automovil[atributo]}`)
}

for (let [llave, valor] of Object.entries(automovil)) {
    console.log(llave)
    console.log(valor)
}
// for of itera sobre arreglos; for in itera sobre objetos