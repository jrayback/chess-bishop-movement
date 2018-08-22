// chess move algorithms
const BOARD_WIDTH = 8 // defines the width and length of a chess board in squares

// struct used to represent a square with row and column values
class Square {
  constructor (squareNumber) {
    this.row = determineRow(squareNumber)
    this.column = determineColumn(squareNumber)
  }
}

// calculate the row from square number alone
function determineRow (squareNumber) {
  return Math.floor(squareNumber / BOARD_WIDTH)
}

// calculate the column from square number alone
function determineColumn (squareNumber) {
  return squareNumber % BOARD_WIDTH
}

// check to see if the square number is out of range
function isOutOfRange (squareNumber) {
  return squareNumber < 0 || squareNumber > (BOARD_WIDTH * BOARD_WIDTH) - 1
}

// checks two square objects and returns true if they are the same square
function areSameSquare (square1, square2) {
  return square1.row === square2.row && square1.column === square2.column
}

// Determine if the squares are diagonal
function areDiagonal (originSquare, destinationSquare) {
  // This determines diagonality,
  // return false if squares are the same
  return (!areSameSquare(originSquare, destinationSquare)) &&
          (Math.abs(originSquare.row - destinationSquare.row) === Math.abs(originSquare.column - destinationSquare.column))
}

// Determine if squares are of opposite colors
function areOppositeColors (originSquare, destinationSquare) {
  // Check the difference between row and column.
  // If both are odd or both are even, they are the same color.
  // Otherwise they are not.
  return Math.abs(originSquare.row - originSquare.column) % 2 !== Math.abs(destinationSquare.row - destinationSquare.column) % 2
}

// Main function. Used to determine number of chess moves it takes a bishop
// to go from origin square to destination square (numbered 0 - 63)
module.exports.numChessMovesBishop = (originNumber, destinationNumber) => {
  let originSquare = new Square(originNumber)
  let destinationSquare = new Square(destinationNumber)
  if (isOutOfRange(originNumber) || isOutOfRange(destinationNumber)) {
    throw new RangeError('Squares must be numbered 0 - 63')
  } else if (areDiagonal(originSquare, destinationSquare)) {
    return 1
  } else if (areOppositeColors(originSquare, destinationSquare)) {
    return -1
  } else if (areSameSquare(originSquare, destinationSquare)) {
    return 0
  } else {
    // return 2
  }
}
