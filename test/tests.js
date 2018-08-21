/* eslint-env mocha */
const expect = require('chai').expect
const algorithm = require('../algorithms')

// tests for chess moves algorithms
function getActual (originSquare, destinationSquare) {
  return algorithm.numChessMovesBishop(originSquare, destinationSquare)
}

// engine to check range errors
function checkRange (originSquare, destinationSquare) {
  let message = `Should throw a range error when sent ${originSquare} and ${destinationSquare}`
  it(message, function () {
    expect(function () {
      algorithm.numChessMovesBishop(originSquare, destinationSquare)
    }).to.throw(RangeError)
  })
}

// engine to check two squares vs. expected result
function checkMove (originSquare, destinationSquare, expected) {
  let message = `Should return ${expected} when sent ${originSquare} and ${destinationSquare}`
  it(message, function () {
    let actual = getActual(originSquare, destinationSquare)
    expect(actual).to.equal(expected)
  })
}

describe('[Number of Bishop Chess Moves Tests]', function () {
  describe('Out of range:', function () {
    // try both ways
    checkRange(104, 0)
    checkRange(0, 203)
  })
  describe('Identical squares:', function () {
    checkMove(1, 1, 0)
  })
  describe('Directly diagonal move:', function () {
    // try various combinations
    checkMove(0, 9, 1)
    checkMove(21, 3, 1)
    checkMove(31, 59, 1)
    checkMove(25, 4, 1)
  })
  describe('Opposite colors:', function () {
    // try various combinations
    checkMove(0, 7, -1)
    checkMove(0, 62, -1)
    checkMove(56, 54, -1)
  })
  describe('All other moves:', function () {
    // try various combinations
    checkMove(0, 11, 2)
    checkMove(48, 59, 2)
  })
})
