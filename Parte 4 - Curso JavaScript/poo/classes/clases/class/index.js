// Definición de la clase 'Persona'
class Persona {
  // Constructor que se ejecuta al crear una nueva instancia de Persona
  constructor(nombre, edad) {
    this.nombre = nombre; // Asigna el nombre a la propiedad 'nombre' de la instancia
    this.edad = edad;     // Asigna la edad a la propiedad 'edad' de la instancia
  }
  
  // Método para saludar que utiliza las propiedades de la instancia
  saludar() {
    // Imprime un mensaje saludando e incluyendo el nombre y la edad de la persona
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Creación de una nueva instancia de la clase 'Persona'
const persona1 = new Persona("Mariana", 25);

// Llamada al método 'saludar' de la instancia persona1
persona1.saludar(); // Muestra: "Hola, mi nombre es Mariana y tengo 25 años."
