class TopicCard extends Filter {
  constructor(type, recipes){
    super()
    this._type = type;
    this.$topicCardClose = document.querySelector(`.${type}.topic-card__close`)
    this.$topicCardOpen = document.querySelector(`.${type}.topic-card__open`)
    this.$closeButton = document.querySelector(`.${type} .topic-card--close-button`)
    this.$input = document.querySelector(`.${type} input`)
    this.itemsList = new ItemsList(type, recipes).itemsList()
    this.topicSugestionButtons = []
  } 

  openTopicCard(){    
    this.$topicCardClose.style.display = "none";
    this.$topicCardOpen.style.display = "block";
  }
  
  closeTopicCard(){    
    this.$topicCardClose.style.display = "flex";
    this.$topicCardOpen.style.display = "none";
  }

  $eventCloseButton(){
    const topicCard = this
    this.$closeButton.addEventListener("click", function(){
      topicCard.closeTopicCard()
    })
  }  

  $eventInput(){
    let topicCard = this
    this.$input.addEventListener("input", function(event){      
      const string = event.target.value    
      topicCard.topicSugestionButtons.forEach(function (topicSB){
        if(topicCard.isInSentence(string, topicSB._name) && topicSB.tag.isDisplay === false){
          topicSB.isDisplay = true
        } else{
          topicSB.isDisplay = false
        }
        topicSB.displayTopicSugestion()
      })      
    })    
  }
  
  
  init(){
    const topicCard = this
    this.itemsList.forEach(function (item){
      const topicSugestionButton = new TopicSugestionButton(item, topicCard._type)
      topicSugestionButton.init()
      topicCard.topicSugestionButtons.push(topicSugestionButton)
    })
    this.$eventCloseButton()
    this.$eventInput()
  }
}
