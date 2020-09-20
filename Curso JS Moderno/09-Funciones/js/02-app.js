// Se puede invocar desde cualquier lado
function sumar() {
    console.log(2+2)
}

sumar()


// Se puede invocar solo despues de su definicion
const sumar2 = function() {
    console.log(3+3)
}

sumar2()

