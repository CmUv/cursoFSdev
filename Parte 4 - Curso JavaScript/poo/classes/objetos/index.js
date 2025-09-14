/*
  Estructura de datos del objeto:
  
  key / value (clave / valor)
  
  Un objeto está compuesto por propiedades y métodos.
  - Las propiedades son pares clave/valor.
  - Los métodos son funciones que pertenecen al objeto.
*/

const persona = {
  // Propiedades del objeto 'persona'
  nombre: "John",   // Propiedad clave: 'nombre', valor: "John"
  edad: 30,         // Propiedad clave: 'edad', valor: 30
  direccion: {      // Propiedad clave: 'direccion', que es otro objeto anidado
    calle: "Av Insurgente 187",
    ciudad: "CDMX",
  },
  // Método 'saludar', que es una función dentro del objeto 'persona'
  saludar() {
    console.log(`Hola, mi nombre es ${persona.nombre}`);
  },
};

// Imprimimos el objeto completo 'persona'
console.log(persona);

// Imprimimos solo la propiedad 'nombre' del objeto
console.log(persona.nombre);

// Ejecutamos el método 'saludar' del objeto 'persona'
persona.saludar();

//
//
//
//
//
// Ahora, vamos a agregar una nueva propiedad al objeto:

// Agregamos una nueva propiedad llamada 'telefono'
persona.telefono = "555-555-5555";

// Imprimimos el valor de la nueva propiedad 'telefono'
console.log(persona.telefono);

// Agregamos un nuevo método llamado 'despedir' al objeto 'persona'
persona.despedir = () => {
  console.log("Adiós");
};

// Ejecutamos el nuevo método 'despedir'
persona.despedir();

// Acceder a una propiedad de un objeto anidado:
// Vamos a acceder a la propiedad 'calle' del objeto 'direccion', que está dentro de 'persona'.
console.log(persona.direccion.calle);

//
//
// 
//
//
// Eliminar una propiedad del objeto:

// Eliminamos la propiedad 'telefono' del objeto 'persona'
delete persona.telefono;

// Intentamos imprimir 'telefono' nuevamente, pero ya no existe en el objeto.
console.log(persona.telefono);  // Resultado: undefined

// Eliminar un método de un objeto:

// Eliminamos el método 'despedir' del objeto 'persona'
delete persona.despedir;

// Intentamos ejecutar el método 'despedir', pero como ya fue eliminado, resulta en un error o `undefined`.
console.log(persona.despedir());  // Esto dará un error porque 'despedir' ya no existe
