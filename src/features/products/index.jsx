
import React from 'react';
import ProductList from './Components/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Global.scss'
import HeaderPath from '../Components/HeaderPath';

function Products() {
    return (
        <div>
            <HeaderPath>Tất cả các sản phẩm</HeaderPath>
            <ProductList />
        </div>
    )
}

export default Products