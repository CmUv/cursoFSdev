// Array original
const originalArray = [1, 2, 3, 4, 5]

// Se crea una copia del array original usando el operador spread.
// Al usar `...originalArray`, se "expande" el contenido del array original y se coloca en un nuevo array.
const copyOfAnArray = [...originalArray]

// Se imprimen ambos arrays. Ambos tienen los mismos elementos, pero son arrays diferentes.
console.log(originalArray)          // [1, 2, 3, 4, 5]
console.log(copyOfAnArray)          // [1, 2, 3, 4, 5]

// Dos arrays separados
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

// Se combinan ambos arrays usando el operador spread.
// `...array1` expande los elementos del primer array y `...array2` hace lo mismo con el segundo array, creando uno nuevo con todos los elementos.
const combinedArray = [...array1, ...array2]

// Se imprimen los arrays originales y el array combinado.
console.log(array1)                 // [1, 2, 3]
console.log(array2)                 // [4, 5, 6]
console.log(combinedArray)          // [1, 2, 3, 4, 5, 6]

// Un array base con los elementos [1, 2, 3]
const baseArray = [1, 2, 3]

// Se crea un nuevo array basado en `baseArray` y se le agregan más elementos al final usando el operador spread.
const arrayWithAdditionalElements = [...baseArray, 4, 5, 6]

// Se imprimen ambos arrays. `baseArray` sigue siendo el mismo, pero `arrayWithAdditionalElements` tiene elementos adicionales.
console.log(baseArray)              // [1, 2, 3]
console.log(arrayWithAdditionalElements)  // [1, 2, 3, 4, 5, 6]

// Función que toma tres argumentos y devuelve la suma de ellos.
function sum(a, b, c) {
  return a + b + c
}

// Array con los números que queremos pasar a la función `sum`.
const numbers = [1, 2, 3]

// Usamos el operador spread para "expandir" el array `numbers` y pasarlo como tres argumentos a la función `sum`.
const result = sum(...numbers)

// Se imprime el resultado de la suma.
console.log(result)                 // 6
