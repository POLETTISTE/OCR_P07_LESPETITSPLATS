// ---------------------------DISPLAY.JS------------------------

function removeTag(item) {
  //remove physically tag button
  item.textContent='';
  item.remove();
}




//INITIALISATION LANCEMENT DES 3 FONCTIONS 

async function displayIngredientsAppliancesUstensils() {
  displayIngredients();
  displayAppliances();
  displayUstensils();
}

