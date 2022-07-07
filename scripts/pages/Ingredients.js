
function Ingredient(data) {
  
  const { ingredient, quantity, unit } = data;
  
  function getHashtagCard() {
    const hashtag = document.createElement('span');
    hashtag.classList.add('hastag-item');
    hashtag.textContent = ingredient;
  
    return hashtag;
  }
  return { ingredient, quantity, unit, getHashtagCard }
}
  