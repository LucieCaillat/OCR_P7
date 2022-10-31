class App {
  constructor(data) {
    this.$recipeGallery = document.querySelector('.recipe--gallery')
    this.$noFindMessage = document.querySelector('.no-find-message')
    this.searchBar = new SearchBar();
    this.ingredientTopicCard = new TopicCard("ingredient", data)
    this.applianceTopicCard = new TopicCard("appliance", data)
    this.ustensilTopicCard = new TopicCard("ustensil", data)
    this.topicCards = [this.ingredientTopicCard, this.applianceTopicCard, this.ustensilTopicCard]
    this._recipes = data
    this.recipesToDisplay = data 
    
  }
  
  tagFilters(data){
    const ingredientTagsDisplay = this.ingredientTopicCard.topicSugestionButtons.filter(topicSB => topicSB.tag.isDisplay)
    
    const applianceTagsDisplay = this.applianceTopicCard.topicSugestionButtons.filter(topicSB => topicSB.tag.isDisplay)
 
    const ustensilTagsDisplay = this.ustensilTopicCard.topicSugestionButtons.filter(topicSB => topicSB.tag.isDisplay)
    
    const tagsDisplay = [...ingredientTagsDisplay, ...applianceTagsDisplay, ...ustensilTagsDisplay]
    let newData = data

    tagsDisplay.forEach(topicSB => newData = topicSB.tag.filterTag.filterTag(newData) )
    return newData
  }
  
  displayTopicSugestionButtons(data){
    this.topicCards.forEach(topicCard =>{
      topicCard.displayedRecipes = data
      topicCard.displayTopicSugestionButtons()
    })
  }


  displayRecipes(data){
    const tagFiltersData = this.tagFilters(data)
    this.displayTopicSugestionButtons(tagFiltersData)
    this.$recipeGallery.innerHTML = ""
    if(tagFiltersData.length === 0){
      this.$noFindMessage.style.display = "block"
    }else{
      this.$noFindMessage.style.display = "none"
      tagFiltersData.forEach(recipe => {
        const Template = new RecipeCard(recipe)
        this.$recipeGallery.appendChild(Template.createRecipeCard())        
      })
    }
        
  }

  $eventSearchBar(){
    const _this = this

    _this.searchBar.$input.addEventListener("input", function(event){
      const string = event.target.value    
      if(string.length >= 3){
        _this.recipesToDisplay = _this.searchBar.filterSearchBar(string, _this._recipes)       
      }else{
        _this.recipesToDisplay = _this._recipes
      }
      _this.displayRecipes(_this.recipesToDisplay)
      
    })    
  } 

  $openTopicCard(topicCardToOpen, topicCard2, topicCard3){
      topicCardToOpen.$topicCardClose.addEventListener("click", function(){
        topicCardToOpen.openTopicCard()
        topicCard2.closeTopicCard()
        topicCard3.closeTopicCard()
      })
    }

  $clickOnTopicSugestionButton(){
    const _this = this

    _this.topicCards.forEach(topicCard =>{
      topicCard.topicSugestionButtons.forEach(topicSB =>{
        topicSB.$topicSugestionButton.addEventListener("click", function(){
          topicSB.onClickTopicSugestionButton()
          topicCard.closeTopicCard()
          _this.displayRecipes(_this.recipesToDisplay)
        })
      })
    })
  }

  $clickOnTag(){
    const _this = this
    this.topicCards.forEach(topicCard =>{
      topicCard.topicSugestionButtons.forEach(topicSB =>{
        topicSB.tag.$tag.addEventListener("click", function(){
          topicSB.deleteTag()
          _this.displayRecipes(_this.recipesToDisplay)
        })
      })
    })
  }


  init() {
    this.ingredientTopicCard.init();
    this.applianceTopicCard.init();
    this.ustensilTopicCard.init();
    this.displayRecipes(this._recipes);
    this.$eventSearchBar();
    this.$openTopicCard(this.ingredientTopicCard, this.applianceTopicCard, this.ustensilTopicCard);
    this.$openTopicCard(this.ustensilTopicCard, this.ingredientTopicCard, this.applianceTopicCard);
    this.$openTopicCard( this.applianceTopicCard, this.ustensilTopicCard, this.ingredientTopicCard);
    this.$clickOnTopicSugestionButton();
    this.$clickOnTag();
  }
}

const app = new App(recipes)
app.init()
