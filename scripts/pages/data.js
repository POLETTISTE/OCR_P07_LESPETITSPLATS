const getData = async ()=> {
    await fetch('data/recipes.json')
      .then((res) => res.json())
      .then((data) => {
          let recipes = data.recipes;
          console.log(recipes)
      })
      .catch((err) => err);  
  }

  module.exports.getData = getData;



