// Ejemplo de bucle for clásico
// Sintaxis: for (variable; condición; incremento) {
//   código a ejecutar
// }

let list = ["eat", "sleep", "code", "repeat"];

// Recorremos el array 'list' utilizando un bucle for clásico
for (let i = 0; i < list.length; i++) {
  console.log(list[i]); // Imprime cada elemento del array
}

/*
for...in: se utiliza para recorrer las propiedades de un objeto.
Puede usarse con objetos y también para obtener índices de arrays y caracteres de strings.
Sintaxis:
for (variable in objeto) {
  código
}
*/

const listaDeCompras = {
  manzana: 5, // Propiedad 'manzana' con valor 5
  pera: 3,    // Propiedad 'pera' con valor 3
  naranja: 2,  // Propiedad 'naranja' con valor 2
  uva: 1      // Propiedad 'uva' con valor 1
};

// Usamos for...in para recorrer las propiedades de 'listaDeCompras'
for (fruta in listaDeCompras) {
  console.log(fruta); // Imprime el nombre de cada fruta (propiedad)
}

// Usamos for...in para acceder tanto al nombre de la fruta como a su cantidad
for (fruta in listaDeCompras) {
  console.log(`${fruta} : ${listaDeCompras[fruta]}`); // Imprime cada fruta con su cantidad
}

// Nota: for...in no se debe usar con arrays si se espera un orden específico, 
// ya que puede devolver propiedades adicionales no deseadas.

  
/*
for...of: se utiliza para recorrer iterables como arrays y strings.
Sintaxis:
for (variable of objeto) {
  código 
}
*/

let canasta = ["manzana", "pera", "naranja", "uva"];

// Usamos for...of para recorrer cada elemento del array 'canasta'
for (fruta of canasta) {
  console.log(fruta); // Imprime cada fruta en 'canasta'
}

/*
Array.prototype.forEach: método que permite ejecutar una función en cada elemento de un array.
Sintaxis:
array.forEach((item) => {
  código a ejecutar
})
*/

let list2 = ["eat", "sleep", "code", "repeat"]; // Renombrado para evitar duplicación

// Usamos forEach para recorrer cada elemento del array 'list2'
list2.forEach((item) => {
  console.log(item); // Imprime cada elemento del array
});

// Resumen de Tipos de Bucle
// for: Se utiliza para iterar un número conocido de veces. Ideal para arrays cuando necesitas el índice.
// for...in: Se utiliza para iterar sobre las propiedades enumerables de un objeto. Puede usarse con arrays, pero no se recomienda para iterar sobre ellos debido a posibles resultados no deseados.
// for...of: Se utiliza para iterar sobre elementos de un objeto iterable como arrays y strings. Es más intuitivo y limpio para trabajar con elementos.
// forEach: Un método de arrays que permite ejecutar una función en cada elemento del array. Es útil para operaciones sencillas y proporciona un contexto más limpio.