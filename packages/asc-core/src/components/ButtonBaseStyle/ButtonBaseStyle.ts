import { transitions } from 'polished'
import { Theme } from '../../theme'
import styled from '../../styled-components'
import { color as themeColor, focusStyle } from '../../utils'
import { flexboxMinHeightFix } from '../shared/ie-fixes'

export type Props = {
  color?: Theme.TypeLevel
  square?: boolean
  hoverColor?: string
  href?: string
  size?: number
}

const ButtonBaseStyle = styled.button<Props>`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: normal;
  padding: 0 10px 0 10px;
  ${focusStyle()}
  ${transitions(['color', 'background-color'], '0.1s ease-in-out')}
  background: ${({ color, theme }) => themeColor(color)({ theme })};

  &:hover {
    background: ${({ color, theme }) =>
      color
        ? themeColor(color, 'dark')({ theme })
        : themeColor('tint', 'level3')({ theme })};
  }

  ${flexboxMinHeightFix()}
`

export default ButtonBaseStyle
