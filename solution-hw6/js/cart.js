let cart = [];

window.onload = function () {
    retrieveFromLocalStorage();  // Load the cart from local storage
    populateCartItems();  // Populate the DOM with cart items
}

function populateCartItems() {
    for (let roll of cart) {
        createElement(roll);
    }
}

function createElement(roll) {
    const template = document.querySelector('#shopping-cart-template');
    const clone = template.content.cloneNode(true);
    
    clone.querySelector('.item-type').innerText = `${roll.type} Cinnamon Roll`;
    clone.querySelector('.shopping-cart-image').src = `../assets/products/` + rolls[roll.type].imageFile;
    clone.querySelector('.item-glazing').innerText = roll.glazing;
    clone.querySelector('.item-pack').innerText = `Pack size: ${roll.size}`;
    
    let rollPrice = calculatePrice(roll);
    clone.querySelector('.item-price').innerText = `$${rollPrice}`;
    
    roll.element = clone.querySelector('.shopping-cart-item');
    
    const btnDelete = roll.element.querySelector('.remove-item');
    btnDelete.addEventListener('click', () => {
        deleteRoll(roll);
    });
    
    document.querySelector('.shopping-cart-content').appendChild(clone);
    calculateTotalPrice();
}

function calculateTotalPrice() {
    let totalPrice = 0;
    for (let roll of cart) {
        totalPrice += parseFloat(calculatePrice(roll));
    }
    document.querySelectorAll('.total-price-text')[1].innerText = `$${totalPrice.toFixed(2)}`;
}

function deleteRoll(roll) {
    cart = cart.filter(item => item !== roll);
    roll.element.remove();
    saveToLocalStorage();  // Update local storage after deletion
    console.log(cart);  // Print updated cart
    calculateTotalPrice();
}

function calculatePrice(roll) {
    let glazingNewPrice = allGlazing.find(glaze => glaze.glazing === roll.glazing).glazingPrice;
    let packNewPrice = allPackSize.find(pack => pack.packSize === roll.size).packPrice;
    
    let finalPrice = ((roll.basePrice + glazingNewPrice) * packNewPrice).toFixed(2);
    return finalPrice;
}

function saveToLocalStorage() {
    localStorage.setItem('storedRoll', JSON.stringify(cart));
}