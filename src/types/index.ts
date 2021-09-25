export type Likelihood = 'most' | 'least'

export type Sign = 'Z' | 'SQ' | 'TRI' | 'STAR' | 'N'

type LikelihoodSignPair = Record<Likelihood, Sign>

export type Field = LikelihoodSignPair & {
  text: string
}

export type Page = {
  pageNumber: number
  fields: Field[]
}

export type State = {
  pages: Page[]
}
