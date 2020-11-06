import * as React from 'react'

import CardStyle, { Props } from './CardStyle'

const Card: FunctionComponent<Props> = ({ children, ...otherProps }) => (
  <CardStyle {...otherProps}>{children}</CardStyle>
)

export default Card
