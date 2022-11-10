/* global Filter*/
/* eslint-disable no-unused-vars */
class SearchBar extends Filter{
  constructor(){
    super()
    this.$input = document.querySelector('.search input')
  }

  filterSearchBar(string, data){
    // Replacement of filter by a for loop
    let newData = []
    for (let i = 0; i < data.length; i++){
      if (this.isInSentence(string, data[i].name) || this.isInSentence(string, data[i].description) || this.isInSentence(string, this.ingredientsIntoSentence(data[i]))){
        newData.push(data[i])
      }
    }
    return newData
  } 
}