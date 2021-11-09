import React, { useEffect, useState } from 'react'

import { useRecoilState } from 'recoil'
import { useHistory } from 'react-router'

import { Table, TableRow, TableHeaderCell, TableCell, Box, TextButton, Checkbox, Button, Card, Text } from '@freenow/wave'

import { Page as PageType, Sign } from '../types'
import { State } from '../store/constants'
import { stateAtom } from '../store/atoms'

export const Page = ({ page }: { page: PageType }): JSX.Element => {
  const history = useHistory()

  const [data, setData] = useRecoilState(stateAtom)
  const pageData = data[page.pageNumber]


  const [least, setLeast] = useState<{ index?: number, value?: Sign }>()
  const [most, setMost] = useState<{ index?: number, value?: Sign }>()

  useEffect(() => {
    setLeast({
      value: pageData.least && pageData.least,
      index: pageData.least && page.fields.findIndex(field => field.least === pageData.least)
    })
    setMost({
      value: pageData.most && pageData.most,
      index: pageData.most && page.fields.findIndex(field => field.most === pageData.most)
    })
  }, [pageData])

  const clear = () => {
    setLeast(undefined)
    setMost(undefined)
  }

  const setPageDataAndNavigate = () => {
    if(!most?.value || !least?.value) return
    const state: State = {...data,[page.pageNumber]: {most: most.value, least: least.value}}
    setData(state)
    history.push(`/pages/${page.pageNumber+1}`)
  }

  return (
    <Card level="100">
      <Table rowStyle="zebra" width="100%">
        <thead id="heading" >
          <TableRow>
            <TableHeaderCell scope="col">Attribute</TableHeaderCell>
            <TableHeaderCell scope="col">Most</TableHeaderCell>
            <TableHeaderCell scope="col">Least</TableHeaderCell>
          </TableRow>
        </thead>
        <tbody id="body">
          {page.fields.map((field, index) => (
            <TableRow key={field.text}>
              <TableCell scope="row">{field.text}</TableCell>
              <TableCell scope="row">
                <Checkbox value={field.most} disabled={(most?.index !== undefined  && most?.index !== index) || (least?.index !== undefined && least?.index == index)} onChange={e => e.target.checked ? setMost({ index, value: e.target.value as Sign }) : setMost(undefined)} checked={most?.index === index} />
              </TableCell>
              <TableCell scope="row">
                <Checkbox value={field.least} disabled={(most?.index !== undefined && most?.index == index) || (least?.index!== undefined && least?.index !== index)} onChange={e => e.target.checked ? setLeast({ index, value: e.target.value as Sign }) : setLeast(undefined)} checked={least?.index === index} />
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <Box id="footer" display="flex" justifyContent="space-between" mt={1}>
        <Button disabled={!most?.value || !least?.value} onClick={setPageDataAndNavigate}>Continue</Button>
        <Button onClick={() => history.push(`/pages/${page.pageNumber-1}`)}>Back</Button>
        <TextButton onClick={clear} mr="1"><Text weak>Clear</Text></TextButton>
      </Box>
    </Card>
  )
}
