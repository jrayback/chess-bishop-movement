const algorithms = require('./algorithms')

const messages = [
  'This move cannot be made!',
  'The piece is already on this square...',
  'This move is one chess move...',
  'This move is two chess moves...'
]

let originSquare
let destinationSquare
let result

originSquare = 27
destinationSquare = 13
result = algorithms.numChessMovesBishop(originSquare, destinationSquare)
console.log(`You want to move from ${originSquare} to ${destinationSquare}...
RESULT: ${messages[result + 1]}
`)

originSquare = 9
destinationSquare = 22
result = algorithms.numChessMovesBishop(originSquare, destinationSquare)
console.log(`You want to move from ${originSquare} to ${destinationSquare}...
RESULT: ${messages[result + 1]}
`)

originSquare = 35
destinationSquare = 35
result = algorithms.numChessMovesBishop(originSquare, destinationSquare)
console.log(`You want to move from ${originSquare} to ${destinationSquare}...
RESULT: ${messages[result + 1]}
`)

originSquare = 8
destinationSquare = 15
result = algorithms.numChessMovesBishop(originSquare, destinationSquare)
console.log(`You want to move from ${originSquare} to ${destinationSquare}...
RESULT: ${messages[result + 1]}
`)
