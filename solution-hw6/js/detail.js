let glazingSelection;
let packSelection;

function priceUpdate() {
    glazingSelection = document.querySelector('#glazing').value;
    packSelection = document.querySelector('#packSize').value;

    let glazingNewPrice = allGlazing.find(glaze => glaze.glazing === glazingSelection).glazingPrice;
    let packNewPrice = allPackSize.find(pack => pack.packSize === packSelection).packPrice;

    let finalPrice = ((basePrice + glazingNewPrice) * packNewPrice).toFixed(2);
    let displayFinalPrice = document.querySelector(".product-detail-price");

    displayFinalPrice.innerText = "$ " + finalPrice;
}

window.onload = function () {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    rollType = params.get('roll');

    let rollSelection = rolls[rollType];

    /* Extract the current roll’s information (name, image path, price) from the dictionary */
    document.querySelector(".product-detail-heading").innerText = `${rollType} Cinnamon Roll`;
    document.querySelector(".product-detail-image").src = `../assets/products/${rollSelection.imageFile}`;
    basePrice = rollSelection.basePrice;
    document.querySelector(".product-detail-price").innerText = "$ " + basePrice.toFixed(2);

    /* Populating dropdowns */
    let glazes = document.querySelector('#glazing');
    let packSizes = document.querySelector('#packSize');

    for (let i = 0; i < allGlazing.length; i++) {
        let newGlazingOption = document.createElement('option');
        newGlazingOption.text = allGlazing[i].glazing;
        newGlazingOption.value = allGlazing[i].glazing;
        glazes.add(newGlazingOption);
    }

    for (let i = 0; i < allPackSize.length; i++) {
        let newPackOption = document.createElement('option');
        newPackOption.text = allPackSize[i].packSize;
        newPackOption.value = allPackSize[i].packSize;
        packSizes.add(newPackOption);
    }

    priceUpdate();

    /* Add event listeners that call the priceUpdate function when the user changes the glazing or pack size selections */
    document.querySelector('#glazing').addEventListener('change', priceUpdate);
    document.querySelector('#packSize').addEventListener('change', priceUpdate);

    document.querySelector('.add-to-cart-button').addEventListener('click', function () {
        rollsInCart.add(new Roll(rollType, glazingSelection, packSelection, basePrice));
        saveToLocalStorage();
    });
}