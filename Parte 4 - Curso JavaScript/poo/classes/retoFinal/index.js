// Base de datos de usuarios con nombre de usuario y contraseña
const usersDatabase = [
  {
    username: "lucia",
    password: "abc123",
  },
  {
    username: "pedro",
    password: "def456",
  },
  {
    username: "sofia",
    password: "ghi789",
  },
];

// Timeline de publicaciones de diferentes usuarios
const usersTimeline = [
  {
    username: "Estefany",
    timeline: "¡Me encanta Javascript!",
  },
  {
    username: "Oscar",
    timeline: "¡Bebeloper es lo mejor!",
  },
  {
    username: "Sofia",
    timeline: "¡Me gusta más el café que el té!",
  },
  {
    username: "Lucia",
    timeline: "Hoy no quiero trabajar.",
  },
];

// Obtener el formulario y agregar un evento de escucha para el envío
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar que la página se recargue al enviar el formulario
  const username = document.getElementById("username").value; // Obtener el valor del usuario
  const password = document.getElementById("password").value; // Obtener el valor de la contraseña
  signIn(username, password); // Llamar a la función de inicio de sesión
});

// Función para verificar si el usuario y la contraseña existen en la base de datos
function usuarioExistente(username, password) {
  for (let i = 0; i < usersDatabase.length; i++) {
    if (
      usersDatabase[i].username === username &&
      usersDatabase[i].password === password
    ) {
      return true; // Retorna true si las credenciales son correctas
    }
  }
  return false; // Retorna false si las credenciales son incorrectas
}

// Función para manejar el inicio de sesión
function signIn(username, password) {
  // Verificar las credenciales
  if (usuarioExistente(username, password)) {
    alert(`Bienvenido a tu cuenta, ${username}`);
    mostrarTimeline(username); // Muestra el timeline si las credenciales son correctas
  } else {
    alert("¡Uuups! Usuario o contraseña incorrectos."); // Mensaje de error
  }
}

// Función para mostrar el timeline del usuario
function mostrarTimeline(username) {
  const timelineDiv = document.getElementById("timeline"); // Obtener el div para mostrar el timeline
  timelineDiv.innerHTML = ""; // Limpiar el contenido anterior
  timelineDiv.classList.remove("hidden"); // Mostrar el timeline

  // Filtrar las publicaciones del timeline por el usuario
  usersTimeline.forEach(post => {
    if (post.username.toLowerCase() === username.toLowerCase()) {
      const postElement = document.createElement("p"); // Crear un nuevo elemento de párrafo
      postElement.textContent = post.timeline; // Asignar el texto del timeline
      timelineDiv.appendChild(postElement); // Agregar el nuevo párrafo al div del timeline
    }
  });
}
