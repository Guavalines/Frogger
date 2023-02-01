const timeLeftDisplay = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const StartPauseButton = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')
console.log(squares)
let currentIndex = 76
const width = 9

function moveFrog(e) {
  squares[currentIndex].classList.remove('frog')

  switch(e.key) {
    case 'ArrowLeft' :
      console.log('move left')
      if (currentIndex % width !== 0) currentIndex -= 1
      break
    case 'ArrowRight' :
      console.log('move right')
      if (currentIndex % width < width - 1) currentIndex += 1
      break
    case 'ArrowUp' :
      console.log('move up')
      if (currentIndex - width >=0 ) currentIndex -= width
      break
    case 'ArrowDown' :
      console.log('move down')
      currentIndex += width
      break

  }


  squares[currentIndex].classList.add('frog')
}
document.addEventListener('keyup', moveFrog)
