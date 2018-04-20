import toBeType from 'jest-tobetype'
import {
  GENERATE_AURAL_UPDATE,
  generateAuralUpdate,
  RESTART_GAME,
  restartGame,
  MAKE_GUESS,
  makeGuess
} from './actions.js'

expect.extend(toBeType)

describe('generateAuralUpdate', () => {
  it('Should return the action', () => {
    const update = ' Test Test'
    const action = generateAuralUpdate()
    expect(action.type).toEqual(GENERATE_AURAL_UPDATE)
  })
})

describe('restartGame', () => {
  it('Should return the action', () => {
    const answer = 32
    const action = restartGame(answer)
    expect(action.type).toEqual(RESTART_GAME)
    expect(action.correctAnswer).toEqual(32)
    expect(action.correctAnswer).toBeType('number')
  })
})

describe('makeGuess', () => {
  it('Should return the action', () => {
    const guess = 23
    const action = makeGuess(guess)
    expect(action.type).toEqual(MAKE_GUESS)
    expect(action.guess).toEqual(guess)
    expect(action.guess).toBeType('number')
  })
})
