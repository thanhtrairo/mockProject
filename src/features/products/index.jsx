
import React from 'react';
import clsx from 'clsx'

import ProductList from './Components/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.module.scss'



function Products() {
    return (
        <div className={clsx(styles.main)}>
            <div className={clsx(styles.main_wrap)}>
                <div className={clsx(styles.header, 'container', 'py-2')}>
                    <a href="">Trang chủ </a>
                    <span>/ Tất cả sản phẩm</span>
                </div>
            </div>
            <ProductList />
        </div>
    )
}

export default Products