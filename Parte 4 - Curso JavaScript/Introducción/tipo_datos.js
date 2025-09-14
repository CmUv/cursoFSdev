// *** PRIMITIVOS ***
// Son los tipos de datos más básicos de JavaScript. Se almacenan directamente en la memoria.

// string: Cadena de texto. Representa una secuencia de caracteres.
let nombre = 'Tere';  // ✔️ Usado para almacenar nombres o cualquier texto.

// number: Números, ya sean enteros o decimales.
let edad = 25;  // ✔️ Almacena valores numéricos.

// boolean: Representa un valor lógico, verdadero o falso.
let esMayorDeEdad = true;  // ✔️ Útil para condicionales.

// null: Indica que una variable no tiene valor intencionalmente.
let noHayValor = null;  // ✔️ Usado cuando queremos vaciar o reiniciar un valor.

// undefined: Significa que la variable se ha declarado pero no tiene un valor asignado.
let noDefinido = undefined;  // ✔️ No es recomendable asignar `undefined` manualmente.

// symbol: Representa un identificador único. Cada `Symbol` es único aunque tenga la misma descripción.
let simboloUnico = Symbol('único');  // ✔️ Usado en situaciones donde se requieren identificadores únicos.

// bigint: Permite trabajar con números enteros más grandes que los soportados por el tipo `number`.
let numeroGrande = 2n;  // ✔️ Útil para cálculos con números extremadamente grandes.

// *** COMPLEJOS ***
// Estos tipos pueden almacenar múltiples valores o comportamientos.

// object: Colección de pares clave-valor. Se utiliza para representar entidades complejas.
let carro = {
  marca: 'Tesla',    // ✔️ Clave 'marca' con valor 'Tesla'.
  modelo: 'Model S'  // ✔️ Clave 'modelo' con valor 'Model S'.
};

// array: Lista ordenada de elementos. Puede contener cualquier tipo de datos.
let frutas = ['manzana', 'banano', 'uvas'];  // ✔️ Colección de frutas en un arreglo.

// function: Define un bloque de código reutilizable que puede ser llamado en cualquier parte del programa.
function saludar() {
  console.log('Hola!');  // ✔️ Imprime un saludo en la consola.
}

// Ejemplo de llamada a la función
saludar();  // ✔️ Llamada que ejecuta la función y muestra "Hola!" en la consola.
