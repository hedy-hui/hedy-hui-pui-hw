/* Initialize glazing and pack size dropdown options when the page loads */
window.onload = function(){
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
}

let basePrice = 2.49;

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