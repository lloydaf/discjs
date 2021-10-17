import { selector } from 'recoil'
import { stateAtom } from './atoms'
import { defaultResultState } from './constants'

export const getResults = selector({
  key: 'getResults',
  get: ({get}) => {
    const pages = get(stateAtom)
    return Array.from(Object.values(pages)).reduce((acc, page) => {
      switch(page.least){
      case 'Z': {
        acc = {...acc, zMin: acc.zMin+1}
        break
      }
      case 'SQ': {
        acc = {...acc, sqMin: acc.sqMin+1}
        break
      }
      case 'TRI': {
        acc = {...acc, triMin: acc.triMin+1}
        break
      }
      case 'STAR': {
        acc = {...acc, starMin: acc.starMin+1}
        break
      }
      }
      switch(page.most){
      case 'Z': {
        acc = {...acc, zMost: acc.zMost+1}
        break
      }
      case 'SQ': {
        acc = {...acc, sqMost: acc.sqMost+1}
        break
      }
      case 'TRI': {
        acc = {...acc, triMost: acc.triMost+1}
        break
      }
      case 'STAR': {
        acc = {...acc, starMost: acc.starMost+1}
        break
      }
      }
      return {...acc}
    }, defaultResultState)
  }
})
