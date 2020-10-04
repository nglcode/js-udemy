// class declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Saldo: ${this.saldo}`;
    }

    // no requieren una instancia, se llama directamente desde la clase
    static bienvenida() {
        return `Bienvenido al cajero`
    }
}

const juan = new Cliente('Juan', 400);
console.log(juan.mostrarInformacion())
console.log(juan)
console.log(Cliente.bienvenida())



// class expression
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion2() {
        return `Cliente: ${this.nombre} - Saldo: ${this.saldo}`;
    }
}

const juan2 = new Cliente2('Juan', 400);
console.log(juan2)
console.log(juan2.mostrarInformacion2())