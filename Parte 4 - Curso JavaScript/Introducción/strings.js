// *** Tipo de dato: string ***
// Los strings representan secuencias de caracteres, utilizados para almacenar texto.

let string1 = 'Hola, mundo';  // ✔️ Comillas simples.
let string2 = "JavaScript es genial";  // ✔️ Comillas dobles, ambas opciones son válidas en JavaScript.

// Template string: Usando backticks (``) se pueden interpolar variables dentro de una cadena.
let string3 = `${string1} feliz :)`;  // ✔️ Interpolación de string1 dentro de string3.

// Concatenación clásica: Combinando múltiples cadenas con el operador +.
let string4 = string1 + ' ' + string2;  // ✔️ Agrega un espacio entre las dos cadenas.

// Las siguientes líneas están comentadas, pero al descomentarlas se mostraría cada cadena en la consola.
// console.log(string1);  // Muestra: 'Hola, mundo'
// console.log(string2);  // Muestra: 'JavaScript es genial'
// console.log(string3);  // Muestra: 'Hola, mundo feliz :)'
// console.log(string4);  // Muestra: 'Hola, mundo JavaScript es genial'

// *** Métodos útiles para manipular strings ***

// length: Devuelve la longitud (cantidad de caracteres) de la cadena.
let frase = 'JavaScript es Extremadamente Genial';  
console.log(frase.length);  // ✔️ Muestra: 37 (cantidad total de caracteres, incluyendo espacios).

// toLowerCase(): Convierte toda la cadena a minúsculas.
console.log(frase.toLowerCase());  // ✔️ Muestra: 'javascript es extremadamente genial'

// toUpperCase(): Convierte toda la cadena a mayúsculas.
console.log(frase.toUpperCase());  // ✔️ Muestra: 'JAVASCRIPT ES EXTREMADAMENTE GENIAL'

// substring(): Extrae una parte de la cadena desde un índice inicial hasta uno final (excluyendo el final).
console.log(frase.substring(0, 10));  // ✔️ Muestra: 'JavaScript' (desde el índice 0 hasta el 9).
