// FUNCIONES PURAS

// Una función pura es una función que, dada la misma entrada, siempre devolverá la misma salida
// y no producirá efectos secundarios, es decir, no modifica estados externos ni interactúa
// con el "mundo exterior" (no modifica variables globales, no imprime en consola, etc.).

function sum(a, b) {
  // Esta función es pura porque:
  // 1. No modifica variables externas o parámetros.
  // 2. Dada la misma entrada, siempre devuelve la misma salida.
return a + b; // Devuelve la suma de "a" y "b" sin causar efectos secundarios.
}

// SIDE EFFECTS (efectos secundarios)

// Los efectos secundarios ocurren cuando una función cambia el estado fuera de su propio alcance
// o interactúa con el mundo exterior. Ejemplos de efectos secundarios incluyen:

// 1. Modificar variables globales.
// 2. Modificar parámetros o variables pasadas a la función.
// 3. Hacer solicitudes HTTP.
// 4. Imprimir mensajes en la consola o en la pantalla.
// 5. Manipular el DOM (en el navegador).
// 6. Obtener la hora actual o cualquier otra acción que implique estado externo.

// FUNCIONES IMPURAS

function sum(a, b) {
  console.log("A: ", a); // Este es un efecto secundario: imprime en la consola.
  // Al tener un efecto secundario, esta función deja de ser pura.
  return a + b; // A pesar de devolver el mismo resultado para los mismos inputs, tiene un efecto adicional.
}

// Aquí estamos utilizando una variable global llamada "total".
// Las funciones puras no deberían modificar variables fuera de su propio alcance.
let total = 0;

function sumWithSideEffect(a) {
  total += a; // Modifica la variable global "total", lo cual es un efecto secundario.
  // Debido a que cambia el estado de "total", esta función es impura.
  return total; // La salida de esta función depende del estado anterior de "total".
}

// EJEMPLO DE FUNCIONES PURAS

// Esta función es pura porque no modifica nada externo, solo devuelve el cuadrado de "x".
function square(x) {
  return x * x; // Siempre devuelve el mismo resultado para el mismo "x".
}

// Otra función pura. No modifica variables externas y siempre devuelve la misma salida
// dado el mismo "y".
function addTen(y) {
  return y + 10; // Suma 10 al valor recibido, sin efectos secundarios.
}

// Ejemplo de cómo se pueden componer funciones puras.
const number = 5; // Definimos una constante "number" con valor 5.
const finalResult = addTen(square(number)); // Componemos funciones puras.
// Primero calcula el cuadrado de "number", luego le suma 10.
console.log(finalResult); // Imprimimos el resultado final. (Este "console.log" es un efecto secundario).

// Resultado esperado:
// square(5) = 25
// addTen(25) = 35
// Se imprime "35" en la consola.
