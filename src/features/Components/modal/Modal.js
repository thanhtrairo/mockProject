
import React from 'react'
import { AiOutlineCheck } from "react-icons/ai";

import styles from './index.module.scss'

function Modal({children}) {
  return (
    <div className={styles.wrapRelative}>
      <div className={styles.warp}>
        <div className={styles.compeleteCart}>
          <div className={styles.icon}>
            <AiOutlineCheck />
          </div>
          <p>{children}</p>
        </div>
      </div>
    </div>
  )
}

export default Modal