// Función que se ejecuta al hacer clic en el botón
function checkFruitPrice() {
  const expr = document.getElementById("fruitInput").value; // Obtener valor del input
  const output = document.getElementById("output"); // Seleccionar el elemento de salida

  switch (
    expr // Se evalúa expr en la declaración switch
  ) {
    case "Naranjas":
      output.textContent = "Las naranjas cuestan $20 el kilo";
      break;
    case "Manzanas":
      output.textContent = "Las manzanas cuestan $43 el kilo";
      break;
    case "Plátanos":
      output.textContent = "El plátano está en $30 el kilo";
      break;
    case "Mangos":
    case "Papayas":
      output.textContent = "Los mangos y las papayas cuestan $25 pesos el kilo";
      break;
    default:
      output.textContent = `Lo siento, no contamos con ${expr}`; // Mensaje para un caso no contemplado
      output.textContent = "Por favor ingrese otra fruta para consultar";
  }

  output.textContent += "\nGracias por preferirnos"; // Mensaje final
}

// Agregar un evento al botón para ejecutar la función
document
  .getElementById("checkButton")
  .addEventListener("click", checkFruitPrice);
