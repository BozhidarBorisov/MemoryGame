const cardArray = [
    {
        name:`potatoe`,
        img: `images/potatoe.jpg`
    },
    {
        name:`pizza`,
        img: `images/pizza.jpg`
    },
    {
        name:`pasta`,
        img: `images/pasta.jpg`
    },
    {
        name:`drink`,
        img: `images/drink.jpg`
    },
    {
        name:`sandwich`,
        img: `images/sandwich.jpg`
    },
    {
        name:`cupcake`,
        img: `images/cupcake.png`
    },
    {
        name:`potatoe`,
        img: `images/potatoe.jpg`
    },
    {
        name:`pizza`,
        img: `images/pizza.jpg`
    },
    {
        name:`pasta`,
        img: `images/pasta.jpg`
    },
    {
        name:`drink`,
        img: `images/drink.jpg`
    },
    {
        name:`sandwich`,
        img: `images/sandwich.jpg`
    },
    {
        name:`cupcake`,
        img: `images/cupcake.png`
    }
]
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector(`#grid`)
const result = document.querySelector(`#result`)
let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []

function createBoard(){
    for(let i =0;i<12;i++){
       const card = document.createElement(`img`)

       card.setAttribute(`src`,`images/cover.jpg`)

       card.setAttribute(`data-id`, i)

       card.addEventListener(`click`,flipCard)

       gridDisplay.append(card)
       
    }
    
}
createBoard()

function checkMatch(){
const cards = document.querySelectorAll(`img`)
const optionOneId = cardsChosenIds[0]
const optionTwoId = cardsChosenIds[1]
   if(optionOneId == optionTwoId){
alert(`You have clicked the same image!`)
   }

    if(cardsChosen[0] == cardsChosen[1]){
        alert(`You found a match!`)
        cards[optionOneId].setAttribute(`src`,`images/blank.png`)
        cards[optionTwoId].setAttribute(`src`,`images/blank.png`)
        cards[optionOneId].removeEventListener(`click`,flipCard)
        cards[optionTwoId].removeEventListener(`click`,flipCard)
        cardsWon.push(cardsChosen)
    }
    else{
        cards[optionOneId].setAttribute(`src`,`images/cover.jpg`)
        cards[optionTwoId].setAttribute(`src`,`images/cover.jpg`)
        alert(`Try again!`)
    }
    cardsChosen = []
    cardsChosenIds= []
    result.textContent = cardsWon.length
    if(cardsWon.length == cardArray.length/2){
        result.innerHTML = `You won!!!`
    }
}


function flipCard(){
    const cardID = this.getAttribute(`data-id`)
    cardsChosen.push(cardArray[cardID].name)
    cardsChosenIds.push(cardID)
    this.setAttribute(`src`,cardArray[cardID].img)
    if(cardsChosen.length === 2){
        setTimeout(checkMatch,500)
    }
}