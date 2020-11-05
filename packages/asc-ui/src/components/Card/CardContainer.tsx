import React from 'react'

import CardContainerStyle from './CardContainerStyle'

const CardContainer: React.FunctionComponent = ({
  children,
  ...otherProps
}) => <CardContainerStyle {...otherProps}>{children}</CardContainerStyle>

export default CardContainer
