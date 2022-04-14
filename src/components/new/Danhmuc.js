import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { BsDash } from "react-icons/bs";
import "../../index.css";
import "./style/DanhMuc.scss"

const Category = (props) => {
    const { showMenu, active } = props;

    const [isToggle, setIsToggle] = useState(false);

    const handleToggle = () => {
        setIsToggle(!isToggle);
    };
    return (
        <>
            <div className="Categories">
                <h3 className='categories-title'>
                    Danh mục
                </h3>
                <div className=" scale-150 text-white absolute top-2 right-2">
                    <AiOutlineClose
                        onClick={showMenu}
                        className="cursor-pointer hover:text-red-600 transition duration-300"
                    />
                </div>
                {/* --menu content-- */}

                <ul className="relative h-full w-full text-gray-300">
                    <li className="links-mobile relative">
                        <NavLink to="/" exact={true}>
                            Trang Chủ
                        </NavLink>
                    </li>
                    <li className="relative flex-col items-center justify-start border-b ">
                        <NavLink
                            to="/products"
                            className="flex hover:text-red-600 transition-all duration-500"
                        >
                            Sản Phẩm khuyến mãi
                        </NavLink>
                        {isToggle && (
                            <ul className=" transtion-all duration-500">
                                <NavLink
                                    to="/products" className="flex justify-start py-2 hover:text-red-600 transition-all duration-300 cursor-pointer category-child">
                                    Sản phẩm mới
                                </NavLink>
                                <NavLink
                                    to="/products" className="flex justify-start py-2 hover:text-red-600 transition-all duration-300 cursor-pointer category-child">
                                    Sản phẩm nổi bật
                                </NavLink>
                            </ul>
                        )}

                        <div className="scale-150 absolute right-3 top-1 ">
                            <span
                                className="cursor-pointer hover:text-red-600 toggle"
                                onClick={handleToggle}
                            >
                                {!isToggle ? <MdAdd /> : <BsDash />}
                            </span>
                        </div>
                    </li>
                    <li className="links-mobile">
                        <NavLink to="/cart">Giỏ hàng</NavLink>
                    </li>
                    <li className="links-mobile">
                        <NavLink to="/contact">Liên hệ</NavLink>
                    </li>
                    <li className="links-mobile">
                        <NavLink to="news">Tin tức mới</NavLink>
                    </li>
                </ul>
            </div>

        </>
    );
};

export default Category;
