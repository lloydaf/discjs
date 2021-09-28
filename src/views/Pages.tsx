import React from 'react'

import { useParams } from 'react-router-dom'

import { state } from '../data'
import { Page as PageType } from '../types'

import { Page as PageComponent } from '../components/Page'

export const Pages = (): JSX.Element => {
  const { pageId } = useParams<{ pageId: string }>()

  const page: PageType | undefined = state.pages.find(({ pageNumber }) => pageNumber.toString() === pageId)

  return page && <PageComponent page={page} /> || <></>
}