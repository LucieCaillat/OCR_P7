class Tag {
  constructor(name, type) {
    this._name = name
    this._type = type
    this.$tag = document.createElement('button')
    this.$topicSugestion = document.createElement('button')
    this.filterTag = new TagFilter().filterTag
    this.isDisplay = true
}
createtopicSugestion(){
  this.$topicSugestion.classList.add("topic-card--sugestion")
  this.$topicSugestion.innerHTML = this._name
  const $sugestionBox = document.querySelector(`.${this._type} .topic-card--sugestion-box`)
  $sugestionBox.appendChild(this.$topicSugestion)
  this.clickTopicSugestion()
}

clickTopicSugestion(){
  const tag = this
  tag.$topicSugestion.addEventListener("click",function(){
    tag.$topicSugestion.style.display = "none"
    tag.createTag()
    tag.deleteTag()
  })
}

displayTopicSugestion(){
  if(this.isDisplay === true){
    this.$topicSugestion.style.display = "block"
  } else{
    this.$topicSugestion.style.display = "none"
  }
}

createTag(){
  this.$tag.classList.add(`tag`)
  this.$tag.classList.add(this._type)      
  this.$tag.innerHTML = `
  ${this._name} <i class="fa-regular fa-circle-xmark"></i>
  `
  document.querySelector(".tag--container").appendChild(this.$tag)
}

deleteTag(){
  const tag = this
  tag.$tag.addEventListener("click", function(){
    document.querySelector(".tag--container").removeChild(tag.$tag)
    tag.$topicSugestion.style.display = "block"
  })
}
}
