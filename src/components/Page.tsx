import React, { useState } from 'react'

import { Table, TableRow, TableHeaderCell, TableCell, Box, TextButton, Checkbox, Button, Card, Text } from '@freenow/wave'

import { Page as PageType } from '../types'

export const Page = ({ page }: { page: PageType }): JSX.Element => {
  const [least, setLeast] = useState<{ index: number, value: string }>()
  const [most, setMost] = useState<{ index: number, value: string }>()

  const clear = () => {
    setLeast(undefined)
    setMost(undefined)
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
                <Checkbox value={field.most} disabled={(most?.index !== undefined && most.index !== index) || (least?.index !== undefined && least.index == index)} onChange={e => e.target.checked ? setMost({ index, value: e.target.value }) : setMost(undefined)} checked={most?.index === index} />
              </TableCell>
              <TableCell scope="row">
                <Checkbox value={field.least} disabled={(most?.index !== undefined && most.index == index) || (least?.index !== undefined && least.index !== index)} onChange={e => e.target.checked ? setLeast({ index, value: e.target.value }) : setLeast(undefined)} checked={least?.index === index} />
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <Box id="footer" display="flex" justifyContent="space-between" mt={1}>
        <Button disabled={!most || !least}>Continue</Button>
        <TextButton onClick={clear} mr="1"><Text weak>Clear</Text></TextButton>
      </Box>
    </Card>
  )
}
