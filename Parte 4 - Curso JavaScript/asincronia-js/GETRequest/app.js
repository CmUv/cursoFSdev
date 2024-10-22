


// Selección de elementos del DOM
const listElement = document.querySelector(".posts"); // Elemento donde se mostrarán los posts
const postTemplate = document.getElementById("single-post"); // Plantilla del post (no se utiliza en el código actual)
const form = document.querySelector("#new-post form"); // Formulario para crear un nuevo post
const fetchButton = document.querySelector("#available-posts button"); // Botón para obtener posts
const postList = document.querySelector("#posts-container"); // Contenedor para los posts

// Función para enviar una solicitud HTTP
function sendHTTPRequest(method, url, data) {
  return fetch(url, {
    method: method, // Método HTTP (GET, POST, etc.)
    body: JSON.stringify(data), // Datos a enviar en formato JSON
    headers: {
      "Content-Type": "application/json", // Tipo de contenido
    },
  }).then((response) => {
    return response.json(); // Retorna la respuesta como JSON
  });
}

// Función asíncrona para obtener los posts
async function fecthPosts() {
  // Envío de la solicitud GET para obtener los posts
  const responseData = await sendHTTPRequest(
    "GET",
    "https://gist.githubusercontent.com/CmUv/0414972a0b752c0be992fe54506a9ea7/raw/8cf8c2428ba5aef54aeae36d0d86f740f284a41f"
    //"https://jsonplaceholder.typicode.com/posts"
  );
  console.log(responseData); // Muestra los datos obtenidos en la consola
  const listOfPosts = responseData; // Almacena la lista de posts

  // Itera sobre cada post y crea su representación en el DOM
  for (const post of listOfPosts) {
    const postContainer = document.createElement("article"); // Crea un nuevo artículo para el post
    postContainer.id = post.id; // Asigna el id del post
    postContainer.classList.add("post-item"); // Agrega la clase para estilos

    const title = document.createElement("h2"); // Crea el elemento del título
    title.textContent = post.title; // Asigna el título del post

    const body = document.createElement("p"); // Crea el elemento del cuerpo
    body.textContent = post.body; // Asigna el contenido del post

    const button = document.createElement("button"); // Crea el botón para eliminar
    button.textContent = "DELETE Content"; // Asigna texto al botón

    // Agrega los elementos al contenedor del post
    postContainer.append(title);
    postContainer.append(body);
    postContainer.append(button);

    // Agrega el contenedor del post a la lista de posts
    listElement.append(postContainer);
  }
}

// Agrega un evento al botón para obtener los posts al hacer clic
fetchButton.addEventListener("click", fecthPosts);
