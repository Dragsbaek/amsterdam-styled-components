import * as React from 'react'
import HeaderLinksStyle from './HeaderLinksStyle'

const HeaderLinks: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...otherProps
}) => <HeaderLinksStyle {...otherProps}>{children}</HeaderLinksStyle>

export default HeaderLinks
