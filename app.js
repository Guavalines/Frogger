const timeLeftDisplay = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const StartPauseButton = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')
const logsleft = document.querySelectorAll('.log-left')
console.log(squares)
let currentIndex = 76
const width = 9

function moveFrog(e) {
  squares[currentIndex].classList.remove('frog')

  switch(e.key) {
    case 'ArrowLeft' :
      if (currentIndex % width !== 0) currentIndex -= 1
      break
    case 'ArrowRight' :
      if (currentIndex % width < width - 1) currentIndex += 1
      break
    case 'ArrowUp' :
      if (currentIndex - width >=0 ) currentIndex -= width
      break
    case 'ArrowDown' :
      if (currentIndex + width < width * width) currentIndex += width
      break
  }


  squares[currentIndex].classList.add('frog')
}
document.addEventListener('keyup', moveFrog)

function autoMoveLogs() {
  logsleft.forEach(logLeft => moveLogLeft(logLeft))
}

function moveLogLeft(logLeft) {
  switch(true) {
    case logLeft.classList.contains('l1') :
      logLeft.classList.remove('l1')
      logLeft.classList.add('l2')
      break
    case logLeft.classList.contains('l2') :
      logLeft.classList.remove('l2')
      logLeft.classList.add('l3')
      break
    case logLeft.classList.contains('l3') :
      logLeft.classList.remove('l3')
      logLeft.classList.add('l4')
      break
    case logLeft.classList.contains('l4') :
      logLeft.classList.remove('l4')
      logLeft.classList.add('l5')
      break
    case logLeft.classList.contains('l5') :
      logLeft.classList.remove('l5')
      logLeft.classList.add('l1')
      break
  }
}

setInterval(autoMoveLogs, 1000)
