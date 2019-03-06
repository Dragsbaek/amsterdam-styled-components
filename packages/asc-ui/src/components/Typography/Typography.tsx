import React from 'react'
import { AscCore } from '@datapunt/asc-core'

const Typography: React.FC<AscCore.Typography.Props> = ({
  children,
  element,
  ...otherProps
}) => {
  const TypographyElement = AscCore.Typography.default(element || 'p')

  return <TypographyElement {...otherProps}>{children}</TypographyElement>
}

export default Typography