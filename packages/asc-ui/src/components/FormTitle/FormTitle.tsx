import React from 'react'
import FormTitleStyle from './FormTitleStyle'

const FormTitle: React.FunctionComponent<React.HTMLAttributes<HTMLElement>> = ({
  children,
  ...otherProps
}) =>
  children ? <FormTitleStyle {...otherProps}>{children}</FormTitleStyle> : null

export default FormTitle
