import React from 'react'
import { ReactComponent as LogoShort } from '@datapunt/asc-assets/lib/Icons/LogoShort.svg'
import { ReactComponent as LogoTall } from '@datapunt/asc-assets/lib/Icons/LogoTall.svg'
import AmsterdamLogoStyle from '../../styles/components/AmsterdamLogo/AmsterdamLogoStyle'

type Props = {
  tall?: boolean
  tabindex?: number
}

const AmsterdamLogo: React.FC<Props> = ({ tall, ...otherProps }) => (
  <AmsterdamLogoStyle href="/" {...{ tall }} {...otherProps}>
    <LogoShort />
    <LogoTall />
  </AmsterdamLogoStyle>
)

export default AmsterdamLogo
