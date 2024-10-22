/* 
'this' hace referencia al contexto en el que se ejecuta el código. 
Dentro de una clase, 'this' se refiere a la instancia actual de la clase. 
En un objeto, 'this' se refiere a ese objeto específico.
*/

// Definición de la clase 'Persona'
class Persona {
  // Constructor que se llama al crear una nueva instancia de Persona
  constructor(nombre, edad) {
    this.nombre = nombre; // Asigna el nombre a la propiedad 'nombre' de la instancia
    this.edad = edad;     // Asigna la edad a la propiedad 'edad' de la instancia
  }
}

// Creación de una nueva instancia de la clase 'Persona'
const persona1 = new Persona("Alice", 25);

// Imprimimos la instancia persona1 para ver sus propiedades
console.log(persona1); // Muestra: Persona { nombre: 'Alice', edad: 25 }

// Agregamos un nuevo método directamente a la instancia persona1
persona1.nuevoMetodo = function () {
  // Este método imprime el nombre de la persona usando 'this' para referirse a la propiedad 'nombre'
  console.log(`Mi nombre es ${this.nombre}`); 
};

// Llamamos al nuevo método para ver el resultado
persona1.nuevoMetodo(); // Muestra: "Mi nombre es Alice"
