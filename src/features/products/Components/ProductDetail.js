
import clsx from 'clsx'
import React from 'react'

import styles from '../index.module.scss'

function ProductDetail() {
  return (
    <div>
      <div className={clsx(styles.ProductDetail, 'container')}>
        <div className={clsx(styles.content, 'row')}>
          <div className={clsx(styles.image, 'col-5')}>
            <img src='//product.hstatic.net/200000397757/product/upload_b75e9b9fe97a4b8187b5ac792bff5025_large.jpg' />
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

          </div>
        </div>
        <div className={clsx(styles.feedback)}>

        </div>
      </div>
    </div>
  )
}

export default ProductDetail