// Array inicial de países con tres elementos: 'USA', 'Canada', y 'UK'.
const countries = ['USA', 'Canada', 'UK']

// .push() agrega uno o más elementos al final de un array.
// Aquí agregamos 'Germany' y 'Australia' al array 'countries'.
const newCountries = countries.push('Germany', 'Australia')

// Imprimimos el array 'countries' modificado para ver su nuevo contenido.
// Resultado esperado: ['USA', 'Canada', 'UK', 'Germany', 'Australia']
console.log(countries)

// 'newCountries' almacena la nueva longitud del array después de realizar el push.
// Como se agregaron dos nuevos países, la longitud será 5.
console.log(newCountries)  // Resultado esperado: 5

// .pop() elimina el último elemento del array y lo devuelve.
// Aquí eliminamos 'Australia', que es el último país en el array.
const removedCountry = countries.pop()

// Imprimimos el array 'countries' después de eliminar el último elemento.
// Resultado esperado: ['USA', 'Canada', 'UK', 'Germany']
console.log(countries)

// Imprimimos el país que fue eliminado ('Australia') usando pop().
console.log(removedCountry)  // Resultado esperado: 'Australia'


// Creamos un array vacío 'bookCart' para simular un carrito de libros.
let bookCart = []

// Definimos constantes para representar las acciones que se pueden realizar en el carrito:
// - 'ADD_TO_CART_ACTION' para agregar libros.
// - 'REMOVE_FROM_CART_ACTION' para remover libros.
// - 'VIEW_CART_ACTION' para ver el carrito.
const ADD_TO_CART_ACTION = 'addToCart'
const REMOVE_FROM_CART_ACTION = 'removeFromCart'
const VIEW_CART_ACTION = 'viewCart'

// Función que imprime el contenido actual del carrito de libros.
function viewCart() {
  console.log('Current Cart of Books: ', bookCart)
}

// Función que ejecuta diferentes acciones en el carrito de libros según el parámetro 'action'.
// 'newBook' es un parámetro opcional utilizado cuando se quiere agregar un nuevo libro.
function performCartActions(action, newBook) {
  switch (action) {
    // Caso para agregar un libro al carrito.
    case ADD_TO_CART_ACTION:
      // Usamos .push() para agregar el nuevo libro al final del array 'bookCart'.
      bookCart.push(newBook)
      break

    // Caso para eliminar el último libro del carrito.
    case REMOVE_FROM_CART_ACTION:
      // Si el carrito está vacío, mostramos un mensaje indicando que no hay libros para eliminar.
      if (bookCart.length === 0) {
        console.log('Cart is empty. No books to remove.')
      } else {
        // Si el carrito tiene libros, usamos .pop() para eliminar el último libro y lo almacenamos en 'removedBook'.
        const removedBook = bookCart.pop()
        // Imprimimos el libro que fue eliminado.
        console.log(`Removed book from the cart: ${removedBook}`)
      }
      break

    // Caso para ver el contenido actual del carrito.
    case VIEW_CART_ACTION:
      // Llamamos a la función viewCart() para mostrar el contenido actual del carrito.
      viewCart()
      break

    // Caso por defecto: si la acción no es válida, mostramos un mensaje de error.
    default:
      console.log('Invalid action. Please choose a valid option.')
  }
}

// Agregamos el libro 'Think like a monk' al carrito usando 'ADD_TO_CART_ACTION'.
performCartActions(ADD_TO_CART_ACTION, 'Think like a monk')

// Vemos el contenido actual del carrito después de agregar el primer libro.
performCartActions(VIEW_CART_ACTION)

// Agregamos otro libro, 'Ego is the enemy.', al carrito.
performCartActions(ADD_TO_CART_ACTION, 'Ego is the enemy.')

// Volvemos a ver el contenido del carrito después de agregar el segundo libro.
performCartActions(VIEW_CART_ACTION)

// Eliminamos el último libro del carrito ('Ego is the enemy.') usando 'REMOVE_FROM_CART_ACTION'.
performCartActions(REMOVE_FROM_CART_ACTION)
