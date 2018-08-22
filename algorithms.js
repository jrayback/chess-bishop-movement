// chess move algorithms
const BOARD_WIDTH = 8 // defines the width and length of a chess board in squares

function locateSquare (square) {
  return {
    row: determineRow(square),
    column: determineColumn(square)
  }
}

function areSameSquare (square1, square2) {
  return square1.row === square2.row && square1.column === square2.column
}

// Determine if the squares are diagonal
function areDiagonal (oSquare, dSquare) {
  // This determines diagonality,
  // return false if squares are the same
  return (!areSameSquare(oSquare, dSquare)) &&
          (Math.abs(oSquare.row - dSquare.row) === Math.abs(oSquare.column - dSquare.column))
}

// By getting row and column, the color of the squares can be determined
function areOppositeColors (oSquare, dSquare) {
  // Check the difference between row and column.
  // If both are odd or both are even, they are the same color.
  // Otherwise they are not.
  return Math.abs(oSquare.row - oSquare.column) % 2 !== Math.abs(dSquare.row - dSquare.column) % 2
}

// calculate the row from square alone
function determineRow (square) {
  return Math.floor(square / BOARD_WIDTH)
}

// calculate the column from square alone
function determineColumn (square) {
  return square % BOARD_WIDTH
}

// check to see if the square is out of range
function isOutOfRange (square) {
  return square < 0 || square > (BOARD_WIDTH * BOARD_WIDTH) - 1
}

module.exports.numChessMovesBishop = (originSquare, destinationSquare) => {
  let oSquare = locateSquare(originSquare)
  let dSquare = locateSquare(destinationSquare)
  if (isOutOfRange(originSquare) || isOutOfRange(destinationSquare)) {
    throw new RangeError('Squares must be numbered 0 - 63')
  } else if (areDiagonal(oSquare, dSquare)) {
    return 1
  } else if (areOppositeColors(oSquare, dSquare)) {
    return -1
  } else if (originSquare === destinationSquare) {
    return 0
  } else {
    return 2
  }
}
