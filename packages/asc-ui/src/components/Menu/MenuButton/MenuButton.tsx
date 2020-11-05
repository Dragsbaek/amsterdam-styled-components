import React from 'react'
import MenuButtonStyle, {
  MenuButtonTextStyle,
  MenuButtonTextWrapperStyle,
  Props,
} from './MenuButtonStyle'

const MenuButton: React.FunctionComponent<Props> = ({
  children,
  as,
  ...otherProps
}) => (
  <MenuButtonStyle
    forwardedAs={as}
    iconSize={14}
    variant="blank"
    {...otherProps}
  >
    <MenuButtonTextWrapperStyle>
      <MenuButtonTextStyle>{children}</MenuButtonTextStyle>
    </MenuButtonTextWrapperStyle>
  </MenuButtonStyle>
)

export default MenuButton
