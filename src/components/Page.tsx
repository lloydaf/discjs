import React, { useState } from 'react'

import { Card, Box, Text, Checkbox, Button } from '@freenow/wave'

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
      <Box id="heading" >
        <Box display="flex" justifyContent="space-evenly" background="red">
          <Text>Attribute</Text>
          <Text>Most</Text>
          <Text>Least</Text>
        </Box>
      </Box>
      <Box id="body">
        {page.fields.map((field, index) => (
          <Box key={field.text} display="flex" justifyContent="space-evenly" background="green">
            <Text>{field.text}</Text>
            <Checkbox value={field.most} disabled={most?.index !== undefined && most.index !== index} onChange={e => e.target.checked ? setMost({ index, value: e.target.value }) : setMost(undefined)} checked={most?.index === index} />
            <Checkbox value={field.least} disabled={least?.index !== undefined && least.index !== index} onChange={e => e.target.checked ? setLeast({ index, value: e.target.value }) : setLeast(undefined)} checked={least?.index === index} />
          </Box>
        ))}
      </Box>
      <Box id="footer">
        <Button onClick={clear}>Clear</Button>
        <Button>Continue</Button>
      </Box>
    </Card>
  )
}
