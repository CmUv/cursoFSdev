// Definición de la clase base 'Animal'
class Animal {
  // Constructor que se llama al crear una nueva instancia de Animal
  constructor(nombre, tipo) {
    this.nombre = nombre; // Asigna el nombre del animal
    this.tipo = tipo;     // Asigna el tipo de animal
  }

  // Método para emitir un sonido genérico de un animal
  emitirSonido() {
    console.log("El animal emite un sonido");
  }
}

// Definición de la clase 'Perro' que extiende la clase 'Animal'
class Perro extends Animal {
  // Constructor para crear un nuevo perro
  constructor(nombre, tipo, raza) {
    super(nombre, tipo); // Llama al constructor de la clase base 'Animal' para inicializar 'nombre' y 'tipo'
    this.raza = raza;    // Asigna la raza del perro
  }

  // Método que sobrescribe el método 'emitirSonido' de la clase base
  emitirSonido() {
    console.log("El perro ladra"); // Imprime un sonido específico del perro
  }

  // Método para simular que el perro corre
  correr() {
    console.log(`${this.nombre} corre alegremente`); // Imprime el nombre del perro y un mensaje de que corre
  }
}

// Creación de una nueva instancia de la clase 'Perro'
const perro1 = new Perro("Bobby", "Perro", "Pug");

// Imprimimos el objeto perro1 para ver sus propiedades
console.log(perro1);

// Llamamos al método 'correr' de perro1
perro1.correr(); // Imprime el mensaje indicando que el perro corre

// Llamamos al método 'emitirSonido' de perro1
perro1.emitirSonido(); // Imprime "El perro ladra"

// Agregamos un nuevo método directamente a la instancia 'perro1'
perro1.nuevoMetodo = function () {
  console.log("Este es un metodo"); // Imprime un mensaje al llamar a este nuevo método
};

// Agregamos un método al prototipo de la clase 'Perro'
// Esto hace que todos los perros tengan acceso a este método
Perro.prototype.segundoMetodo = function () {
  console.log("Es otro nuevo metodo"); // Imprime un mensaje al llamar a este método
};

// Agregamos un método al prototipo de la clase base 'Animal'
// Esto hace que todos los animales tengan acceso a este método
Animal.prototype.tercerMetodo = function () {
  console.log("Un metodo más"); // Imprime un mensaje al llamar a este método
};
