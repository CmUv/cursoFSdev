/*
 CLOSURE: función que tiene acceso a variables de un ámbito externo,
 incluso después de que esa función haya terminado de ejecutarse.

 Ámbito léxico: cada vez que se declara una función,
 crea su propio ámbito léxico, y puede acceder a las variables
 dentro de ese ámbito y a las variables en ámbitos superiores.
*/

function outerFunction() {
    let outerVariable = "Vengo de la función exterior"  // Variable en el ámbito de la función exterior

    function innerFunction() {
        // Esta función interna tiene acceso a "outerVariable", que pertenece al ámbito exterior
        console.log(outerVariable)  
    }

    return innerFunction  // Devuelve la función interna, que crea un closure
}

const closureExample = outerFunction()  // "outerFunction" se ejecuta, pero su "innerFunction" aún tiene acceso a "outerVariable"
closureExample()  // Resultado: "Vengo de la función exterior"


// Ejemplo de un contador utilizando closures

function createCounter() {
    let count = 0  // Variable privada dentro del closure

    return function() {
        count++  // Incrementa el contador en cada llamada
        console.log(count)  // Muestra el valor actualizado de "count"
    }
}

const counterA = createCounter()  // Crea una nueva instancia del closure "counterA"
counterA()  // Resultado: 1
counterA()  // Resultado: 2

const counterB = createCounter()  // Crea una nueva instancia del closure "counterB"
counterB()  // Resultado: 1 (es independiente de "counterA", ya que es una nueva instancia del closure)


// Otro ejemplo de closure

function outer() {
    let message = "Hola, "  // Variable en el ámbito exterior

    function inner(name) {
        // La función interna tiene acceso a la variable "message" del ámbito exterior
        console.log(message + name)
    }

    return inner  // Devuelve la función interna
}

const closureA = outer()  // Crea una instancia del closure
const closureB = outer()  // Crea otra instancia separada del closure

closureA("Alicia")  // Resultado: "Hola, Alicia"
closureA("Roberto")  // Resultado: "Hola, Roberto"
closureB("Carlos")  // Resultado: "Hola, Carlos" (independiente de "closureA")

/* Closure: Es una función que "recuerda" el entorno donde fue creada. A pesar de que outerFunction ya terminó su ejecución,
la función interna innerFunction todavía tiene acceso a las variables del ámbito externo como outerVariable.

Contadores con closures: En el ejemplo de createCounter, cada vez que se llama a createCounter, se crea un nuevo ámbito con una variable
count. Las funciones devueltas recuerdan ese ámbito específico, lo que permite mantener su propio estado independiente.

Ámbitos separados: Cuando se crean múltiples instancias de outer, como en closureA y closureB,
cada una tiene su propio ámbito léxico, lo que hace que sean independientes entre sí, manteniendo sus propias variables
*/