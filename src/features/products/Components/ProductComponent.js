import clsx from 'clsx'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from '../index.module.scss'

function ProductComponent() {

    const products = useSelector(state => state.products)
    
    const dispatch = useDispatch()

    return (
        <div className={clsx(styles.productList)}>
            <div className={clsx('row')}>
                {products.map((product) => (
                <div className={clsx('col-3', 'mb-4')} key={product.id}>
                    <div className={clsx(styles.item)}>
                        <div className={clsx(styles.image)}>
                            <img src={product.imageURL} />
                            <div className={clsx(styles.icon)}>
                                <div className={clsx(styles.overlay)}>
                                    <button>
                                        <img src='//theme.hstatic.net/200000397757/1000764296/14/heart.svg?v=860' />
                                    </button>
                                    <span className={clsx('btn', 'btn-dark')}>Yêu thích</span>
                                </div>
                            </div>
                        </div>
                        <div className={clsx(styles.productText)}>
                            <p>{product.name}</p>
                            <p>{product.prices}</p>
                        </div>
                        <div className={clsx(styles.cart)}>
                            <button className={clsx('btn','btn-dark')}>Thêm vào giỏ</button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default ProductComponent