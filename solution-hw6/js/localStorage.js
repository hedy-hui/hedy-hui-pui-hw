function saveToLocalStorage() {
    localStorage.setItem('storedRoll', JSON.stringify(cart));
}

function retrieveFromLocalStorage() {
    let storedCart = localStorage.getItem('storedRoll');
    if (storedCart) {
        let parsedCart = JSON.parse(storedCart);
        cart = parsedCart.map(roll => new Roll(roll.type, roll.glazing, roll.size, roll.basePrice));
    } else {
        cart = [];  // Initialize empty cart if none exists
    }
}