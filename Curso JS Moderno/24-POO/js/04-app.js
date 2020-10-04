class Cliente {

    // atributo privado, solo se puede acceder desde la propia clase con getters y setters
    #nombre;

    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.#nombre} - Saldo: ${this.saldo}`;
    }

    // no requieren una instancia, se llama directamente desde la clase
    static bienvenida() {
        return `Bienvenido al cajero`
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }
}

const juan = new Cliente('Juan', 400);
console.log(juan.mostrarInformacion()) // en este caso si va a mostrar el nombre, porque se esta accediendo a esa variable desde un metodo de la clase
// console.log(juan.#nombre) // en este caso no sera posible, porque se intenta acceder directamente a una variable privada

const pedro = new Cliente();
pedro.setNombre('Pedro');
console.log(pedro.getNombre());