// state variables (array of 6 columns, winner/not winner, )
let board = [
  {name: 'dog', emoji: '🐶'}, 
  {name: 'cat', emoji: '🐱'},
  {name: 'dog', emoji: '🐶'}, 
  {name: 'cat', emoji: '🐱'}
]


// constants (An object with cards and another object with copies of cards)
const findEmoji = board.findIndex(function(boardPiece) {
  return boardPiece.name === `${board.name}`
})


// cache elements (win/lose msg, timer, play again button)
const cardEls = document.querySelectorAll('.cards > .card > .front') //for event listener
const cardsContainerEl = document.querySelector('.cards') //for event listener
const cardsEl = document.querySelector('.card')
const front = document.querySelectorAll('.front')
const back = document.querySelectorAll('.back')

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
  
  // card.style.visibility = 'hidden'
})

//2 value array
let valArr

// event listeners (click on cards, timer, click play again)
  cardsContainerEl.addEventListener('click', function(evt) {
    console.log(evt.target)
    evt.target.children[0].style.visibility = 'visible'
    evt.target.children[1].style.visibility = 'hidden'
     //change array for comparison
    //push value in array (evt.target.dataset.name) from line 45/46
    // valArr = 
    //push second value
    //compare values
    //if match display boxes
    //else if not a match hide boxes
  })



// functions (init, render, compare cards)
init()

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





  
//   {name: 'mouse', emoji: '🐭'}, {name: 'bunny', emoji: '🐰'}, {name: 'fox', emoji: '🦊'}, {name: 'bear', emoji: '🐻'},
//   {name: 'panda', emoji: '🐼'}, {name: 'koala', emoji: '🐨'}, {name: 'tiger', emoji: '🐯'}, {name: 'lion', emoji: '🦁'}, {name: 'cow', emoji: '🐮'}, {name: 'pig', emoji: '🐷'},
//   {name: 'frog', emoji: '🐸'}, {name: 'monkey', emoji: '🐵'}, {name: 'penguin', emoji: '🐧'}, {name: 'chick', emoji: '🐤'}, {name: 'horse', emoji: '🐴'}, {name: 'owl', emoji: '🦉'},
//   {name: 'dog', emoji: '🐶'}, {name: 'cat', emoji: '🐱'}, {name: 'mouse', emoji: '🐭'}, {name: 'bunny', emoji: '🐰'}, {name: 'fox', emoji: '🦊'}, {name: 'bear', emoji: '🐻'},
//   {name: 'panda', emoji: '🐼'}, {name: 'koala', emoji: '🐨'}, {name: 'tiger', emoji: '🐯'}, {name: 'lion', emoji: '🦁'}, {name: 'cow', emoji: '🐮'}, {name: 'pig', emoji: '🐷'},
//   {name: 'frog', emoji: '🐸'}, {name: 'monkey', emoji: '🐵'}, {name: 'penguin', emoji: '🐧'}, {name: 'chick', emoji: '🐤'}, {name: 'horse', emoji: '🐴'}, {name: 'owl', emoji: '🦉'}
// ]

// let outcome






//   board = [
//     ['🐶', '🐱', '🐭', '🐰', '🦊', '🐻'],
//     ['🐼', '🐨', '🐯', '🦁', '🐮', '🐷'],
//     ['🐸', '🐵', '🐧', '🐤', '🐴', '🦉'],
//     ['🐶', '🐱', '🐭', '🐰', '🦊', '🐻'],
//     ['🐼', '🐨', '🐯', '🦁', '🐮', '🐷'],
//     ['🐸', '🐵', '🐧', '🐤', '🐴', '🦉']
//   ]
//   outcome = null
//   render()
// }
// function handleDrop(evt) {
//   const idx = frontEl.indexOf(evt.target)
//   frontEl.style.visibility = 'visible'
//   render()
// }

// function renderCard() {

// }

// function renderBoard(board) {
//   cardsEl.forEach(function(e), idx {

//   })
// }

// function renderControls() {

// }

// function renderMessages() {

// }

// function render() {
//     renderCard();
//     renderBoard();
//     renderControls();
//     renderMessages();

// }
