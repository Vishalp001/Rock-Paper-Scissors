let userSore = 0
let compScore = 0
const userScore_span = document.getElementById('user-score')
const compScore_span = document.getElementById('comp-score')
const scoreBoard__div = document.querySelector('.score-board')
const result_p = document.querySelector('.result > p')
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissors_div = document.getElementById('s')

function getCompChoice() {
  const choices = ['r', 'p', 's']
  const randomNumber = Math.floor(Math.random() * 3)
  return choices[randomNumber]
}

function converToWord(letter) {
  if (letter === 'r') return 'Rock'
  if (letter === 'p') return 'Paper'
  return 'Scissors'
}

function win(userChoice, computerChoice) {
  const userChoiceClass = document.getElementById(userChoice)
  userSore++
  userScore_span.innerHTML = userSore
  result_p.innerHTML = `${converToWord(userChoice)} beats ${converToWord(
    computerChoice
  )} You wins`
  document.getElementById
  userChoiceClass.classList.add('green-Glow')
  setTimeout(() => {
    userChoiceClass.classList.remove('green-Glow')
  }, 300)
}

function lose(userChoice, computerChoice) {
  const userChoiceClass = document.getElementById(userChoice)
  compScore++
  compScore_span.innerHTML = compScore
  result_p.innerHTML = `${converToWord(computerChoice)} beats ${converToWord(
    userChoice
  )} You Loose`
  userChoiceClass.classList.add('red-Glow')
  setTimeout(() => {
    userChoiceClass.classList.remove('red-Glow')
  }, 300)
}
function draw(userChoice, computerChoice) {
  const userChoiceClass = document.getElementById(userChoice)
  result_p.innerHTML = `${converToWord(userChoice)} Equals ${converToWord(
    computerChoice
  )} It is Draw`
  userChoiceClass.classList.add('gray-Glow')
  setTimeout(() => {
    userChoiceClass.classList.remove('gray-Glow')
  }, 300)
}

function game(userChoice) {
  const computerChoice = getCompChoice()
  // console.log('Computer Choice: ' + computerChoice)
  // console.log('User Choice: ' + userChoice)
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice)
      break
    case 'sr':
    case 'rp':
    case 'ps':
      lose(userChoice, computerChoice)
      break
    case 'ss':
    case 'rr':
    case 'pp':
      draw(userChoice, computerChoice)
      break
  }
}

function main() {
  rock_div.addEventListener('click', function () {
    game('r')
  })
  paper_div.addEventListener('click', function () {
    game('p')
  })
  scissors_div.addEventListener('click', function () {
    game('s')
  })
}

main()
