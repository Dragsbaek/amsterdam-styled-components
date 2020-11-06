import { ReactNode } from 'react'
import * as React from 'react'
import HeaderContentStyle from './HeaderContentStyle'

type Props = {
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>

const HeaderContent: FunctionComponent<Props> = ({
  children,
  ...otherProps
}) => <HeaderContentStyle {...otherProps}>{children}</HeaderContentStyle>

export default HeaderContent
