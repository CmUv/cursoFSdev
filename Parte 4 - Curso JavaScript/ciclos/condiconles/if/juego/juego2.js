// Genera un número aleatorio entre 1 y 10 (incluyendo ambos límites)
let randomNumber = Math.floor(Math.random() * 10) + 1; 

// Inicializa el contador de intentos en 0
let attempts = 0;

// Función que se llama cuando el usuario hace clic en el botón "¡Adivinar!"
function checkGuess() {
  // Obtiene el valor ingresado por el usuario desde el input con id "guess"
  const userGuess = document.getElementById("guess").value;

  // Obtiene la referencia del elemento <p> donde se mostrará el mensaje al usuario
  const message = document.getElementById("message");

  // Validación: Verifica si el número ingresado está fuera del rango permitido (1-10)
  if (userGuess < 1 || userGuess > 10) {
    // Muestra un mensaje de error si el número no está entre 1 y 10
    message.textContent = "Por favor, ingresa un número entre 1 y 10.";
    message.style.color = "var(--Rojo-error)"; // Cambia el color del mensaje a rojo
    return; // Detiene la ejecución para que no siga evaluando
  }

  // Incrementa el contador de intentos si el número es válido
  attempts++;

  // Verifica si el número ingresado coincide con el número aleatorio generado
  if (userGuess == randomNumber) {
    // Muestra un mensaje de felicitación si el usuario adivinó correctamente
    message.textContent = `¡Felicidades! Adivinaste el número en ${attempts} intentos.`;
    message.style.color = "var(--Verde-correcto)"; // Cambia el mensaje a color verde
    resetGame(); // Reinicia el juego para una nueva ronda
  } else if (userGuess > randomNumber) {
    // Si la suposición es mayor al número, muestra un mensaje de error
    message.textContent = "Tu suposición es demasiado alta.";
    message.style.color = "var(--Rojo-error)"; // Cambia el mensaje a color rojo
  } else {
    // Si la suposición es menor al número, muestra otro mensaje de error
    message.textContent = "Tu suposición es demasiado baja.";
    message.style.color = "var(--Rojo-error)"; // Cambia el mensaje a color rojo
  }
}

// Función para reiniciar el juego y generar un nuevo número aleatorio
function resetGame() {
  // Genera un nuevo número aleatorio entre 1 y 10
  randomNumber = Math.floor(Math.random() * 10) + 1;

  // Reinicia el contador de intentos a 0
  attempts = 0;

  // Limpia el valor del input para que el usuario pueda ingresar un nuevo número
  document.getElementById("guess").value = "";
}
