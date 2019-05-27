import React from 'react'
import HeaderLogoTextStyle from './HeaderLogoTextStyle'
import AmsterdamLogo from '../AmsterdamLogo/AmsterdamLogo'
import HeaderTitleStyle from './HeaderTitleStyle'

type Props = {
  homeLink: string
  title?: string
  tall?: boolean
}

const HeaderLogoText: React.FC<Props> = ({
  title,
  homeLink,
  tall,
  ...otherProps
}) => (
  <HeaderLogoTextStyle {...otherProps}>
    <AmsterdamLogo href={homeLink} {...{ tall }} />
    {title && <HeaderTitleStyle href={homeLink}>{title}</HeaderTitleStyle>}
  </HeaderLogoTextStyle>
)

export default HeaderLogoText