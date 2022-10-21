class Tag {
  constructor(name, type) {
    this._name = name
    this._type = type
    this.$tag = document.createElement('button')
    this.filterTag = new TagFilter(name, type)
    this.isDisplay = false
  }

  initTag(){
    this.$tag.classList.add(`tag`)
    this.$tag.classList.add(this._type)      
    this.$tag.innerHTML = `${this._name} <i class="fa-regular fa-circle-xmark"></i>`  
  }

  displayTag(){
    document.querySelector(".tag--container").appendChild(this.$tag)
    this.isDisplay = true
  }

  deleteTag(){
    document.querySelector(".tag--container").removeChild(this.$tag)
    this.isDisplay = false  
    
  }
}
