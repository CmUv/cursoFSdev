// Definición de la función "calculateDiscountedPrice" que toma dos parámetros:
// 1. price: el precio original del producto.
// 2. discountPercentage: el porcentaje de descuento a aplicar sobre el precio.
function calculateDiscountedPrice(price, discountPercentage) {
  // Cálculo del monto de descuento. Se multiplica el precio por el porcentaje de descuento y se divide entre 100 para obtener el valor en forma de porcentaje.
  const discount = (price * discountPercentage) / 100

  // Cálculo del precio con el descuento aplicado. Al precio original se le resta el valor del descuento.
  const priceWithDiscount = price - discount

  // La función devuelve el precio final después de aplicar el descuento.
  return priceWithDiscount
}

// Declaración de la variable "originalPrice" que almacena el precio original del producto, en este caso $1000.
const originalPrice = 1000

// Declaración de la variable "discountPercentage" que almacena el porcentaje de descuento que queremos aplicar, en este caso 15%.
const discountPercentage = 15

// Uso de la función "calculateDiscountedPrice" para calcular el precio final después de aplicar el descuento.
// Se pasa el precio original y el porcentaje de descuento como argumentos.
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage)

// Salida en la consola del precio original, concatenado con un símbolo de dólar para formato.
console.log('Original Price: $' + originalPrice)

// Salida en la consola del porcentaje de descuento aplicado.
console.log('Discount: ' + discountPercentage + '%')

// Salida en la consola del precio con el descuento aplicado, concatenado con un símbolo de dólar para formato.
console.log('Price with discount: $' + finalPrice)
