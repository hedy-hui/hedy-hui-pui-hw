let cart = [];
let basePrice;

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

/* Initialize glazing and pack size dropdown options when the page loads */
window.onload = function(){
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const rollType = params.get('roll');

    let rollSelection = rolls[rollType];

    /* Extract the current roll’s information (name, image path, price) from the dictionary */
    document.querySelector(".heading").innerText = `${rollType} Cinnamon Roll`;
    document.querySelector(".product-detail-image").src = `../assets/products/${rollSelection.imageFile}`;
    basePrice = rollSelection.basePrice;
    document.querySelector(".product-detail-price").innerText = "$ " + basePrice.toFixed(2);

    /* Populating dropdowns */
    let glazes = document.querySelector('#glazing');
    let packSizes = document.querySelector('#packSize');

    for (let i = 0; i < allGlazing.length; i++){
        let newGlazingOption = document.createElement('option');
        newGlazingOption.text = allGlazing[i].glazing;
        newGlazingOption.value = allGlazing[i].glazing;
        glazes.add(newGlazingOption);
    }

    for (let i = 0; i < allPackSize.length; i++){
        let newPackOption = document.createElement('option');
        newPackOption.text = allPackSize[i].packSize;
        newPackOption.value = allPackSize[i].packSize;
        packSizes.add(newPackOption);
    }

    priceUpdate();

    /* Add event listeners that call the priceUpdate function when the user changes the glazing or pack size selections */
    document.querySelector('#glazing').addEventListener('change', priceUpdate);
    document.querySelector('#packSize').addEventListener('change', priceUpdate);

    document.querySelector('.add-to-cart-button').addEventListener('click', function(){
        let displayedPrice = parseFloat(document.querySelector(".product-detail-price").innerText.replace("$ ", ""));
        let glazingSelection = document.querySelector('#glazing').value;
        let packSelection = parseInt(document.querySelector('#packSize').value);
        let newRoll = new Roll(rollType, glazingSelection, packSelection, displayedPrice);
        cart.push(newRoll);
        console.log(cart);
    });
}

/* Array of different glazing options and their respective price adaptations */
let allGlazing = [
    {
        glazing: "Keep original",
        glazingPrice: 0,
    },
    {
        glazing: "Sugar milk",
        glazingPrice: 0,
    },
    {
        glazing: "Vanilla milk",
        glazingPrice: 0.5,
    },
    {
        glazing: "Double chocolate",
        glazingPrice: 1.5,
    },
];

/* Array of different pack size options and their respective price adaptations */
let allPackSize = [
    {
        packSize: 1,
        packPrice: 1,
    },
    {
        packSize: 3,
        packPrice: 3,
    },
    {
        packSize: 6,
        packPrice: 5,
    },
    {
        packSize: 12,
        packPrice: 10,
    },
];

/* Function to update the price when glazing or pack size changes */
function priceUpdate(){
    let glazingSelection = document.querySelector('#glazing').value;
    let packSelection = parseInt(document.querySelector('#packSize').value);

    let glazingNewPrice = allGlazing.find(glaze => glaze.glazing === glazingSelection).glazingPrice;
    let packNewPrice = allPackSize.find(pack => pack.packSize === packSelection).packPrice;

    let finalPrice = ((basePrice + glazingNewPrice)*packNewPrice).toFixed(2);
    let displayFinalPrice = document.querySelector(".product-detail-price");

    displayFinalPrice.innerText = "$ " + finalPrice;
}