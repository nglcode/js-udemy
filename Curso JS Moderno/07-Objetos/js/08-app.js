"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true

}

// Se usa para evitar la modificación de propiedades del objeto
Object.freeze(producto)

// producto.disponible = false;
// producto.imagen = "imagen.jpg";

console.log(producto)
console.log(Object.isFrozen(producto))

