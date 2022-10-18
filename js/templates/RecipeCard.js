
class RecipeCard {
  constructor(recipe) {
      this._recipe = recipe
  }

  get IngredientsListe(){
    const ingredientsArray = this._recipe.ingredients
    var ingredientsListe = ""

    ingredientsArray.forEach(ingredient => {
      if (ingredient.quantity === undefined && ingredient.unit === undefined){
        ingredientsListe = ingredientsListe + `<li><span>${ingredient.ingredient}</span></li>` 

      }else if (ingredient.unit === undefined){
        ingredientsListe = ingredientsListe + `<li><span>${ingredient.ingredient}:</span> ${ingredient.quantity}</li>`
        
      }else{
        ingredientsListe = ingredientsListe + `<li><span>${ingredient.ingredient}:</span> ${ingredient.quantity} ${ingredient.unit}</li>`
      }                  
    })
    
    return ingredientsListe
  }

  get descriptionSice(){
    const description = this._recipe.description;
    const descriptionArray = description.split(' ')
    if (descriptionArray.length > 30){
      // reduces the description to 30 words and add "..."
      return descriptionArray.slice(0, 30).join( " ") + " ...";
    } else{
      return description
    }    
    
  }

  createRecipeCard(){
      const $recipeCard = document.createElement('div')
      $recipeCard.classList.add('recipe-card')      
      $recipeCard.innerHTML = `
      <div class="recipe-card--img"></div>
      <div class="recipe-card--header">
        <h2>${this._recipe.name}</h2>
        <p class="recipe-card--time"><i class="fa-regular fa-clock"></i><span>${this._recipe.time} mn</span></p>
      </div>
      <div class="recipe-card--main">
        <div class="recipe-card--ingredients">
          <ul>
            ${this.IngredientsListe}
          </ul>
        </div>
        <p class="recipe-card--recipe">${this.descriptionSice}</p>
      </div>
      `
      return $recipeCard
  }
}


