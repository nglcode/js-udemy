const nombre = localStorage.getItem('nombre');
console.log(nombre);

const productoJSON = localStorage.getItem('producto');
// JSON.parse convierte el string de objeto en un objeto real (igual en el caso del array)
console.log(JSON.parse( productoJSON) );

const meses = localStorage.getItem('meses');
console.log(JSON.parse( meses) );