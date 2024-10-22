// Array inicial de países
const countries = ['USA', 'Canada', 'UK']

// .push() agrega uno o más elementos al final del array y devuelve la nueva longitud del array.
// En este caso, se agregan 'Germany' y 'Australia'.
const newCountries = countries.push('Germany', 'Australia')

// Imprimimos el array modificado. Resultado: ['USA', 'Canada', 'UK', 'Germany', 'Australia']
console.log(countries)

// Imprimimos el valor de 'newCountries', que representa la nueva longitud del array después del .push().
// Resultado: 5 (la longitud del array después de agregar dos nuevos elementos).
console.log(newCountries)

// .pop() elimina el último elemento del array y lo devuelve. En este caso, 'Australia' será eliminado.
const removedCountry = countries.pop()

// Imprimimos el array después de usar .pop(). Ahora debería ser: ['USA', 'Canada', 'UK', 'Germany']
console.log(countries)

// Imprimimos el valor de 'removedCountry', que es el país eliminado ('Australia').
console.log(removedCountry)


// Carrito de libros inicializado como un array vacío.
let bookCart = []

// Definimos constantes para las acciones del carrito (agregar, remover, ver).
const ADD_TO_CART_ACTION = 'addToCart'
const REMOVE_FROM_CART_ACTION = 'removeFromCart'
const VIEW_CART_ACTION = 'viewCart'

// Función para ver el contenido actual del carrito de libros.
function viewCart() {
  console.log('Current Cart of Books: ', bookCart)
}

// Función para realizar diferentes acciones en el carrito de libros.
function performCartActions(action, newBook) {
  switch (action) {
    // Si la acción es agregar al carrito:
    case ADD_TO_CART_ACTION:
      // Usamos .push() para agregar un nuevo libro al array 'bookCart'.
      bookCart.push(newBook)
      break

    // Si la acción es remover del carrito:
    case REMOVE_FROM_CART_ACTION:
      // Verificamos si el carrito está vacío.
      if (bookCart.length === 0) {
        console.log('Cart is empty. No books to remove.')
      } else {
        // Usamos .pop() para remover el último libro del carrito.
        const removedBook = bookCart.pop()
        // Imprimimos el libro eliminado.
        console.log(`Removed book from the cart: ${removedBook}`)
      }
      break

    // Si la acción es ver el carrito:
    case VIEW_CART_ACTION:
      // Llamamos a la función viewCart() para mostrar el contenido actual del carrito.
      viewCart()
      break

    // Acción por defecto si la acción proporcionada no es válida.
    default:
      console.log('Invalid action. Please choose a valid option.')
  }
}

// Llamamos a la función 'performCartActions' con la acción 'addToCart' y agregamos el libro 'Think like a monk'.
performCartActions(ADD_TO_CART_ACTION, 'Think like a monk')
// Llamamos a 'performCartActions' con la acción 'viewCart' para ver el carrito actual.
performCartActions(VIEW_CART_ACTION)

// Agregamos otro libro, 'Ego is the enemy.' al carrito.
performCartActions(ADD_TO_CART_ACTION, 'Ego is the enemy.')
// Volvemos a ver el contenido del carrito.
performCartActions(VIEW_CART_ACTION)

// Removemos el último libro del carrito (en este caso, 'Ego is the enemy.').
performCartActions(REMOVE_FROM_CART_ACTION)
