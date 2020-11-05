import React from 'react'
import { ContainerStyle, ContainerWrapperStyle, Props } from './ContainerStyle'

const Container: React.FunctionComponent<
  Props & React.HTMLAttributes<HTMLDivElement>
> = ({ beamColor, maxWidth, children, ...otherProps }) => (
  <ContainerWrapperStyle>
    <ContainerStyle beamColor={beamColor} maxWidth={maxWidth} {...otherProps}>
      {children}
    </ContainerStyle>
  </ContainerWrapperStyle>
)

export default Container
