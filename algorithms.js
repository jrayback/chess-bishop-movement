// chess move algorithms
const BOARD_WIDTH = 8 // defines the width and length of a chess board in squares

// This actually works great to determine diagonality in both directions,
// don't need to convert to x/y coordinates at all for this...
function areDiagonal (originSquare, destinationSquare) {
  return ((originSquare - destinationSquare) % (BOARD_WIDTH + 1) === 0 ||
          (originSquare - destinationSquare) % (BOARD_WIDTH - 1) === 0)
}

// By getting row and column, the color of the squares can be determined
function areOppositeColors (originSquare, destinationSquare) {
  let originRow = determineRow(originSquare)
  let originColumn = determineColumn(originSquare)
  let destinationRow = determineRow(destinationSquare)
  let destinationColumn = determineColumn(destinationSquare)
  // Check the difference between row and column.
  // If both are odd or both are even, they are the same color.
  // Otherwise they are not.
  return ((originRow - originColumn) % 2) !== ((destinationRow - destinationColumn) % 2)
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
  if (isOutOfRange(originSquare) || isOutOfRange(destinationSquare)) {
    throw new RangeError('Squares must be numbered 0 - 63')
  } else if (areOppositeColors(originSquare, destinationSquare)) {
    return -1
  } else if (originSquare === destinationSquare) {
    return 0
  } else if (areDiagonal(originSquare, destinationSquare)) {
    return 1
  } else {
    return 2
  }
}
