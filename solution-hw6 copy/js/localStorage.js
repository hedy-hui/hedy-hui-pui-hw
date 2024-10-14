const rollsInCart = new Set();

rollsInCart.add(new Roll("Original", "Sugar milk", "1", 2.49));
rollsInCart.add(new Roll("Walnut", "Vanilla milk", "12", 3.49));
rollsInCart.add(new Roll("Raisin", "Sugar milk", "3", 2.99));
rollsInCart.add(new Roll("Apple", "Keep original", "3", 3.49));

/* HW6 */
function saveToLocalStorage() {
    const rollArray = Array.from(rollsInCart);
    console.log(rollArray);
  }
