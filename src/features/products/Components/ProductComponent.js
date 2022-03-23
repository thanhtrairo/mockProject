import clsx from 'clsx'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import styles from '../index.module.scss'
import img from '../img/loading.gif'

function ProductComponent({onSortFind}) {

    const products = useSelector(state => state.products)

    return (
        <div className={clsx(styles.productList)}>
            <div className={clsx('row')}>
                {products.length === 0 ? <img src={img} style={{width: '20%'}}/> : (onSortFind?.length > 0 ? onSortFind : products).map((product) => (
                <div className={clsx('col-3', 'mb-4')} key={product.id}>
                    <div className={clsx(styles.item, styles.productImage)}>
                        <Link to={`/products/${product.id}`}>
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
                        </Link>
                        <div className={clsx(styles.productText)}>
                            <p>{product.name}</p>
                            <p>{product.prices} đ</p>
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

export default memo(ProductComponent)