export function discountedPrice(price, discountPercentage, quantity) {
  return Math.round((price - ((price * discountPercentage) / 100)) * quantity);
}

export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export function capitalizeFirstWord(word) {
  const first_letter = word.charAt(0).toUpperCase();
  const finalWord = first_letter + word.slice(1);
  return finalWord;
}

export function uncapitalizeFirstWord(word) {
  const first_letter = word.charAt(0).toLowerCase();
  const finalWord = first_letter + word.slice(1);
  return finalWord;
}

export function capitalizeAllWords(strng) {
            if(strng === undefined) return;
            const words = strng.split(' ');
            words.forEach((element,i,arr) => {
              const fst_letter = element.charAt(0).toUpperCase();
              arr[i] = fst_letter + element.slice(1);
            });
           const capString = words.join(' ');
           return capString;
}

export function unCapitalizeAllWords(strng) {
            const words = strng.split(' ');
            words.forEach((element,i,arr) => {
              const fst_letter = element.charAt(0).toLowerCase();
              arr[i] = fst_letter + element.slice(1);
            });
           const capString = words.join(' ');
           return capString;
}

export const calculateTotalAmount = (arr) =>{
return arr.reduce((total, value) => {
  const product = value.product || value.arrival;
  return (total += discountedPrice(
    product.price,
    product.discountPercentage,
    value.quantity
  ));
}, 0);
}