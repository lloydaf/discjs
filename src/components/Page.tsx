import React, { ReactNode } from 'react'

import { Card, Box, Text, Checkbox } from '@freenow/wave'

import { Page as PageType } from '../types'

const Page = ({ page }: { page: PageType }): ReactNode => (
  <Card>
    <Box>
      <Text>Attribute</Text>
      <Text>Most</Text>
      <Text>Least</Text>
    </Box>
    {page.fields.map((field) => (
      <Box key={field.text}>
        <Text>{field.text}</Text>
        <Checkbox value={field.most} />
        <Checkbox value={field.least} />
      </Box>
    ))}
  </Card>
)

export default Page
