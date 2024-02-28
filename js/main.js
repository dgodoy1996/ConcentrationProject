// state variables (array of 6 columns, winner/not winner, )
let board = [
  {name: 'dog', emoji: '🐶'}, 
  {name: 'cat', emoji: '🐱'},
  {name: 'mouse', emoji: '🐭'},
  {name: 'bunny', emoji: '🐰'},
  {name: 'fox', emoji: '🦊'},
  {name: 'bear', emoji: '🐻'},
  {name: 'panda', emoji: '🐼'},
  {name: 'koala', emoji: '🐨'},
  {name: 'tiger', emoji: '🐯'},
  {name: 'lion', emoji: '🦁'},
  {name: 'cow', emoji: '🐮'},
  {name: 'pig', emoji: '🐷'},
  {name: 'frog', emoji: '🐸'},
  {name: 'monkey', emoji: '🐵'},
  {name: 'chick', emoji: '🐤'},
  {name: 'penguin', emoji: '🐧'},
  {name: 'owl', emoji: '🦉'},
  {name: 'horse', emoji: '🐴'},
  {name: 'dog', emoji: '🐶'}, 
  {name: 'cat', emoji: '🐱'},
  {name: 'mouse', emoji: '🐭'},
  {name: 'bunny', emoji: '🐰'},
  {name: 'fox', emoji: '🦊'},
  {name: 'bear', emoji: '🐻'},
  {name: 'panda', emoji: '🐼'},
  {name: 'koala', emoji: '🐨'},
  {name: 'tiger', emoji: '🐯'},
  {name: 'lion', emoji: '🦁'},
  {name: 'cow', emoji: '🐮'},
  {name: 'pig', emoji: '🐷'},
  {name: 'frog', emoji: '🐸'},
  {name: 'monkey', emoji: '🐵'},
  {name: 'chick', emoji: '🐤'},
  {name: 'penguin', emoji: '🐧'},
  {name: 'owl', emoji: '🦉'},
  {name: 'horse', emoji: '🐴'}
]


// constants (An object with cards and another object with copies of cards)
let firstCard
let secondCard
let count = 1
let matches = 0


// cache elements (win/lose msg, timer, play again button)
const cardEls = document.querySelectorAll('.cards > .card > .front') //for event listener
const cardsContainerEl = document.querySelector('.cards') //for event listener
const front = document.querySelectorAll('.front')
const back = document.querySelectorAll('.back')


// event listeners
cardsContainerEl.addEventListener('click', function(evt) {
  console.log(evt.target)
  evt.target.children[0].style.visibility = 'visible'
  evt.target.children[1].style.visibility = 'hidden'
  
  if(count === 1) {
    firstCard = evt.target.children[0]
    
    console.log(firstCard)
    console.log(secondCard)
    count++
  }
  else if (count === 2) {
    secondCard = evt.target.children[0]
    
    console.log(firstCard)
    console.log(secondCard)
    if(firstCard.dataset.name === secondCard.dataset.name) {
      console.log('you found a match')
      firstCard.style.visibility = 'visible'
      secondCard.style.visibility = 'visible'
      matches++
      if(matches === 18) {
        alert("YOU WON 🎉")
        
      }
    }
    else if(count > 1 && firstCard !== secondCard) {
      console.log('no match')
      setTimeout(function() {
        firstCard.style.visibility = 'hidden'
        secondCard.style.visibility = 'hidden'
      }, 1500)
    }
    count--
  }
})



// functions (init, render, compare cards)
init()

front.forEach(function(card) {
  card.style.visibility = 'hidden'
})

back.forEach(function(card) {
  card.style.display = 'none'
})

let shuffledCards = shuffle(board)
cardEls.forEach(function(card, idx) {
  card.innerHTML = shuffledCards[idx].emoji
  card.dataset.name = shuffledCards[idx].name
  
})

function shuffle(board) {
  let i = board.length, j
  while(i > 0) {
    j = Math.floor(Math.random() * i)
    i--
    
    [board[i], board[j]] = [board[j], board[i]]
  }
  return board
}

function init() {
  renderBoard()
}

function renderBoard() {
  const boardData = shuffle(board)
  return boardData
}

