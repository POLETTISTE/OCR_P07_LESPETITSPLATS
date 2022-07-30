// ---------------------------DISPLAY.JS------------------------
function removeTag(item) {
  //remove physically tag button
  item.textContent='';
  item.remove();
}

function getTagCloseButton(item) {
  let closeTag = document.createElement('span');
  closeTag.classList.add('tag-close');
  closeTag.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
  item.appendChild(closeTag);
  closeTag.addEventListener('click', closeTheTag); 
}

function getList(list, classlist, clickeditem, dom){
  list.forEach(element => {
    let item = document.createElement('li');
    item.classList.add(classlist);
    item.textContent = element;
    item.addEventListener(('click'), clickeditem);
    dom.appendChild(item);
  })
}

// getList en forEach sur liste ingredient à jour pour garder event listen
  





// function getListFiltered(list, classList, dom){
//   list.forEach(element => {
//     let item = document.createElement('li');
//     item.classList.add(classList);
//     item.textContent = element;
//     dom.appendChild(item);
//   })
// }

function getTagCard(e, tag){
  let item = document.createElement('card');
  item.classList.add(tag, 'tag', 'rounded');
  item.textContent = e.target.textContent;
  getTagCloseButton(item);
  tagsDiv.appendChild(item);
}

function addDisplayNoneWhenCreateTag(e) {
  e.target.classList.add('tagged'); 
}


function removeDisplayNoneWhenCloseTheTag(item, source) {
  
  const elements = source.childNodes
 
  elements.forEach(element => {
    if (element.textContent === item) {
      element.classList.remove('tagged');
    }
  })
}


//INITIALISATION LANCEMENT DES 3 FONCTIONS 
async function displayIngredientsAppliancesUstensils() {
  getList(dataIngredientsFiltered,'ingredientLi', clickIngredient, ingredientUl );
  getList(dataAppliancesFiltered,'applianceLi', clickAppliance, applianceUl );
  getList(dataUstensilsFiltered,'ustensilLi', clickUstensil, ustensilUl );
}

