// object constructor
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('Juan', 500)

function formatearCliente(cliente) {
    const { nombre, saldo} = cliente;
    return `El Cliente ${nombre} tiene un saldo de ${saldo}`
}

function formatearEmpresa(cliente) {
    const { nombre, saldo, categoria} = cliente;
    return `El Cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`
}

console.log( formatearCliente(juan))

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('Codigo con Juan', 4000, 'Cursos en línea');
console.log(formatearEmpresa(CCJ))
