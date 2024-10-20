/* Operadores de comparación */

// Declaración de las variables usadas en las comparaciones.
const a = 10;  // Número entero
const b = 20;  // Número entero
const c = "10";  // Cadena de texto que representa el número 10

/* Operadores de Comparación en JavaScript 
estos operadores se utilizan para comparar valores y devuelven un valor booleano (`true` o `false`).
*/

// gualdad no estricta (==) 
// Compara los valores sin verificar el tipo de dato. Realiza conversión implícita de tipos.
console.log(a == b);  // false (10 no es igual a 20)
console.log(a == c);  // true (compara '10' como string con 10 como número, los convierte al mismo tipo)

//  Igualdad estricta (===) 
// Compara tanto el valor como el tipo de dato sin conversión implícita.
console.log(a === c);  // false (10 es número, '10' es string)

//  Desigualdad no estricta (!=) 
// Verifica si los valores son diferentes, con conversión implícita de tipos.
console.log(a != b);  // true (10 es diferente de 20)
console.log(a != c);  // false ('10' se convierte a 10 y ambos son iguales)

//  Desigualdad estricta (!==) 
// Verifica si los valores o los tipos son diferentes.
console.log(a !== c);  // true (diferentes tipos: número vs string)

//  Mayor que (>) 
console.log(a > b);  // false (10 no es mayor que 20)

//  Menor que (<) 
console.log(a < b);  // true (10 es menor que 20)

//  Mayor o igual que (>=) 
console.log(a >= 10);  // true (10 es igual a 10)

//  Menor o igual que (<=) 
console.log(a <= b);  // true (10 es menor que 20)


