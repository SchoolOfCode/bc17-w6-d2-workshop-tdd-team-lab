import { calculateScrabbleScore } from "./scrabble-score";
import {test,expect} from 'vitest'

test('calculate score for letter D',() =>{
    expect(calculateScrabbleScore('D')).toBe(2)
})

test('calculate score for letter B',() =>{
    expect(calculateScrabbleScore('B')).toBe(3)
})