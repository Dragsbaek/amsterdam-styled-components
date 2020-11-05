import React from 'react'
import OrderedListStyle from './OrderedListStyle'

const OrderedList: React.FunctionComponent<React.HTMLAttributes<
  HTMLUListElement
>> = ({ children, ...otherProps }) => {
  return <OrderedListStyle {...otherProps}>{children}</OrderedListStyle>
}

export default OrderedList
