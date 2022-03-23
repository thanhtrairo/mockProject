
import axios from 'axios'
import clsx from 'clsx'
import React, {useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Api from '../../../api/Api'

import styles from '../index.module.scss'
import { removeSelectProduct, selectProduct } from '../selectProductSlice'

function ProductDetail() {

  const tabs = ['Payment', 'Lie', 'Comment']

  const [type, setType] = useState('Payment')
  const [post, setPost] = useState({
    Payment: 'd-none',
    Lie: 'd-none',
    Comment: 'd-none'
  })

  useLayoutEffect(() => {
    if(type === 'Payment') {
      setPost({
        Payment: 'd-block',
        Lie: 'd-none',
        Comment: 'd-none'
      })
    }else if(type === 'Comment') {
      setPost({
        Payment: 'd-none',
        Lie: 'd-none',
        Comment: 'd-block'
      })
    }else {
      setPost({
        Payment: 'd-none',
        Lie: 'd-block',
        Comment: 'd-none'
      })
    }
  }, [type])
  const product = useSelector(state => state.selectProduct)
  const {name, brand, description, imageURL, category, prices} = product
  
  const {productId} = useParams()
  const dispatch = useDispatch()
  const fetchProductsDetail = async (id) => {
    try {
      const results = await axios.get(Api + `/${id}`)
      dispatch(selectProduct(results.data))
    } catch (error) {
      console.log('err:',error)
    }
  }
  useEffect(() => {
    if (productId && productId !== "") fetchProductsDetail(productId)
    return () => {
      dispatch(removeSelectProduct())
    }
  },[productId])

  return (
    <div>
      <div className={clsx(styles.ProductDetail, 'container')}>
        <div className={clsx(styles.content, 'row')}>
          <div className={clsx(styles.image, 'col-5')}>
            <img src={imageURL} />
            <div className={clsx(styles.icon)}>
              <div className={clsx(styles.overlay)}>
                <button>
                  <img src='//theme.hstatic.net/200000397757/1000764296/14/heart.svg?v=860' />
                </button>
                <span className={clsx('btn', 'btn-dark')}>Yêu thích</span>
              </div>
            </div>
          </div>
          <div className={clsx(styles.buying, 'col-7')}>
            <div className={clsx(styles.text)}>
              <h5>{name}</h5>
              <h4 className={clsx('my-3')}>Thương hiệu: <span>{brand}</span> | Loại: <span>{category}</span></h4>
              <h2>{prices} đ</h2>
              <p>Tiêu đề: {description}</p>
              <h3 className={clsx('my-3')}><span>Số lượng:</span>
                <button className={clsx('btn', 'btn-white')}>-</button>
                <strong>1</strong>
                <button className={clsx('btn', 'btn-white')}>+</button>
              </h3>
            </div>
            <div className={clsx(styles.cart)}>
              <button className={clsx('btn', 'btn-dark')}>Thêm vào giỏ</button>
              <button className={clsx('btn', 'btn-white', 'mx-3')}>Mua ngay</button>
            </div>
          </div>
        </div>
        <div className={clsx(styles.feedback)}>
          <div>
            {tabs.map(tab => (
              <button
                className={clsx('')}
                key={tab} 
                style={tab === type ? {backgroundColor: '#fff',borderTop: '3px solid'} : {}}
                onClick={() => setType(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className={clsx(styles.text, 'mt-5')}>
            <div className={post.Payment}>
              <h2>1. Các hình thức thanh toán</h2>
              <p>Khách hàng có thể lựa chọn các hình thức thanh toán sau để thanh toán cho đơn hàng của mình khi mua sản phẩm trên website Wanda Tbag</p>
              <p>1.1. Thanh toán trả trước: là hình thức thanh toán trực tuyến mà khách hàng sử dụng để thanh toán cho đơn hàng, bao gồm:​​</p>
              <ul>
                <li>Thẻ ATM (Thẻ ghi nợ/thanh toán/trả trước nội địa);</li>
                <li>Thẻ thanh toán quốc tế, thẻ tín dụng.</li>
              </ul>
              <p>1.2. Thanh toán trả sau: là hình thức mà khách hàng sử dụng để thanh toán cho đơn hàng khi Nam An Market giao hàng, bao gồm:</p>
              <ul>
                <li>Tiền mặt</li>
                <li>Thẻ ATM (thẻ ngân hàng, thẻ thanh toán nội địa), thẻ tín dụng và thẻ thanh toán quốc tế (Visa, Master, JCB, UnionPay…) qua máy quẹt thẻ (POS, mPOS) của Ngân hàng</li>
              </ul>
            </div>
            <div className={post.Lie}>
              <h2>1. Điều kiện đổi trả</h2>
              <p>Quý Khách hàng cần kiểm tra tình trạng hàng hóa và có thể đổi hàng/ trả lại hàng ngay tại thời điểm giao/nhận hàng trong những trường hợp sau:</p>
              <ul>
                <li>Hàng không đúng chủng loại, mẫu mã trong đơn hàng đã đặt hoặc như trên website tại thời điểm đặt hàng.</li>
                <li>Không đủ số lượng, không đủ bộ như trong đơn hàng.</li>
                <li>Tình trạng bên ngoài bị ảnh hưởng như rách bao bì, bong tróc, bể vỡ…</li>
              </ul>
              <p>Khách hàng có trách nhiệm trình giấy tờ liên quan chứng minh sự thiếu sót trên để hoàn thành việc hoàn trả/đổi trả hàng hóa. </p>
              <h2>2. Quy định về thời gian thông báo và gửi sản phẩm đổi trả</h2>
              <ul>
                <li>Thời gian thông báo đổi trả: trong vòng 48h kể từ khi nhận sản phẩm đối với trường hợp sản phẩm thiếu phụ kiện, quà tặng hoặc bể vỡ.</li>
                <li>Thời gian gửi chuyển trả sản phẩm: trong vòng 14 ngày kể từ khi nhận sản phẩm.</li>
                <li>Địa điểm đổi trả sản phẩm: Khách hàng có thể mang hàng trực tiếp đến văn phòng/ cửa hàng của chúng tôi hoặc chuyển qua đường bưu điện.</li>
              </ul>
              <p>Trong trường hợp Quý Khách hàng có ý kiến đóng góp/khiếu nại liên quan đến chất lượng sản phẩm, Quý Khách hàng vui lòng liên hệ đường dây chăm sóc khách hàng của chúng tôi.</p>
            </div>
            <div className={clsx(post.Comment, styles.Comment)}>
                <div className={clsx(styles.title)}>
                  <p>bình luận</p>
                  <div>
                    <span>Sắp xếp theo</span>
                    <select>
                      <option value="">Mới nhất</option>
                      <option value="">Cũ nhất</option>
                    </select>
                  </div>
                </div>
                <div className={clsx(styles.CommentInput)}>
                  <img src='//product.hstatic.net/200000397757/product/color_do-01_35d9df75f1734fb683e1aee3ade80f15_large.jpg' />
                  <textarea rows="4" />
                  <button>Bình luận</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail