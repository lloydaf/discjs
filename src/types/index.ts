export type Likelihood = 'most' | 'least'

export type Sign = 'Z' | 'SQ' | 'TRI' | 'STAR' | 'N'

export type LikelihoodSignPair = Record<Likelihood, Sign | undefined>

export type Field = LikelihoodSignPair & {
  text: string
}

export type Page = {
  pageNumber: number
  fields: Field[]
}

export type PageState = {
  pages: Page[]
}


export type PageMostLeastPair = {
  pageNumber: number
  most: Sign
  least: Sign
}