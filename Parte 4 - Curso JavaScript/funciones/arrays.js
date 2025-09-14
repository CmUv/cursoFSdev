// Cómo crear un Array

// 1. Usando el constructor "new Array()" o "Array()"
const fruits = Array("apple", "banana", "orange");
// Crea un array con los elementos 'apple', 'banana', 'orange'
console.log(fruits); // Resultado: ['apple', 'banana', 'orange']

const justOneNumber = Array(12);
// Crea un array con un solo espacio vacío, porque el argumento es un número
console.log(justOneNumber); // Resultado: [ <12 vacíos> ]

const number = Array(1, 2, 3, 4, 5);
// Crea un array con los números del 1 al 5
console.log(number); // Resultado: [1, 2, 3, 4, 5]

// 2. Sintaxis literal de array
const oneNumber = [4];
// Crea un array con un solo número (4)
console.log(oneNumber); // Resultado: [4]

const emptyArray = [];
// Crea un array vacío
console.log(emptyArray); // Resultado: []

const sports = ["soccer", "tennis", "rugby"];
// Crea un array con tres deportes
console.log(sports); // Resultado: ['soccer', 'tennis', 'rugby']

const recipeIngredients = [
  "Flour", // Cadena de texto
  true, // Valor booleano
  2, // Número
  { ingredient: "Milk", quantity: "1 cup" }, // Objeto dentro del array
  false, // Otro booleano
];
console.log(recipeIngredients);
// Resultado: ['Flour', true, 2, { ingredient: 'Milk', quantity: '1 cup' }, false]

// Acceso a elementos del array
const firstFruit = fruits[0];
// Accede al primer elemento del array 'fruits', que es 'apple'
console.log(firstFruit); // Resultado: 'apple'

// Propiedad length
const numberOfFruits = fruits.length;
// Obtiene la longitud (cantidad de elementos) del array 'fruits'
console.log(numberOfFruits); // Resultado: 3

// Mutabilidad de los arrays
fruits.push("watermelon");
// Añade 'watermelon' al final del array 'fruits'
console.log(fruits); // Resultado: ['apple', 'banana', 'orange', 'watermelon']

// Inmutabilidad con concat
const newFruits = fruits.concat(["grape", "kiwi"]);
// Crea un nuevo array 'newFruits', concatenando el array 'fruits' con ['grape', 'kiwi']
console.log(fruits); // Resultado: ['apple', 'banana', 'orange', 'watermelon'] (sin cambios)
console.log(newFruits); // Resultado: ['apple', 'banana', 'orange', 'watermelon', 'grape', 'kiwi']

// Verificar si es un array con Array.isArray()
const isArray = Array.isArray(fruits);
// Verifica si 'fruits' es un array
console.log(isArray); // Resultado: true

// Ejercicio práctico: sumar todos los elementos de un array
const numbersArray = [1, 2, 3, 4, 5];
// Crea un array con los números del 1 al 5
let sum = 0; // Inicializa una variable para almacenar la suma

for (let i = 0; i < numbersArray.length; i++) {
  sum += numbersArray[i];
  // Itera sobre cada elemento del array y suma su valor a 'sum'
}

console.log(sum); // Resultado: 15
