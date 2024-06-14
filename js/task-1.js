"use strict";
function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;

  console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`);
  return totalPrice;
}
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
