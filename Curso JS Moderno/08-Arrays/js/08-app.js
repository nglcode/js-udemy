const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true

}

// const nombre = producto.nombre;

// Destruscturing
const { nombre } = producto;

console.log(nombre)

// Destruscturing con arreglos
const numeros = [10,20,30,40,50]

// const [primero, segundo, tercero] = numeros;

// const [, , tercero] = numeros;

const [primero, segundo, ...tercero] = numeros;

console.log(tercero)