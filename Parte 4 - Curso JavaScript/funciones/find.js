// Array con múltiplos de 5.
const multipleOf5 = [5, 10, 15, 20]

// .find() devuelve el primer número mayor que 10 en el array.
const firstNumberGreaterThan10 = multipleOf5.find(number => number > 10)

// Imprime el array original.
console.log(multipleOf5)

// Imprime el primer número encontrado mayor que 10, en este caso: 15.
console.log(firstNumberGreaterThan10)


// Array con números aleatorios.
const randomNumber = [6, 14, 27, 56, 40]

// .findIndex() devuelve el índice del primer número mayor que 50.
const indexNumber = randomNumber.findIndex(number => number > 50)

// Imprime el array original.
console.log(randomNumber)

// Imprime el índice del primer número mayor que 50, en este caso: 3 (el número 56 está en la posición 3).
console.log(indexNumber)


// Array de participantes ganadores con sus detalles.
const winningParticipants = [
  { id: 1, name: 'Jennifer', ticketNumber: 001 },
  { id: 8, name: 'Michael', ticketNumber: 008 },
  { id: 15, name: 'Emily', ticketNumber: 015 },
  { id: 47, name: 'Charlie', ticketNumber: 047 }
]

// Función para encontrar un ganador por nombre usando .find().
// Si no encuentra un ganador, devuelve un mensaje.
function findWinnerByName(name) {
  const winner = winningParticipants.find(participants => participants.name === name)
  return winner || 'No winner found with that name.'
}

// Función para encontrar el índice de un ganador por su número de ticket.
// Si no encuentra un ganador, devuelve un mensaje.
function findIndexWinnerByTicket(ticketNumber) {
  const index = winningParticipants.findIndex(participants => participants.ticketNumber === ticketNumber)
  return index !== -1 ? index : 'No winner found with that ticket number.'
}

// Función para mostrar la información del ganador.
// Si hay un ganador, imprime la información; de lo contrario, muestra un mensaje de que no se encontró ganador.
function displayWinnerInformation(winner) {
  if (winner !== undefined && winner != null && winner !== 'No winner found with that name.') {
    console.log('Winner information: ', winner)
  } else {
    console.log('No winner found.')
  }
}

// Busca el ganador con el nombre 'Emily'.
const winnerByName = findWinnerByName('Emily')

// Busca el índice del ganador con el número de ticket 008.
const indexWinnerByTicket = findIndexWinnerByTicket(008)

// Muestra la información del ganador con el nombre 'Emily'.
displayWinnerInformation(winnerByName)

// Imprime el índice del ganador con el ticket número 008.
console.log('Index of Winner by Ticket Number: ', indexWinnerByTicket)
