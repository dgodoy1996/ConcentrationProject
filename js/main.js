// state variables (board array with objects)
let board = [
  {name: 'dog', emoji: '🐶'}, 
  {name: 'cat', emoji: '🐱'},
  {name: 'mouse', emoji: '🐭'},
  {name: 'bunny', emoji: '🐰'},
  {name: 'fox', emoji: '🦊'},
  {name: 'panda', emoji: '🐼'},
  {name: 'tiger', emoji: '🐯'},
  {name: 'lion', emoji: '🦁'},
  {name: 'dog', emoji: '🐶'}, 
  {name: 'cat', emoji: '🐱'},
  {name: 'mouse', emoji: '🐭'},
  {name: 'bunny', emoji: '🐰'},
  {name: 'fox', emoji: '🦊'},
  {name: 'panda', emoji: '🐼'},
  {name: 'tiger', emoji: '🐯'},
  {name: 'lion', emoji: '🦁'}
]  

// constants (first card, second card, count for how many clicks, 
// count for matches, timer)
let firstCard
let secondCard
let count = 1
let matches = 0
let timer = 180
let gameStarted = false
let canGuess = true
let idx = 1
let canClick = true

// cache elements (front card element, back card element, card container, 
// play button element, timer element)
const cardEls = document.querySelectorAll('.cards > .card > .front') 
const cardsContainerEl = document.querySelector('.cards') 
const front = document.querySelectorAll('.front')
const back = document.querySelectorAll('.back')
const playAgainBtn = document.querySelector('button')
const counter = document.querySelector('#countdown')
const msg = document.querySelector('h2')
const beatTimerMsg = document.querySelector('h3')
const loseMsg = document.querySelector('h5')


// event listeners (to click cards, click play button)
cardsContainerEl.addEventListener('click', function(evt) {
  if(!canClick || evt.target.tagName === 'SECTION') return

  console.log(evt.target.tagName)
  evt.target.children[0].style.visibility = 'visible'
  evt.target.children[1].style.visibility = 'hidden'
  
  compare(evt)

  if(idx % 2 === 0) {
    canClick = false
    setTimeout(function() {
      canClick = true
    }, 1000)
  }
  idx++
})

playAgainBtn.addEventListener('click', function(evt) {
  if(cardEls) {
    for(let i = 0; i < cardEls.length; i++) {
      cardEls[i].style.visibility = 'visible'
      cardEls[i].style.visibility = 'hidden'
    }
  } 
  console.log('button clicked')
  countdown(1)

  gameStarted = true
  checkGameStart()
})


// functions (init, render, compare cards, timer)

// initiates the game
init()

// displays back of cards by hiding the front of the cards
front.forEach(function(card) {
  card.style.visibility = 'hidden'
})

// iterates through shuffled board array to reveal the emoji of the card
// and get the name of the emojis in a dataset
let shuffledCards = shuffle(board)
cardEls.forEach(function(card, idx) {
  card.innerHTML = shuffledCards[idx].emoji
  card.dataset.name = shuffledCards[idx].name
  
})

// function to compare the first and second cards
function compare(evt) {
  // count counts the number of clicks
  if(count === 1) {
    // firstCard is set to the front of the first card clicked
    firstCard = evt.target.children[0]
    
    // dev tools purposes
    console.log(firstCard)
    console.log(secondCard)
    // increase the count because the second click will be set to the
    // second card
    count++
  }
  else if (count === 2) {
    // secondCard is set to the front of the second card clicked
    secondCard = evt.target.children[0]
    
    // dev tools purposes
    console.log(firstCard)
    console.log(secondCard)

    // checking if the object elements are equal
    if(firstCard.dataset.name === secondCard.dataset.name) {
      // dev tools purposes
      console.log('you found a match')

      // make the first and second cards stay visible if a match
      firstCard.style.visibility = 'visible'
      secondCard.style.visibility = 'visible'

      // increase match to find all of the matchs
      matches++
      // when there are 8 matches send an alert
      if(matches === 8) {
        msg.style.visibility = 'visible'
        beatTimerMsg.style.visibility = 'hidden'
        loseMsg.style.visibility = 'hidden'
        counter.style.visibility = 'hidden'
        gameStarted = false
      }
    }

    // if more than 1 card have been clicked AND the first and second cards
    // don't match then hide the fronts of the cards
    else if(count > 1 && firstCard !== secondCard) {
      // dev tool purposes
      console.log('no match')

      // hide the fronts of cards after 1 second
      setTimeout(function() {
        firstCard.style.visibility = 'hidden'
        secondCard.style.visibility = 'hidden'
      }, 1000)
    }

    // decrease count to select the first of another pair
    count--
  }
}

// function to shuffle board array
function shuffle(board) {
  let i = board.length
  let j
  while(i > 0) {
    // j is set to a random number from 0 to i
    j = Math.floor(Math.random() * i)
    i--
    
    // temp is a temporary number holding board[i] to then make board[j]
    // equal that value
    let temp = board[i]
    board[i] = board[j]
    board[j] = temp
  }
  return board
}

// initial function
function init() {
  renderBoard()
  checkGameStart()
}

function checkGameStart() {
  // if gameStarted is false, cards can't be clicked
  if(gameStarted === false) {
    cardsContainerEl.style.pointerEvents = 'none'
  }
  // cards can be clicked when gameStarted is true
  else {
    cardsContainerEl.style.pointerEvents = 'auto'
  }
  
}

// render board function
function renderBoard() {
    renderShuffle()
}

// render shuffle function
function renderShuffle() {
  const boardData = shuffle(board)
  return boardData
}

// timer function

// pass in the timer minutes
function countdown(minutes) {
  let seconds = 60;
  let mins = minutes
  function tick() {
    let current_minutes = mins - 1
    seconds--

    // counter element in 00:00
    counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)
    if( seconds > 0 ) {
        setTimeout(tick, 1000)
      } 
    else if (mins > 1){
          countdown(mins-1)     
    }
    else {
      counter.style.visibility = 'hidden'
      if (matches < 8) {
        loseMsg.style.visibility = 'visible'
        gameStarted = false
      }
    }
  }
  if(matches === 8) return
  tick();
}