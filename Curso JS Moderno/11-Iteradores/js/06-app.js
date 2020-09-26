const pendientes = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

pendientes.forEach( (x, y) => {
    console.log(`${y}: ${x}`)
})

const carrito = [
    { nombre: 'Monitor', precio: 500 },
    { nombre: 'TV', precio: 400 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audif', precio: 100 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Movil', precio: 1000 },
]


const arregloForEach = carrito.forEach( (a, b) => `${b}: ${a.nombre}`)

// Crea un nuevo arreglo
const arregloMap = carrito.map( (x, y) => `${y}: ${x.nombre}`)

console.log(arregloForEach)
console.log(arregloMap)