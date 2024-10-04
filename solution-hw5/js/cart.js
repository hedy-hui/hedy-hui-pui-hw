let rollInCart = [
    new Roll ("Original", "Sugar Milk", "1", 2,49),
    new Roll ("Walnut", "Vanilla Milk", "12", 3.49),
    new Roll ("Raisin", "Sugar Milk", "3", 2.99),
    new Roll ("Apple", "Keep Original", "3", 3.49),
]



/*
function populateCart() {
    const template = document.querySelector('.shopping-cart-template');
    const cartList = document.querySelector('.shopping-cart-content');

    for (let i = 0; i < rollCart.length; i++) {
        const roll = rollCart[i];

        let clone = document.importNode(template.content, true);

        clone.querySelector('.shopping-cart-image').src = '../assets/products/' + rolls[roll.type].imageFile; 

        clone.querySelector('.item-description').innerHTML =
            roll.type + " Cinnamon Roll<br>" +
            "Glazing: " + roll.glazing + "<br>" +
            "Pack size: " + roll.size;
        ;

        clone.querySelector('.shopping-cart-price').innerText = "$ " + roll.totalPrice;

        cartList.appendChild(clone);
    }

    updateTotal();
}

function updateTotal() {
    const totalElement = document.querySelector('#masterTotal');
    let total = 0;

    for (let i = 0; i < rollCart.length; i++) {
        total += parseFloat(rollCart[i].totalPrice);
    }

    totalElement.innerText = "$ " + total;
}

window.onload = function () {
    populateCart();
}
    */
