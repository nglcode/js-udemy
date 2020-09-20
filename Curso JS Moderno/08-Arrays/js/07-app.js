const carrito = []

const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Smartphone",
    precio: 800
}

const producto3 = {
    nombre: "Teclado",
    precio: 100
}

const producto4 = {
    nombre: "Ratón",
    precio: 80
}

carrito.push(producto)
carrito.push(producto2)
carrito.unshift(producto3)
carrito.push(producto4)

// console.table(carrito)

// carrito.pop()

// console.table(carrito)

// carrito.shift()
console.table(carrito)
carrito.splice(0,2)
 console.table(carrito)

