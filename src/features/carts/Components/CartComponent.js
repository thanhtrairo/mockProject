
import clsx from 'clsx'
import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { removeCart, setDownQuatity, setUpQuatity } from '../cartSlice'

import styles from './index.module.scss'

function CartComponent() {
  const carts = useSelector(state => state.carts.cartItems)
  const dispatch = useDispatch()

  const totalCart = useMemo(() => {
    const results = carts.reduce((acc, cur) => {
      return acc + cur.quatity * cur.prices
    }, 0)

    return results
  }, [carts])

  const history = useHistory()

  const handleSubmit = () => {
    history.push("/login?redirect=shipping")
  }

  return (
    <>
      <div className={clsx(styles.CartComponent)}>
        <div className={clsx(styles.cartTitle, 'row')}>
          <h5 className='col-1'>Ảnh</h5>
          <h5 className='col-3'>Tên sản phẩm</h5>
          <h5 className='col-2'>Giá</h5>
          <h5 className='col-3'>Số lượng</h5>
          <h5 className='col-3'>Tổng tiền</h5>
        </div>
        {carts.length === 0 ? <div className=" alert alert-info text-center my-3">
          Giỏ hàng trống
          <Link
            className="btn btn-dark mx-5 px-5 py-3"
            to="/products"
            style={{
              fontSize: "12px",
            }}
          >
            QUAY LẠI SHOP
          </Link>
        </div>
          : carts.map(cart => (
            <div className={clsx('row', styles.cartItem)} key={cart.id}>
              <div className={clsx(styles.image, 'col-1')}>
                <img src={cart.imageURL} alt={cart.name}/>
              </div>
              <p className={clsx('col-3')}>{cart.name}</p>
              <p className={clsx('col-2', styles.prices)}>{cart.prices} đ</p>
              <div className={clsx(styles.cartQuatity, 'col-3')}>
                <button onClick={() => dispatch(setDownQuatity(cart))}>-</button>
                <span>{cart.quatity}</span>
                <button onClick={() => dispatch(setUpQuatity(cart))}>+</button>
              </div>
              <p className={clsx('col-3', styles.prices)}>
                <span>{cart.quatity * cart.prices} đ</span>
                <i onClick={() => dispatch(removeCart(cart))} className="fa fa-trash-alt"></i>
              </p>
            </div>
          ))}
        {carts.length !== 0 && <div className={clsx(styles.cartBuy)}>
          <div>
            <Link to="/products">
              <button>Tiếp tục mua hàng</button>
            </Link>
          </div>
          <div>
            <button onClick={handleSubmit}>Mua ngay</button>
            <span className={clsx(styles.pricesTotal)}>{totalCart} đ</span>
          </div>
        </div>}
      </div>
    </>
  )
}

export default CartComponent