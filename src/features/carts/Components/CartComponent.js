
import clsx from 'clsx'
import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart, setDownQuatity, setUpQuatity } from '../cartSlice'

import styles from './index.module.scss'

function CartComponent() {
  const carts = useSelector(state => state.carts)
  const dispatch = useDispatch()
  
  const totalCart = useMemo(() => {
    const results = carts.reduce((acc, cur) => {
      return acc + cur.quatity * cur.prices
    },0)

    return results
  },[carts])
  
  return (
    <div className={clsx(styles.CartComponent)}>
      <div className={clsx(styles.cartTitle, 'row')}>
        <h5 className='col-1'>Ảnh</h5>
        <h5 className='col-3'>Tên sản phẩm</h5>
        <h5 className='col-2'>Giá</h5>
        <h5 className='col-3'>Số lượng</h5>
        <h5 className='col-3'>Tổng tiền</h5>
      </div>
      {carts.length === 0 ? <h3 style={{textAlign: 'center',padding: '30px 0'}}>Không có sản phẩm nào</h3>
      :carts.map(cart => (
        <div className={clsx('row',styles.cartItem)} key={cart.id}>
          <div className={clsx(styles.image, 'col-1')}>
            <img src={cart.imageURL}/>
          </div>
          <p className={clsx('col-3')}>{cart.name}</p>
          <p className={clsx('col-2', styles.prices)}>{cart.prices} đ</p>
          <div className={clsx(styles.cartQuatity,'col-3')}>
            <button onClick={() => dispatch(setDownQuatity(cart))}>-</button>
            <span>{cart.quatity}</span>
            <button onClick={() => dispatch(setUpQuatity(cart))}>+</button>
          </div>
          <p className={clsx('col-3', styles.prices)}>
            <span>{cart.quatity * cart.prices} đ</span>
            <button onClick={() => dispatch(removeCart(cart))}>Xóa</button>
          </p>
        </div>
      ))}
      <div className={clsx(styles.cartBuy)}>
        <button>Mua ngay</button>
        <p className={clsx(styles.pricesTotal)}>{totalCart} đ</p>
      </div>
    </div>
  )
}

export default CartComponent