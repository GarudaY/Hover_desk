const board = document.querySelector('#board')
const colors = ['red', 'blue', 'green', 'yellow', 'purple']
const squaresNumber = 450

for (let i = 0; i < squaresNumber; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))

  square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square)
}

function setColor(e) {
  const color = getRandomColor()
  e.style.backgroundColor = color
  e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(e) {
  e.style.backgroundColor = '#1d1d1d'
  e.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}