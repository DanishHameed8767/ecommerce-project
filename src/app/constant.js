export function discountedPrice(price, discountPercentage, quantity) {
  return Math.ceil((price - (price * discountPercentage) / 100) * quantity);
}
