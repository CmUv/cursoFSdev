/*
  Operadores Lógicos en JavaScript 

Los operadores lógicos permiten combinar múltiples expresiones y retornan un valor booleano (`true` o `false`).
*/
// Declaración de las variables usadas en las comparaciones.
const a = 10;  // Número entero
const b = 20;  // Número entero
const c = "10";  // Cadena de texto que representa el número 10

//  Operador AND (&&)
// Devuelve `true` solo si ambas condiciones son verdaderas. Si alguna es falsa, retorna `false`.
console.log(a > 5 && b < 30);  // true (Ambas condiciones son verdaderas: 10 > 5 y 20 < 30)
console.log(a > 15 && b < 30); // false (La primera condición es falsa: 10 no es mayor que 15)

//  Operador OR (||) 
// Devuelve `true` si al menos una de las condiciones es verdadera. Solo retorna `false` si ambas son falsas.
console.log(a > 5 || b < 10);  // true (Una condición es verdadera: 10 > 5)
console.log(a > 15 || b < 10); // false (Ambas condiciones son falsas)

//  Operador NOT (!) 
// Invierte el valor booleano. Si la expresión es `true`, la convierte a `false`, y viceversa.
console.log(!(a > 5));  // false (La expresión `a > 5` es `true`, pero el NOT la invierte a `false`)
console.log(!(a < 5));  // true (La expresión `a < 5` es `false`, y el NOT la convierte a `true`)


//  Combinación de operadores lógicos y de comparación 

// Usando AND para combinar varias condiciones.
console.log(a === 10 && c == 10 && b > 15);  // true (Todas las condiciones son verdaderas)

// Usando OR para verificar si al menos una condición es verdadera.
console.log(a < 5 || c !== 10 || b === 20);  // true (La última condición es verdadera: b === 20)

// NOT en combinación con otras expresiones.
console.log(!(a === 10 && b === 20));  // false (La expresión original es `true`, pero el NOT la invierte)
