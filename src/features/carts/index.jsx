
import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import CartComponent from './Components/CartComponent'

function Cart() {
  return (
    <div>
      <div className={clsx('main_wrap')}>
        <div className={clsx('header', 'containerCustom', 'py-2')}>
          <Link to='/'>Trang chủ </Link>
          <span>/ Chi tiết giỏ hàng</span>
        </div>
      </div>
      <CartComponent />
    </div>
  )
}

export default Cart