
import React from 'react'
import { Link } from 'react-router-dom'

function HeaderPath({children}) {
    return (
        <div className="main_wrap">
            <div className="header containerCustom py-2">
                <Link to='/'>Trang chủ </Link>
                <span>/ {children}</span>
            </div>
        </div>
    )
}

export default HeaderPath