class TopicCard {
  constructor(type){
    this._type = type;
  }

  formatList(array){
    //so that each string item is in lower case with the first letter in upper case
    return array.map(item => item.toLowerCase().replace(item[0].toLowerCase(), item[0].toUpperCase()))
  }
  
  removeDuplicates(array){    
    const shortList = array.filter((item, index) => array.indexOf(item) === index).sort()
    //delete the same item with an s and without s
    return shortList.filter((item, index) => item + "s" !== shortList[index + 1] )
  }

  sugestionList(){
    if(this._type === "ingredient"){
      let ingredients = recipes.map(recipe => recipe.ingredients.map( ingredient => ingredient.ingredient)).flat()
      ingredients = this.formatList(ingredients)
      ingredients =  this.removeDuplicates(ingredients)
      return ingredients 

    } else if(this._type === "appliance"){
      let appliances = recipes.map(recipe => recipe.appliance)
      appliances =  this.removeDuplicates(appliances)
      return appliances

    }else if(this._type === "ustensil"){
      let ustensils = recipes.map(recipe => recipe.ustensils).flat()
      ustensils = this.formatList(ustensils)
      ustensils =  this.removeDuplicates(ustensils)
      return ustensils 

    }else{
      console.log(`sugestionList: ${this._type} is not correct`)
    }
  }
  creatTags(){
    const items = this.sugestionList(this._type)
    items.forEach(item => new Tag(item, this._type).createtopicSugestion())

  }  
}

new TopicCard("ingredient").creatTags()
new TopicCard("appliance").creatTags()
new TopicCard("ustensil").creatTags()