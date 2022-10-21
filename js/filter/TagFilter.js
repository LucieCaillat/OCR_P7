class TagFilter extends Filter{
  constructor(name, type){
    super()
    this._type = type
    this._name = name
  }

  filterTag(data){
    if(this._type === "ingredient"){
      return data.filter(recipe => this.isInSentence(this._name, this.ingredientsIntoSentence(recipe)))
    } else if(this._type === "appliance"){
      return data.filter(recipe => this.isInSentence(this._name, recipe.appliance))
    }else if(this._type === "ustensil"){
      return data.filter(recipe => this.isInSentence(this._name, recipe.appliance.join(' ')))
    }else{
      console.log(`filterTag: ${this._type} is not correct`)
    }
  }
}