
import React from 'react'
import CartComponent from './Components/CartComponent'
import HeaderPath from '../Components/HeaderPath'

function Cart() {
  return (
    <div>
      <HeaderPath>Giỏ hàng</HeaderPath>
      <CartComponent />
    </div>
  )
}

export default Cart