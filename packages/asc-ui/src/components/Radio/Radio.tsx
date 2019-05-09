import * as React from 'react'
import {
  RadioGroupStyle,
  RadioLabelStyle,
  RadioItemStyle,
} from '../../styles/components/RadioStyle'

interface Props {
  id: string
  name?: string
  label: string
  value?: string
  defaultChecked?: boolean
  disabled?: boolean
}

const Radio = ({ id, value, label, disabled }: Props) => (
  <RadioItemStyle>
    <RadioLabelStyle htmlFor={id} disabled={disabled}>
      {label || value}
    </RadioLabelStyle>
  </RadioItemStyle>
)

export default Radio

export const RadioGroup: React.FC<{}> = ({ children, ...otherProps }) => (
  <RadioGroupStyle {...otherProps}>{children}</RadioGroupStyle>
)
