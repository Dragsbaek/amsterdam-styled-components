import React from 'react'
import FilterOptionStyle, { Props } from './FilterOptionStyle'

const FilterOption: React.FunctionComponent<
  Props & React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ children, ...otherProps }) => (
  <FilterOptionStyle {...otherProps}>{children}</FilterOptionStyle>
)

export default FilterOption
