
import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { getProduct } from '../productSlice'
import clsx from 'clsx'


import ProductComponent from './ProductComponent'
import styles from '../index.module.scss'
import Api from '../../../api/Api'

function ProductList() {

    const [downCategory, setDownCategory] = useState('d-block')
    const [downBrand, setDownBrand] = useState('d-block')
    const [downPrice, setDownPrice] = useState('d-block')
    
    const handledownCategory = () => {
        if(downCategory === 'd-block') {
            setDownCategory('d-none')
        }else {
            setDownCategory('d-block')
        }
    }
    const handledownBrand = () => {
        if(downBrand === 'd-block') {
            setDownBrand('d-none')
        }else {
            setDownBrand('d-block')
        }
    }
    const handledownPrice = () => {
        if(downPrice === 'd-block') {
            setDownPrice('d-none')
        }else {
            setDownPrice('d-block')
        }
    }
    const products = useSelector(state => state.products)

    const dispatch = useDispatch()

    const totalProduct = useMemo(() => {
        return products.length
    },[products.length])

    const totalProductJean = useMemo(() => {
        const count = products.filter(product => product.type === '1').length
        return count
    },[products.length])

    const totalProductTShirt = useMemo(() => {
        const count = products.filter(product => product.type === '2').length
        return count
    },[products.length])

    const totalProducTaccessory = useMemo(() => {
        const count = products.filter(product => product.type === '3').length
        return count
    },[products.length])

    const fetchProducts = async () => {
        try {
            const results = await axios.get(Api)
            dispatch(getProduct(results.data))
        } catch (error) {
            console.log("Err: ", error)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>
            <div className={clsx('container', 'my-4')}>
                <img src="//theme.hstatic.net/200000397757/1000764296/14/collection-banner.jpg?v=860" alt="" />
            </div>
            <div className={clsx("container")}>
                <div className={clsx("row")}>
                    <div className={clsx(styles.category, 'col-3', 'py-3')}>
                        <ul>
                            <li>
                                <div className={clsx(styles.title)} onClick={(handledownCategory)}>
                                    <span>Danh mục sản phẩm</span><span>+</span>
                                </div>
                                <ul className={downCategory}>
                                    <li>
                                        <div className={clsx(styles.categoryList)}>
                                            <input type="checkbox" name="" id="" />
                                            <label htmlFor="">Tất cả sản phẩm</label>
                                            <strong>{totalProduct}</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={clsx(styles.categoryList)}>
                                            <input type="checkbox" name="" id="" />
                                            <label htmlFor="">Quần jean</label>
                                            <strong>{totalProductJean}</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={clsx(styles.categoryList)}>
                                            <input type="checkbox" name="" id="" />
                                            <label htmlFor="">T-Shirt</label>
                                            <strong>{totalProductTShirt}</strong>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={clsx(styles.categoryList)}>
                                            <input type="checkbox" name="" id="" />
                                            <label htmlFor="">Phụ Kiện Trang Sức</label>
                                            <strong>{totalProducTaccessory}</strong>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className={clsx(styles.title)} onClick={(handledownBrand)}>
                                    <span>Thương hiệu</span><span>+</span>
                                </div>
                                <ul className={downBrand}>
                                    <li>
                                        <div className={clsx(styles.categoryList)}>
                                            <input type="checkbox" name="" id="" />
                                            <label htmlFor="">kalies</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={clsx(styles.categoryList)}>
                                            <input type="checkbox" name="" id="" />
                                            <label htmlFor="">Monki</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={clsx(styles.categoryList)}>
                                            <input type="checkbox" name="" id="" />
                                            <label htmlFor="">Levi</label>
                                        </div>
                                    </li>
                                </ul></li>
                            <li>
                                <div className={clsx(styles.title)} onClick={(handledownPrice)}>
                                    <span>Lọc giá</span><span>+</span>
                                </div>
                                <ul className={downPrice}>
                                    <li>
                                        <div className={clsx(styles.categoryList)}>
                                            <input type="checkbox" name="" id="" />
                                            <label htmlFor="">Dưới 200000đ</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={clsx(styles.categoryList)}>
                                            <input type="checkbox" name="" id="" />
                                            <label htmlFor="">200000đ - 300000đ</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={clsx(styles.categoryList)}>
                                            <input type="checkbox" name="" id="" />
                                            <label htmlFor="">300000đ - 400000đ</label>
                                        </div>
                                    </li>
                                </ul></li>
                        </ul>
                    </div>
                    <div className={clsx(styles.products, 'col-9')}>
                        <div className={clsx(styles.titleCategory, 'd-flex', 'justify-content-between', 'align-items-center')}>
                            <h2>Tất cả sản phẩm</h2>
                            <div className={clsx(styles.sort)}>
                                <span>Sắp xếp:</span>
                                <select>
                                    <option value="">Giá: tăng dần</option>
                                    <option value="">Giá: giảm dần</option>
                                    <option value="">Tên: A-Z</option>
                                    <option value="">Tên: Z-A</option>
                                </select>
                            </div>
                        </div>
                        <ProductComponent />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProductList