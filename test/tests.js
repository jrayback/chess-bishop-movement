/* eslint-env mocha */
const expect = require('chai').expect
const algorithm = require('../algorithms')

// verify mocha is working and that basic plumbing into algorithm module is working
describe('[Baseline Tests]', () => {
  it('Should equal true when comparing true to true', () => {
    expect(true).to.equal(true)
  })
  it('Should return expected test greeting', () => {
    const expected = 'hello world!'
    const actual = algorithm.returnGreeting()
    expect(actual).to.equal(expected)
  })
})

// tests for chess moves algorithms
function getActual (originSquare, destinationSquare) {
  return algorithm.numChessMovesBishop(originSquare, destinationSquare)
}

describe('[Number of Chess Moves Tests]', () => {
  it('Should throw a range error if the passed in number for either square is out of range', () => {
    // try both ways
    expect(() => {
      algorithm.numChessMovesBishop(104, 0)
    }).to.throw(RangeError)
    expect(() => {
      algorithm.numChessMovesBishop(0, 203)
    }).to.throw(RangeError)
  })
  it('Should return 0 when sent identical squares', () => {
    const originSquare = 1
    const destinationSquare = 1
    const expected = 0
    const actual = getActual(originSquare, destinationSquare)
    expect(actual).to.equal(expected)
  })
  it('Should return 1 when the destination square is directly diagonal from the origin square', () => {
    const expected = 1
    let actual
    // Try several iterations of diagonal moves in different lengths and directions
    actual = getActual(0, 9)
    expect(actual).to.equal(expected)
    actual = getActual(21, 3)
    expect(actual).to.equal(expected)
    actual = getActual(31, 59)
    expect(actual).to.equal(expected)
    actual = getActual(25, 4)
    expect(actual).to.equal(expected)
  })
  it('Should return -1 if the destination square is an opposite color from the origin square', () => {
    const expected = -1
    let actual
    // test a few just to be sure
    actual = getActual(0, 7)
    expect(actual).to.equal(expected)
    actual = getActual(0, 62)
    expect(actual).to.equal(expected)
    actual = getActual(56, 54)
    expect(actual).to.equal(expected)
  })
  it('Should return 2 in any case other than squares directly diagonal or squares of opposite color', () => {
    const originSquare = 0
    const destinationSquare = 11
    const expected = 2
    const actual = getActual(originSquare, destinationSquare)
    expect(actual).to.equal(expected)
  })
})
