import styled from '../../styled-components'
import { ContextMenu } from './types'
import { getColorFromTheme } from '../../utils'

const ContextMenuList = styled.ul<ContextMenu.ContextMenuListProps>`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  &:focus {
    outline: none;
  }
`
export default ContextMenuList

export const ContextMenuListWrapper = styled.div.attrs(() => ({
  role: 'menu',
  tabIndex: -1,
}))<ContextMenu.ContextMenuListProps>`
  order: ${({ position }) => (position === 'bottom' ? -1 : 0)};
  background-color: ${({ theme }) =>
    getColorFromTheme(theme, 'tint', 'level1')};
  border: 1px solid ${({ theme }) => getColorFromTheme(theme, 'tint', 'level7')};
  max-width: 250px;
  width: 100%;
  &:focus {
    outline: none;
  }
`