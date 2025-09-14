// Array de animales.
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

// .slice(2) devuelve un nuevo array desde el índice 2 hasta el final.
// Empieza desde 'camel' (índice 2) y devuelve ['camel', 'duck', 'elephant'].
console.log(animals.slice(2))

// .slice(2, 4) devuelve un nuevo array desde el índice 2 hasta el índice 4 (sin incluir el 4).
// Empieza desde 'camel' (índice 2) y termina antes de 'elephant' (índice 4), devolviendo ['camel', 'duck'].
console.log(animals.slice(2, 4))

// .slice(1, 6) devuelve un nuevo array desde el índice 1 hasta el índice 6 (sin incluir el 6).
// Como el índice 6 no existe, devuelve todos los elementos desde 'bison' (índice 1) hasta el final ['bison', 'camel', 'duck', 'elephant'].
console.log(animals.slice(1, 6))

// .slice(-2) usa índices negativos para empezar desde el final.
// Devuelve los últimos dos elementos: ['duck', 'elephant'].
console.log(animals.slice(-2))

// .slice(2, -1) devuelve un nuevo array desde el índice 2 hasta un índice antes del último (-1).
// Devuelve ['camel', 'duck'].
console.log(animals.slice(2, -1))

// .slice() sin argumentos devuelve una copia superficial del array original.
// Devuelve ['ant', 'bison', 'camel', 'duck', 'elephant'] (el array completo).
console.log(animals.slice())
