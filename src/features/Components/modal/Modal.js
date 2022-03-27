
import clsx from 'clsx';
import React from 'react'
import { AiOutlineCheck } from "react-icons/ai";

import styles from './index.module.scss'

function Modal() {
  return (
    <div className={clsx(styles.compeleteCart)}>
      <div className={clsx(styles.icon)}>
        <AiOutlineCheck />
      </div>
      <p>Sản phẩm đã được thêm vào giỏ</p>
    </div>
  )
}

export default Modal