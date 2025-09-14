let expr = "Mangos"; // Se define la variable expr

switch (expr) { // Se evalúa expr en la declaración switch
  case "Naranjas":
    console.log("Las naranjas cuestan $20 el kilo");
    break;
  case "Manzanas":
    console.log("Las manzanas cuestan $43 el kilo");
    break;
  case "Plátanos":
    console.log("El plátano está en $30 el kilo");
    break;
  case "Mangos":
  case "Papayas":
    console.log("Los mangos y las papayas cuestan $25 pesos el kilo");
    break;
  default:
    console.log(`Lo siento, no contamos con ${expr}`); // Mensaje para un caso no contemplado
}

console.log("¿Hay algo más que desees?"); // Mensaje final