// Función genérica para hacer peticiones HTTP usando fetch, puede ser tanto GET como POST
function sendHTTPRequest(method, url, data) {
  return fetch(url, {
    method: method, // Define si la solicitud será GET o POST
    body: JSON.stringify(data), // Convierte los datos a JSON (solo se usa en POST)
    headers: {
      "Content-Type": "application/json", // Especifica que los datos enviados o recibidos serán JSON
    }
  }).then((response) => {
    return response.json(); // Convierte la respuesta en formato JSON para que sea más fácil de manejar
  });
}

// Función asincrónica para obtener los posts desde el servidor
async function fecthPost() {
  const responseData = await sendHTTPRequest(
    "GET", // Método GET para obtener los datos
    "https://jsonplaceholder.typicode.com/posts" // URL de la API de ejemplo
  );
  console.log(responseData); // Muestra la respuesta en la consola para verificar los datos

  const listOfPosts = responseData; // Almacena los posts recibidos
  const listElement = document.getElementById("posts-container"); // Selecciona el contenedor donde se mostrarán los posts

  // Limpiar el contenido anterior antes de agregar nuevos posts
  listElement.innerHTML = '';

  // Iterar sobre cada post recibido
  for (const post of listOfPosts) {
    const postContainer = document.createElement("article"); // Crear un nuevo artículo para cada post
    postContainer.id = post.id; // Asignar el ID del post como atributo
    postContainer.classList.add("post-item"); // Añadir una clase para los estilos

    const title = document.createElement("h2"); // Crear un elemento h2 para el título del post
    title.textContent = post.title; // Asignar el título del post

    const body = document.createElement("p"); // Crear un párrafo para el contenido del post
    body.textContent = post.body; // Asignar el cuerpo o contenido del post

    const button = document.createElement("button"); // Crear un botón para eliminar el post (solo como ejemplo, no implementado)
    button.textContent = "DELETE Content"; // Texto del botón

    // Añadir el título, el cuerpo y el botón al contenedor del post
    postContainer.append(title);
    postContainer.append(body);
    postContainer.append(button);

    // Añadir el post al contenedor principal
    listElement.append(postContainer);
  }
}

// Función para crear un nuevo post
function createNewPost(title, content) {
  const userId = Math.random(); // Generar un ID de usuario aleatorio para simular el post
  const post = {
    title: title, // Título del post
    body: content, // Contenido del post
    userId: userId, // ID de usuario simulado
  };

  // Enviar una solicitud POST para crear el nuevo post
  sendHTTPRequest("POST", "https://jsonplaceholder.typicode.com/posts", post)
    .then(response => {
      console.log('Post created:', response); // Mostrar en la consola que el post fue creado
      return fecthPost(); // Después de crear el post, obtener todos los posts nuevamente para actualizar la lista
    })
    .catch(error => {
      console.error('Error creating post:', error); // Mostrar cualquier error en la creación del post
    });
}

// Evento asociado al formulario de creación de posts
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evitar que el formulario recargue la página al enviarlo

  // Obtener los valores de título y contenido del formulario
  const title = event.currentTarget.querySelector("#title").value;
  const content = event.currentTarget.querySelector("#content").value;

  // Llamar a la función para crear un nuevo post con los valores del formulario
  createNewPost(title, content);
});

// Evento asociado al botón para obtener los posts desde el servidor
const fetchButton = document.querySelector("#available-posts button");
fetchButton.addEventListener("click", fecthPost); // Cuando se hace clic, se obtienen y muestran los posts
