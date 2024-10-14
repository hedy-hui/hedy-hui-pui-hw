// document.addEventListener('DOMContentLoaded', function () {
//     rollsInCart.add(new Roll("Original", "Sugar milk", "1", 2.49));
//     rollsInCart.add(new Roll("Walnut", "Vanilla milk", "12", 3.49));
//     rollsInCart.add(new Roll("Raisin", "Sugar milk", "3", 2.99));
//     rollsInCart.add(new Roll("Apple", "Keep original", "3", 3.49));


//     function calculatePrice(roll) {
//         let glazingNewPrice = allGlazing.find(glaze => glaze.glazing === roll.glazing).glazingPrice;
//         let packNewPrice = allPackSize.find(pack => pack.packSize === roll.size).packPrice;

//         let finalPrice = ((roll.basePrice + glazingNewPrice) * packNewPrice).toFixed(2);
//         return finalPrice;
//     }

   

//     function createElement(roll) {
//         // make a clone of the template
//         const template = document.querySelector('#shopping-cart-template');
//         const clone = template.content.cloneNode(true);
//         clone.querySelector('.item-type').innerText = `${roll.type} Cinnamon Roll`;
//         clone.querySelector('.shopping-cart-image').src = `../assets/products/` + rolls[roll.type].imageFile;
//         clone.querySelector('.item-glazing').innerText = roll.glazing;
//         clone.querySelector('.item-pack').innerText = `Pack size: ${roll.size}`;

//         let rollPrice = calculatePrice(roll);
//         clone.querySelector('.item-price').innerText = `$ ${rollPrice}`;

//         // connect this clone to our roll.element
//         roll.element = clone.querySelector('.shopping-cart-item');

//         const btnDelete = roll.element.querySelector('.remove-item');
//         btnDelete.addEventListener('click', () => {
//             deleteRoll(roll);
//         });

//         // add the clone to the DOM
//         const rollListElement = document.querySelector('.shopping-cart-content');
//         rollListElement.appendChild(clone);

//         calculateTotalPrice();
//     }

//     function calculateTotalPrice() {
//         let totalPrice = 0;

//         // Loop through the items in the cart and sum their prices
//         for (let roll of rollsInCart) {
//             let rollPrice = parseFloat(calculatePrice(roll));
//             totalPrice += rollPrice;
//         }

//         // Update the total price in the checkout section
//         document.querySelectorAll('.total-price-text')[1].innerText = `$${totalPrice.toFixed(2)}`;
//     }

//     function deleteRoll(roll) {
//         // Remove the roll from the Set
//         rollsInCart.delete(roll);

//         // Remove the roll from the DOM
//         roll.element.remove();

//         // Recalculate the total price
//         calculateTotalPrice();
//     }
// });

// window.onload = function () {
//     retrieveFromLocalStorage();
//     for (item of rollsInCart) {
//         calculatePrice(item);
//         createElement(item);
//     }
// }

// Declare these globally so they are accessible in window.onload
function calculatePrice(roll) {
    let glazingNewPrice = allGlazing.find(glaze => glaze.glazing === roll.glazing).glazingPrice;
    let packNewPrice = allPackSize.find(pack => pack.packSize === roll.size).packPrice;

    let finalPrice = ((roll.basePrice + glazingNewPrice) * packNewPrice).toFixed(2);
    return finalPrice;
}

function createElement(roll) {
    // make a clone of the template
    const template = document.querySelector('#shopping-cart-template');
    const clone = template.content.cloneNode(true);
    clone.querySelector('.item-type').innerText = `${roll.type} Cinnamon Roll`;
    clone.querySelector('.shopping-cart-image').src = `../assets/products/` + rolls[roll.type].imageFile;
    clone.querySelector('.item-glazing').innerText = roll.glazing;
    clone.querySelector('.item-pack').innerText = `Pack size: ${roll.size}`;

    let rollPrice = calculatePrice(roll);
    clone.querySelector('.item-price').innerText = `$ ${rollPrice}`;

    // connect this clone to our roll.element
    roll.element = clone.querySelector('.shopping-cart-item');

    const btnDelete = roll.element.querySelector('.remove-item');
    btnDelete.addEventListener('click', () => {
        deleteRoll(roll);
    });

    // add the clone to the DOM
    const rollListElement = document.querySelector('.shopping-cart-content');
    rollListElement.appendChild(clone);

    calculateTotalPrice();
}

function calculateTotalPrice() {
    let totalPrice = 0;

    // Loop through the items in the cart and sum their prices
    for (let roll of rollsInCart) {
        let rollPrice = parseFloat(calculatePrice(roll));
        totalPrice += rollPrice;
    }

    // Update the total price in the checkout section
    document.querySelectorAll('.total-price-text')[1].innerText = `$${totalPrice.toFixed(2)}`;
}

function deleteRoll(roll) {
    // Remove the roll from the Set
    rollsInCart.delete(roll);

    // Remove the roll from the DOM
    roll.element.remove();

    // Recalculate the total price
    calculateTotalPrice();
}

// DOMContentLoaded listener to add initial rolls
document.addEventListener('DOMContentLoaded', function () {
    // Create elements for initial rolls
    for (let item of rollsInCart) {
        createElement(item);
    }
});

// window.onload to retrieve cart from localStorage
window.onload = function () {
    retrieveFromLocalStorage();  // Call the function correctly
    for (let item of rollsInCart) {
        createElement(item);  // Now accessible here
    }
}