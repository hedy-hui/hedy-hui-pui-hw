let rollsInCart = new Set();

function saveToLocalStorage() {
    const rollArray = Array.from(rollsInCart);
    const rollArrayString = JSON.stringify(rollArray);
    
    console.log(rollsInCart);

    localStorage.setItem('storedRoll', rollArrayString);
    localStorage.getItem('storedRoll');
}

function retrieveFromLocalStorage() {
    const rollArrayString = localStorage.getItem('storedRoll');
    const rollArray = JSON.parse(rollArrayString);
    rollsInCart = new Set(rollArray);
    console.log(rollArray);
}