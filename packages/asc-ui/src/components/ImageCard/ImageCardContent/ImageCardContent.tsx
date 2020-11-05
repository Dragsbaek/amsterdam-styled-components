import React from 'react'
import ImageCardContentStyle from './ImageCardContentStyle'

const ImageCardContent: React.FunctionComponent<React.HTMLAttributes<
  HTMLElement
>> = ({ children, ...otherProps }) => (
  <ImageCardContentStyle {...otherProps}>{children}</ImageCardContentStyle>
)

export default ImageCardContent
