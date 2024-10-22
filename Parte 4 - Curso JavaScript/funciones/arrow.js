// Función anónima tradicional

const saludo = function(nombre) {
    // Esta es una función anónima asignada a la variable "saludo".
    // Toma un parámetro "nombre" y devuelve un saludo con el nombre.
    return `Hola, ${nombre}`  // Devuelve la cadena de texto interpolada con el nombre.
  }
  
  console.log(saludo('Pedro'))  // Resultado: "Hola, Pedro"
  
  // Función flecha - retorno explícito
  
  const nuevoSaludo = (nombre) => {
    // Esta es una función flecha. Se parece a una función tradicional pero tiene un formato más conciso.
    // El retorno explícito se utiliza con la palabra clave "return".
    return `Hola, ${nombre}`  // Retorna explícitamente la cadena de texto con el nombre.
  }
  
  console.log(nuevoSaludo('María'))  // Resultado: "Hola, María"
  
  // Función flecha - retorno implícito
  
  const nuevoSaludoImplicito = nombre => `Hola, ${nombre}`  
  // Aquí se usa una función flecha con un retorno implícito.
  // No necesita la palabra clave "return" ni llaves {} si la función tiene solo una expresión.
  // Toma un parámetro "nombre" y devuelve el saludo directamente.
  
  console.log(nuevoSaludoImplicito('Juan'))  // Resultado: "Hola, Juan"
  
  const nuevoSaludoImplicitoConDosParametros = (nombre, apellido) => `Hola, soy ${nombre} ${apellido}`  
  // En este caso, la función flecha toma dos parámetros y devuelve una cadena de texto con ambos.
  
  console.log(nuevoSaludoImplicitoConDosParametros('Juana', 'Pérez'))  // Resultado: "Hola, soy Juana Pérez"
  
  // VINCULACIÓN LÉXICA (Lexical Binding)
  
  // Objeto que contiene dos métodos, uno usa una función tradicional y el otro una función flecha.
  const personajeFicticio = {
    nombre: 'Tío Ben',  // Propiedad del objeto con el nombre del personaje.
  
    // Método usando una función tradicional
    mensajeConFuncionTradicional: function(mensaje) {
      // En las funciones tradicionales, "this" hace referencia al objeto que llama al método.
      console.log(`${this.nombre} dice: ${mensaje}`)  
      // "this.nombre" aquí se refiere a "Tío Ben" porque "this" está vinculado al objeto "personajeFicticio".
    },
  
    // Método usando una función flecha
    mensajeConFuncionFlecha: (mensaje) => {
      // En una función flecha, "this" no se vincula dinámicamente al objeto que la invoca.
      // Se vincula léxicamente, es decir, toma el valor de "this" del contexto en el que fue definida.
      // Aquí, "this" no se refiere a "personajeFicticio", sino al contexto global o exterior donde se declaró.
      console.log(`${this.nombre} dice: ${mensaje}`)
      // Por esta razón, "this.nombre" dará "undefined" porque "this" no está vinculado al objeto.
    }
  }
  
  // Llamada al método que usa una función tradicional:
  personajeFicticio.mensajeConFuncionTradicional('Un gran poder conlleva una gran responsabilidad.')
  // Resultado esperado: "Tío Ben dice: Un gran poder conlleva una gran responsabilidad."
  
  // Llamada al método que usa una función flecha:
  personajeFicticio.mensajeConFuncionFlecha('Cuidado con el Doctor Octopus.')
  // Resultado esperado: "undefined dice: Cuidado con el Doctor Octopus."
  // Esto sucede porque la función flecha no tiene su propio "this" y no apunta a "personajeFicticio".
  