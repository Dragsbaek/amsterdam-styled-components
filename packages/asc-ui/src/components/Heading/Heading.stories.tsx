import * as React from 'react'
import Heading from './Heading'

export default {
  title: 'Atoms/Typography/Heading',
}

export const DefaultStyle = () => (
  <>
    <Heading>Heading one</Heading>
    <Heading forwardedAs="h2">Heading two</Heading>
    <Heading forwardedAs="h3">Heading three</Heading>
    <Heading forwardedAs="h4">Heading four</Heading>
  </>
)
