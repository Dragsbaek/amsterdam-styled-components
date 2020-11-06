import * as React from 'react'
import ListItemStyle, { Props as ListItemStyleProps } from './ListItemStyle'

type Props = ListItemStyleProps

const ListItem: FunctionComponent<Props> = ({ children, ...otherProps }) => (
  <ListItemStyle {...otherProps}>{children}</ListItemStyle>
)

export default ListItem
