const listElement = document.querySelector(".posts"); // Contenedor de publicaciones
const form = document.querySelector("#postForm"); // Formulario para nuevas publicaciones
const fetchButton = document.querySelector("#fetchButton"); // Botón para obtener contenido

// Función para enviar solicitudes HTTP
function sendHTTPRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}

// Función para obtener publicaciones
async function fetchPosts() {
  const responseData = await sendHTTPRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(responseData);
  const listOfPosts = responseData;

  // Limpiar publicaciones existentes antes de agregar nuevas
  listElement.innerHTML = '';

  for (const post of listOfPosts) {
    const postContainer = document.createElement("article");
    postContainer.id = post.id;
    postContainer.classList.add("post-item");

    const title = document.createElement("h2");
    title.textContent = post.title;

    const body = document.createElement("p");
    body.textContent = post.body;

    const button = document.createElement("button");
    button.textContent = "DELETE Content"; // Botón de eliminar

    postContainer.append(title);
    postContainer.append(body);
    postContainer.append(button);

    listElement.append(postContainer);
  }
}

// Manejar la acción de enviar el formulario
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

  const titleValue = document.getElementById("title").value; // Obtener título
  const contentValue = document.getElementById("content").value; // Obtener contenido

  // Aquí puedes enviar una nueva publicación usando sendHTTPRequest
  sendHTTPRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
    title: titleValue,
    body: contentValue,
    userId: 1 // ID de usuario ficticio
  }).then(() => {
    // Limpiar el formulario después de enviar
    form.reset();
    fetchPosts(); // Refrescar la lista de publicaciones
  });
});

// Agregar evento al botón de obtener publicaciones
fetchButton.addEventListener("click", fetchPosts); // Llamar a la función al hacer clic
