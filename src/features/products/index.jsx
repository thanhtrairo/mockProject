
import React from 'react';
import clsx from 'clsx'
import { Link } from 'react-router-dom';

import ProductList from './Components/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Global.scss'

function Products() {
    return (
        <div>
            <div className={clsx('main_wrap')}>
                <div className={clsx('header', 'containerCustom', 'py-2')}>
                <Link to='/'>Trang chủ </Link>
                    <span>/ Tất cả sản phẩm</span>
                </div>
            </div>
            <ProductList />
        </div>
    )
}

export default Products