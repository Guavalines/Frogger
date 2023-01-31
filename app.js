const timeLeftDisplay = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const StartPauseButton = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')
console.log(squares)
let currentIndex = 76
function moveFrog() {

  switch(e) {
    case 'ArrowLeft' :
      console.log('move left')
      currentIndex -= 1
      break
    case 'ArrowRight' :
      console.log('move right')
      currentIndex += 1
      break
    case 'ArrowUp' :
      console.log('move up')
      break
    case 'ArrowDown' :
      console.log('move down')
      break

  }


  squares[currentIndex].classList.add('frog')
}
document.addEventListener('keyup', moveFrog)
