class App {
  constructor() {
    this.$recipeGallery = document.querySelector('.recipe--gallery')
    this.recipesData = recipes;
    this.searchBar = new SearchBarFilter;
  }

  displayRecipes(){
    this.$recipeGallery.innerHTML = ""
    this.recipesData.forEach(recipe => {
      const Template = new RecipeCard(recipe)
      this.$recipeGallery.appendChild(Template.createRecipeCard())        
    })    
  }

  eventSearchBar(){
    const app = this    
    app.searchBar.$input.addEventListener("input", function(event){
      const string = event.target.value    
      if(string.length >= 3){
        app.recipesData = app.searchBar.filterSearchBar(string, recipes);
      }else{
        app.recipesData = recipes
      }
      app.displayRecipes()   
    })    
  }

  main() {
    this.displayRecipes();
    this.eventSearchBar();
    
  }
}

const app = new App()
app.main()










function openTopic(type){
  const topicCardButton = document.querySelector(`.${type}.topic-card__button`);
  const topicCardSearch = document.querySelector(`.${type}.topic-card__search`);
  topicCardButton.style.display = "none";
  topicCardSearch.style.display = "block";
}

function closeTopic(type){
  const topicCardButton = document.querySelector(`.${type}.topic-card__button`);
  const topicCardSearch = document.querySelector(`.${type}.topic-card__search`);
  topicCardButton.style.display = "flex";
  topicCardSearch.style.display = "none";
}

function topic(type, type2, type3){  
  const topicCardOpenButton = document.querySelector(`.${type}.topic-card__button .topic-card--open-button`);  
  const topicCardCloseButton = document.querySelector(`.${type}.topic-card__search .topic-card--close-button`);
  
  topicCardOpenButton.addEventListener("click", function(){
    openTopic(type);
    closeTopic(type2);
    closeTopic(type3);
  })
  topicCardCloseButton.addEventListener("click", function(){
    closeTopic(type);
  })
}

topic("ingredient", "appliance", "ustensil");
topic("appliance", "ustensil", "ingredient");
topic("ustensil", "ingredient", "appliance");