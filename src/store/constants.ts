import { LikelihoodSignPair } from '../types'

export type State = Record<number, LikelihoodSignPair>

export const defaultState: State = Array(28).fill(0).reduce((acc, _, index) => ({ ...acc, [index+1]: {}}), {})

type ResultState = {
  zMost: number,
  zMin: number,
  sqMost: number,
  sqMin: number,
  triMost: number,
  triMin: number,
  starMost: number,
  starMin: number
}

export const defaultResultState: ResultState = {
  zMost: 0,
  zMin: 0,
  sqMost: 0,
  sqMin: 0,
  triMost: 0,
  triMin: 0,
  starMost: 0,
  starMin: 0
}
