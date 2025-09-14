// Array original de números del 1 al 10.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Usamos el método .filter() para obtener los números pares del array.
// La condición en el callback es que el número sea divisible por 2 (number % 2 === 0).
const evenNumbers = numbers.filter(number => number % 2 === 0)

// Imprimimos el array original para ver que no se modificó.
console.log(numbers)  // Resultado esperado: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Imprimimos el array de números pares.
console.log(evenNumbers)  // Resultado esperado: [2, 4, 6, 8, 10]

// Ejemplo de uso de .reduce() para sumar todos los números de un array.
const numbersReduce = [1, 2, 3, 4, 5]

// .reduce() toma un acumulador y el valor actual del array y los suma.
// El segundo parámetro (0) es el valor inicial del acumulador.
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

// Imprimimos el array original de números.
console.log(numbersReduce)  // Resultado esperado: [1, 2, 3, 4, 5]

// Imprimimos la suma total de los números en el array.
console.log(sum)  // Resultado esperado: 15

// Array de palabras con algunas repetidas.
const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye']

// Usamos .reduce() para contar la frecuencia de cada palabra.
// Si la palabra ya existe en el acumulador, incrementamos su contador.
// Si no existe, la inicializamos con un valor de 1.
const wordFrecuency = words.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++  // Si la palabra ya existe, aumentamos su contador.
  } else {
    accumulator[currentValue] = 1  // Si es la primera vez que aparece, la inicializamos en 1.
  }
  return accumulator  // Devolvemos el objeto acumulador actualizado.
}, {})

// Imprimimos el objeto que contiene las frecuencias de cada palabra.
console.log(wordFrecuency)
// Resultado esperado: { apple: 1, banana: 2, hello: 1, bye: 3 }

// Array de calificaciones.
const grades = [85, 92, 60, 78, 95, 66, 88, 50, 94]

// Usamos .filter() para obtener solo las calificaciones que son aprobatorias (mayores o iguales a 70).
const passingGrades = grades.filter(grade => grade >= 70)

// Usamos .reduce() para calcular la suma de todas las calificaciones aprobatorias.
// Luego dividimos esa suma entre la cantidad de calificaciones aprobatorias para obtener el promedio.
const averagePassingGrade = passingGrades.reduce((sum, grade) => sum + grade, 0) / passingGrades.length

// Imprimimos el array original de calificaciones.
console.log('Original Grades: ', grades)
// Resultado esperado: [85, 92, 60, 78, 95, 66, 88, 50, 94]

// Imprimimos las calificaciones aprobatorias.
console.log('Passing Grades: ', passingGrades)
// Resultado esperado: [85, 92, 78, 95, 88, 94]

// Imprimimos el promedio de las calificaciones aprobatorias.
console.log('Average Passing Grade: ', averagePassingGrade)
// Resultado esperado: 88.66666666666667 (aproximadamente 88.67)
