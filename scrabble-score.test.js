import { calculateScrabbleScore } from "./scrabble-score";
import {test,expect} from 'vitest'

test('calculate score for letter A',() =>{
    expect(calculateScrabbleScore('A')).toBe(1)
})