import { atom } from 'recoil'
import { defaultState } from './constants'

export const stateAtom = atom({key: 'pageState',default: defaultState})
