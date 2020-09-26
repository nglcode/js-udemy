const pendientes = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

const carrito = [
    { nombre: 'Monitor', precio: 500 },
    { nombre: 'TV', precio: 400 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audif', precio: 100 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Movil', precio: 1000 },
]

for(let x of pendientes) {
    console.log(x)
}

for(let y of carrito) {
    console.log(y.nombre)
}