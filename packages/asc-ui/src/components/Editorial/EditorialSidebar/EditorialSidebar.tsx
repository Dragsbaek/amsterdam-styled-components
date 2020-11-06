import * as React from 'react'
import EditorialSidebarStyle from './EditorialSidebarStyle'

const EditorialContent: FunctionComponent<HTMLAttributes<HTMLElement>> = ({
  children,
  ...otherProps
}) => <EditorialSidebarStyle {...otherProps}>{children}</EditorialSidebarStyle>

export default EditorialContent
