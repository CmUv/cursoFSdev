// Variables globales
const productName = "Celular"  // Declaración en el ámbito global
const precio = 499  // Declaración en el ámbito global
const marca = "Tecno"  // Declaración en el ámbito global

// Función que define variables locales y accede a variables globales
function getProductosDetalles() {
    // Variables locales con el mismo nombre que las variables globales
    const productName = "Laptop"  // Esta variable local "productName" sobrescribe la global dentro de esta función
    const precio = 899  // Esta variable local "precio" también sobrescribe la global dentro de esta función

    // Se devuelve una cadena de texto que accede a las variables locales y a la global "marca"
    return `La ${productName} cuesta $${precio} de la marca ${marca}.`
    // Aquí se usa "productName" y "precio" locales, pero "marca" se toma del ámbito global ya que no hay una variable "marca" local.
}

console.log(getProductosDetalles())  
// Resultado: "La Laptop cuesta $899 de la marca Tecno."
// La función usa las variables locales "productName" y "precio", pero accede a la variable global "marca" gracias a la cadena de ámbitos.

/*
Explicación del Scope Chain (Cadena de Ámbitos):
Ámbito Local: Dentro de la función getProductosDetalles, las variables productName y precio están declaradas localmente,
por lo que estas se usan en lugar de las variables globales con los mismos nombres.

Ámbito Global: La variable marca no está declarada localmente dentro de la función, por lo que la función recurre al ámbito global
para buscarla. La cadena de ámbitos permite que la función acceda a marca a pesar de no estar definida localmente.

Cadena de Ámbitos: JavaScript primero busca las variables dentro del ámbito local (función),
y si no las encuentra, busca en el ámbito superior (global o exterior).
*/



// ejemplo 2
const puntosUsuario = 50  // Variable global que almacena los puntos del usuario

// Función que determina el acceso basado en los puntos del usuario
function verAcceso() {
    // Se evalúa si los puntos del usuario son menores que 100
    if (puntosUsuario < 100) {
        const message = "Acceso denegado, te faltan puntos"  // Mensaje local para acceso denegado
        return message  // Devuelve el mensaje de acceso denegado
    } else {
        const message = "Acceso concedido, tienes acceso VIP"  // Mensaje local para acceso concedido
        return message  // Devuelve el mensaje de acceso concedido
    }
}

// Llama a la función verAcceso y muestra el resultado en la consola
console.log(verAcceso())  // Resultado: "Acceso denegado, te faltan puntos"
