import { Spinner as SpinnerIcon } from '@amsterdam/asc-assets'
import React from 'react'
import Icon from '../Icon/Icon'
import SpinnerStyle, { Props } from './SpinnerStyle'

const Spinner: React.FunctionComponent<Props> = ({
  size,
  color,
  ...otherProps
}) => (
  <SpinnerStyle size={size} {...otherProps}>
    {/* @ts-ignore */}
    <Icon size={size} color={color}>
      <SpinnerIcon />
    </Icon>
  </SpinnerStyle>
)

Spinner.defaultProps = {
  size: 20,
}

export default Spinner
