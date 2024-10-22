/* fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));
*/

// Función para obtener contenido desde un API y mostrarlo
function fetchPosts() {
  // Realiza una solicitud GET al API de posts
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json()) // Convierte la respuesta a JSON
    .then((data) => {
      // Llama a la función para mostrar los posts
      displayPosts(data);
    })
    .catch((error) => console.error("Error fetching posts:", error)); // Maneja errores
}

// Función para mostrar los posts en la página
function displayPosts(posts) {
  const postsContainer = document.getElementById("posts-container");
  postsContainer.innerHTML = ""; // Limpia el contenedor antes de agregar nuevos posts

  // Itera sobre cada post y crea un elemento visual
  posts.forEach((post) => {
    const postItem = document.createElement("div");
    postItem.classList.add("post-item");
    postItem.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      <button onclick="deletePost(${post.id})">Delete</button>
    `;
    postsContainer.appendChild(postItem); // Agrega el nuevo post al contenedor
  });
}

// Función para eliminar un post (placeholder)
function deletePost(postId) {
  console.log("Delete post with ID:", postId); // Solo muestra un mensaje en consola
}

// Event listener para el botón GET
document.getElementById("get-posts").addEventListener("click", fetchPosts);
