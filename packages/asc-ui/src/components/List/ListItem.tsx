import React from 'react'
import ListItemStyle, { Props as ListItemStyleProps } from './ListItemStyle'

type Props = ListItemStyleProps

const ListItem: React.FunctionComponent<Props> = ({
  children,
  ...otherProps
}) => <ListItemStyle {...otherProps}>{children}</ListItemStyle>

export default ListItem
