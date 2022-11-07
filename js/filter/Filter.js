/* eslint-disable no-unused-vars */
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
