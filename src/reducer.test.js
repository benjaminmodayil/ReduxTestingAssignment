import { hotColdReducer } from './reducer.js'
import { makeGuess } from './actions'

const rndAns = 33

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: ''
}

describe('hotColdReducer', () => {
  it('Should return the current state on an unknown action', () => {
    const state = hotColdReducer(undefined, { type: '__UNKNOWN' })
    let { correctAnswer } = state
    initialState.correctAnswer = correctAnswer

    expect(state).toEqual(initialState)
  })

  it('Should return the current state on an unknown action', () => {
    let currentState = {}
    const state = hotColdReducer(currentState, { type: '__UNKNOWN' })
    expect(state).toBe(currentState)
  })

  it('Should add a guess', () => {
    let state = {
      guesses: [32, 11]
    }
    let expectedGuesses = [32, 11, 35]
    state = hotColdReducer(state, makeGuess(35))
    expect(state.guesses).toEqual(expect.arrayContaining(expectedGuesses))
  })
})
