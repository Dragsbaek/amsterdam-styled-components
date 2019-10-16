import React from 'react'
import { Checkmark } from '@datapunt/asc-assets'
import CheckboxStyle, {
  CheckboxIconStyle,
  CheckboxWrapperStyle,
  Props,
} from './CheckboxStyle'

const Checkbox: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({
  checked: checkedProp,
  className,
  onChange,
  variant,
  disabled,
  ...otherProps
}) => {
  const [checked, setChecked] = React.useState(!!checkedProp)
  const [focus, setFocus] = React.useState(false)

  return (
    <CheckboxWrapperStyle
      {...{ className, disabled, focus, checked }}
      aria-disabled={disabled}
    >
      <CheckboxIconStyle {...{ disabled, variant, checked }} size={15}>
        {checked && <Checkmark />}
      </CheckboxIconStyle>
      <CheckboxStyle
        {...{ ...otherProps, disabled, checked }}
        onFocus={() => {
          setFocus(true)
        }}
        onBlur={() => setFocus(false)}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (onChange) {
            onChange(e)
          }
          setChecked(!checked)
        }}
      />
    </CheckboxWrapperStyle>
  )
}

export default Checkbox
