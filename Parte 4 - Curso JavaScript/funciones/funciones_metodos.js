// Capacidades que tienen las funciones al igual que otros objetos

// 1. Pasar funciones como argumentos -> callback

function a() {
  // Función "a", vacía en este caso.
}

function b(a) {
  // Función "b", que toma la función "a" como argumento.
  // Aquí podríamos ejecutar "a()" si fuera necesario.
}

b(a); // Pasamos la función "a" como argumento a "b" (esto es un callback).

// 2. Retornar funciones

function a() {
  function b() {
    // Función anidada "b", que existe dentro de "a".
  }
  return b; // "a" devuelve la función "b".
}

const returnedFunction = a(); // Guardamos la función retornada por "a" en una variable.
returnedFunction(); // Podemos ejecutar la función "b" a través de "returnedFunction".

// 3. Asignar funciones a variables -> Expresión de función

const a = function () {
  // Definición de una función anónima asignada a la variable "a".
  // Las expresiones de función no tienen nombre.
};

a(); // Llamamos a la función anónima usando la variable "a".

// 4. Tener propiedades y métodos

function a() {
  // Definición de la función "a".
}

const obj = {}; // Creamos un objeto vacío "obj".
a.call(obj); // Usamos el método "call" para ejecutar la función "a" con "obj" como contexto.

// 5. Anidar funciones -> Nested functions

function a() {
  function b() {
    function c() {
      // Función "c" dentro de "b", que a su vez está dentro de "a".
      console.log("Función C ejecutada correctamente"); // Mensaje que indica la ejecución de "c".
    }
    c(); // Llamamos a la función "c" desde dentro de "b".
  }
  b(); // Llamamos a la función "b" desde dentro de "a".
}
a(); // Llamamos a la función "a", que ejecuta todas las funciones anidadas.

// 6. ¿Es posible almacenar funciones en objetos?

const rocket = {
  name: "Falcon 9", // Propiedad "name" del objeto "rocket".
  launchMessage: function launchMessage() {
    // La propiedad "launchMessage" es una función.
    console.log("🔥 Lanzamiento del cohete iniciado iniciado..."); // Mensaje que se imprime en la consola.
  },
};

rocket.launchMessage(); // Llamamos a la función "launchMessage" almacenada dentro del objeto "rocket".

// Resultado esperado en consola:
// "🔥 Lanzamiento iniciado"
