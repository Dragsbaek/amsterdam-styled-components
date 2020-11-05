import React from 'react'
import EditorialContentStyle from './EditorialContentStyle'

const EditorialContent: React.FunctionComponent<React.HTMLAttributes<
  HTMLElement
>> = ({ children, ...otherProps }) => (
  <EditorialContentStyle {...otherProps}>{children}</EditorialContentStyle>
)

export default EditorialContent
