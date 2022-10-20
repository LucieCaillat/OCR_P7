class Filter {
  constructor() {    
  }

  isInSentence(string, sentence){
  //test there is a word beginning with "string" in "sentence" (add a space at the beginning of "string")
  //test with the characters [' -] and without
    const stringToTest = string.toLowerCase().replace(/^ */, " ");
    const sentenceToTest1 = " " + sentence.toLowerCase();
    const sentenceToTest2 = " " + sentence.toLowerCase().replace(/['-]/gi,' '); 
    return sentenceToTest1.includes(stringToTest) || sentenceToTest2.includes(stringToTest) 
  
  }

  ingredientsIntoSentence(recipe){
    const ingredients = recipe.ingredients.map( ingredient => ingredient.ingredient)
    return ingredients.join(' ')
  }  
}


class SearchBarFilter extends Filter{
  constructor(){
    super()
    this.$input = document.querySelector('.search input')
  }

  filterSearchBar(string, data){
    return data.filter(recipe => this.isInSentence(string, recipe.name) || this.isInSentence(string, recipe.description) || this.isInSentence(string, this.ingredientsIntoSentence(recipe)) )
  } 
}


class TagFilter extends Filter{
  constructor(type){
    super()
    this._type = type
  }

  filterTag(string, data){
    if(this._type === "ingredient"){
      return data.filter(recipe => this.isInSentence(string, this.ingredientsIntoSentence(recipe)))
    } else if(this._type === "appliance"){
      return data.filter(recipe => this.isInSentence(string, recipe.appliance))
    }else if(this._type === "ustensil"){
      return data.filter(recipe => this.isInSentence(string, recipe.appliance.join(' ')))
    }else{
      console.log(`filterTag: ${this._type} is not correct`)
    }
  }
}
