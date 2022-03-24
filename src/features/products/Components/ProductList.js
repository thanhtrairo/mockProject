
import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct, removeProduct } from '../productSlice'
import clsx from 'clsx'


import ProductComponent from './ProductComponent'
import styles from '../index.module.scss'
import Api from '../../../api/Api'

function ProductList() {

    const [downCategory, setDownCategory] = useState('d-block')
    const [downBrand, setDownBrand] = useState('d-block')
    const [downPrice, setDownPrice] = useState('d-block')

    const handledownCategory = () => {
        if (downCategory === 'd-block') {
            setDownCategory('d-none')
        } else {
            setDownCategory('d-block')
        }
    }
    const handledownBrand = () => {
        if (downBrand === 'd-block') {
            setDownBrand('d-none')
        } else {
            setDownBrand('d-block')
        }
    }
    const handledownPrice = () => {
        if (downPrice === 'd-block') {
            setDownPrice('d-none')
        } else {
            setDownPrice('d-block')
        }
    }
    const products = useSelector(state => state.products)

    const [productType, setProductType] = useState()

    const caculatorTotal = (type) => {
        if (type === '1') {
            return totalProductJean
        }
        if (type === '2') {
            return totalProductTShirt
        }
        if (type === '3') {
            return totalProducTaccessory
        }
    }

    useEffect(() => {
        if (products.length !== 0) {
            const newProductType = () => {
                const type1 = products.find(product => product.type === '1')
                const type2 = products.find(product => product.type === '2')
                const type3 = products.find(product => product.type === '3')
                const newArr = [type1, type2, type3]
                return newArr
            }
            setProductType(newProductType)
        }
    }, [products.length])

    const [productBrand, setProductBrand] = useState()

    useEffect(() => {
        if (products.length !== 0) {
            const newProductBrand = () => {
                const brand1 = products.find(product => product.brand === 'Kalies')
                const brand2 = products.find(product => product.brand === 'Monki')
                const brand3 = products.find(product => product.brand === 'Levi')
                const newArr = [brand1, brand2, brand3]
                return newArr
            }
            setProductBrand(newProductBrand())
        }
    }, [products.length])

    const [productPrice, setProductPrice] = useState()

    useEffect(() => {
        if (products.length !== 0) {
            const newProductPrice = () => {
                const price1 = products.find(product => product.typePrice === 'small')
                const price2 = products.find(product => product.typePrice === 'medium')
                const price3 = products.find(product => product.typePrice === 'big')
                const newArr = [price1, price2, price3]
                return newArr
            }
            setProductPrice(newProductPrice())
        }
    }, [products.length])
    const dispatch = useDispatch()

    const totalProductJean = useMemo(() => {
        const count = products.filter(product => product.type === '1').length
        return count
    }, [products.length])

    const totalProductTShirt = useMemo(() => {
        const count = products.filter(product => product.type === '2').length
        return count
    }, [products.length])

    const totalProducTaccessory = useMemo(() => {
        const count = products.filter(product => product.type === '3').length
        return count
    }, [products.length])

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

    const converType = (type) => {
        if (type === '1') return 'Quần Jean'
        if (type === '2') return 'T-Shirt'
        if (type === '3') return 'Túi sách'
    }

    const converPrice = (type) => {
        if (type === 'small') return 'Dưới 200000 đ'
        if (type === 'medium') return '200000 đ - 300000 đ'
        if (type === 'big') return 'Lớn hơn 300000 đ'
    }

    const [check, setCheck] = useState()

    const [findProductType, setFindProductType] = useState()
    const [selectSortFind, setSelectSortFind] = useState()

    const handleFindType = (id, e) => {
        setCheck({
            id: id,
            value: e.target.value
        })
        setFindProductType(e.target.value)
        setSelectSortFind({ isFind: true })
    }

    const [findProductBrand, setFindProductBrand] = useState()
    const handleFindBrand = (id, e) => {
        setCheck({
            id: id,
            value: e.target.value
        })
        setFindProductBrand(e.target.value)
        setSelectSortFind({ isFind: true })
    }

    const [findProductPrice, setFindProductPrice] = useState()
    const handleFindPrice = (id, e) => {
        setCheck({
            id: id,
            value: e.target.value
        })
        setFindProductPrice(e.target.value)
        setSelectSortFind({ isFind: true })
    }

    const productFind = useMemo(() => {

        if (findProductType && (check.value === '1' || check.value === '2' || check.value === '3')) {
            if (findProductType === '1') return products.filter(product => product.type === '1')
            if (findProductType === '2') return products.filter(product => product.type === '2')
            if (findProductType === '3') return products.filter(product => product.type === '3')
        }

        if (findProductBrand && (check.value === 'Kalies' || check.value === 'Monki' || check.value === 'Levi')) {
            if (findProductBrand === 'Kalies') return products.filter(product => product.brand === 'Kalies')
            if (findProductBrand === 'Monki') return products.filter(product => product.brand === 'Monki')
            if (findProductBrand === 'Levi') return products.filter(product => product.brand === 'Levi')
        }

        if (findProductPrice && (check.value === 'small' || check.value === 'medium' || check.value === 'big')) {
            if (findProductPrice === 'small') return products.filter(product => product.typePrice === 'small')
            if (findProductPrice === 'medium') return products.filter(product => product.typePrice === 'medium')
            if (findProductPrice === 'big') return products.filter(product => product.typePrice === 'big')
        }

        return products
    }, [findProductType, findProductBrand, findProductPrice])

    const [sort, setSort] = useState()

    const handleSort = (e) => {
        setSort(e.target.value)
        setSelectSortFind({ isSort: true })
    }

    const sortProduct = useMemo(() => {

        const newArr = [...products]
        if (sort === 'priceUp') {
            return newArr.sort((a, b) => {
                return parseInt(a.prices) - parseInt(b.prices)
            })
        }

        if (sort === 'priceDown') {
            return newArr.sort((a, b) => {
                return parseInt(b.prices) - parseInt(a.prices)
            })
        }

        if (sort === 'nameUp') {
            return newArr.sort((a, b) => {
                let nameA = a.name.toLowerCase()
                let nameB = b.name.toLowerCase()
                if (nameA < nameB) return -1
                if (nameA > nameB) return 1
                return 0
            })
        }

        if (sort === 'nameDown') {
            return newArr.sort((a, b) => {
                let nameA = a.name.toLowerCase()
                let nameB = b.name.toLowerCase()
                if (nameA > nameB) return -1
                if (nameA < nameB) return 1
                return 0
            })
        }

        return newArr
    }, [sort])

    const handleSortFindProducts = useMemo(() => {
        if (selectSortFind?.isSort === true) {
            setCheck()
            return sortProduct
        }

        if (selectSortFind?.isFind === true) {
            setSort('selectDafault')
            return productFind
        }

    }, [sort, check])

    const [sidebar, setSidebar] = useState(false)

    return (
        <div>
            <div className={clsx('containerCustom', 'my-4')}>
                <img src="//theme.hstatic.net/200000397757/1000764296/14/collection-banner.jpg?v=860" alt="" />
            </div>
            <div className={clsx("containerCustom",styles.mainProduct)}>
                <div className={clsx("row",styles.productContent)}>
                    <div onClick={() => setSidebar(!sidebar)} className={clsx(styles.iconSidebar,'d-block', 'd-sm-none','col-1')}>☰</div>
                    <div className={clsx(styles.category,styles.categorySibar,{[styles.translateSibar]: sidebar}, 'd-none', 'd-sm-block', 'col-sm-4', 'col-md-3', 'py-3')}>
                        <ul>
                            <li>
                                <div className={clsx('title')} onClick={(handledownCategory)}>
                                    <span>Danh mục sản phẩm</span><span>{downCategory === 'd-block' ? '-' : '+'}</span>
                                </div>
                                <ul className={downCategory}>
                                    {productType && productType.map(product => (
                                        <li key={product.id}>
                                            <div className={clsx(styles.categoryList)}>
                                                <input
                                                    type="checkbox"
                                                    value={product.type}
                                                    checked={check?.id === product.id && check?.value === product.type}
                                                    onChange={(e) => handleFindType(product.id, e)}
                                                />
                                                <label htmlFor="">{converType(product.type)}</label>
                                                <strong>{`(${caculatorTotal(product.type)})`}</strong>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li>
                                <div className={clsx('title')} onClick={(handledownBrand)}>
                                    <span>Thương hiệu</span><span>{downBrand === 'd-block' ? '-' : '+'}</span>
                                </div>
                                <ul className={downBrand}>
                                    {productBrand && productBrand.map(product => (
                                        <li key={product.id}>
                                            <div className={clsx(styles.categoryList)}>
                                                <input
                                                    type="checkbox"
                                                    value={product.brand}
                                                    checked={check?.id === product.id && check?.value === product.brand}
                                                    onChange={(e) => handleFindBrand(product.id, e)}
                                                />
                                                <label htmlFor="">{product.brand}</label>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li>
                                <div className={clsx('title')} onClick={(handledownPrice)}>
                                    <span>Lọc giá</span><span>{downPrice === 'd-block' ? '-' : '+'}</span>
                                </div>
                                <ul className={downPrice}>
                                    {productPrice && productPrice.map(product => (
                                        <li key={product.id}>
                                            <div className={clsx(styles.categoryList)}>
                                                <input
                                                    type="checkbox"
                                                    value={product.typePrice}
                                                    checked={check?.id === product.id && check?.value === product.typePrice}
                                                    onChange={(e) => handleFindPrice(product.id, e)}
                                                />
                                                <label htmlFor="">{converPrice(product.typePrice)}</label>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className={clsx(styles.products, 'col-11', 'col-sm-8', 'col-md-9')}>
                        <div className={clsx(styles.titleCategory, 'd-flex', 'justify-content-between', 'align-items-center')}>
                            <h2>Tất cả sản phẩm</h2>
                            <div className={clsx(styles.sort)}>
                                <span>Sắp xếp:</span>
                                <select value={sort} onChange={e => handleSort(e)}>
                                    <option value="selectDafault">Chọn</option>
                                    <option value="priceUp">Giá: tăng dần</option>
                                    <option value="priceDown">Giá: giảm dần</option>
                                    <option value="nameUp">Tên: A-Z</option>
                                    <option value="nameDown">Tên: Z-A</option>
                                </select>
                            </div>
                        </div>
                        <ProductComponent onSortFind={handleSortFindProducts} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductList