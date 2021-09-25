import React from 'react'

import { Card, Box, Text, Checkbox } from '@freenow/wave'

import { Page as PageType } from '../types'

export const Page = ({ page }: { page: PageType }) => {

  return (
    <Card>
      <Box>
        <Text>Attribute</Text>
        <Text>Most</Text>
        <Text>Least</Text>
      </Box>
      {page.fields.map(field => (
        <Box>
          <Text>{field.text}</Text>
          <Checkbox value={field.most} />
          <Checkbox value={field.least} />
        </Box>
      ))}
    </Card>
  )
}