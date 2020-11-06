import * as React from 'react'
import EditorialPostStyle from './EditorialPostStyle'
import BackgroundImage from '../../BackgroundImage'

export type Props = {
  StyledComponent?: any
  image?: string
} & HTMLAttributes<HTMLElement>

const EditorialPost: FunctionComponent<Props> = ({
  children,
  image,
  StyledComponent,
  ...otherProps
}) => (
  <StyledComponent hasImage={!!image} {...otherProps}>
    {image && (
      <BackgroundImage
        aspectRatio={44}
        size="cover"
        position="top center"
        source={image}
      />
    )}
    {children}
  </StyledComponent>
)

EditorialPost.defaultProps = {
  StyledComponent: EditorialPostStyle,
}

export default EditorialPost
