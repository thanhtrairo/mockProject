import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import { HiOutlineUser } from "react-icons/hi";
import MenuItem from "./MenuItem";
import { NavLink } from "react-router-dom";

import "../../index.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  const carts = useSelector(state => state.carts)

  return (
    <>
      <div className="sticky w-full h-[70px] bg-white shadow-md ">
        <div className="flex h-[100%] relative items-center p-3 justify-between">
          {/* --menu mobile-- */}
          <div className="flex md:hidden items-center">
            <AiOutlineMenu
              onClick={showMenu}
              className="scale-150 text-black hover:text-red-500 cursor-pointer duration-300"
            />
          </div>
          {/* --logo-- */}
          <div className="flex md:items-start">
            <h1 className="text-2xl cursor-pointer">
              <NavLink to="/">
                Group <span className="text-red-600">2</span>
              </NavLink>
            </h1>
          </div>
          {/* --menu destops--- */}
          <div className="hidden md:flex items-center p-5 gap-6">
            <ul className="flex item-center justify-center relative gap-8">
              <li className="links">
                <NavLink to="/">Trang chủ</NavLink>
              </li>
              <li className="text-gray-800 font-semibold cursor-pointer  group">
                <NavLink
                  to="/products"
                  className="hover:text-red-600 transition duration-500"
                >
                  Sản Phẩm
                </NavLink>
                <div className="absolute left-0 top-full w-full bg-white py-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 divide-y divide-gray-300 divide-dashed">
                  <ul className="text-[17px] mt-2">
                    <li className="flex justify-start py-2 hover:text-red-600 transition-all duration-300 cursor-pointer">
                      trang chủ
                    </li>
                    <li className="flex justify-start py-2 hover:text-red-600 transition-all duration-300 cursor-pointer">
                      trang chủ
                    </li>
                    <li className="flex justify-start py-2 hover:text-red-600 transition-all duration-300 cursor-pointer">
                      trang chủ
                    </li>
                  </ul>
                </div>
              </li>
              <li className="links">
                <NavLink to="/news">Tin Tức</NavLink>
              </li>
              <li className="links">
                <NavLink to="/contact">Liên Hệ</NavLink>
              </li>
              <li className="links">
                <NavLink to="/helps">Hướng Dẫn</NavLink>
              </li>
            </ul>
          </div>

          {/* --icons-- */}
          <div className="scale-150 flex mr-3 gap-1 md:gap-3 md:mr-5 ">
            <div className="text-black hover:text-red-600 transition-all cursor-pointer duration-300">
              <AiOutlineSearch />
            </div>
            <div className="text-black hover:text-red-600 transition-all cursor-pointer duration-300">
              <HiOutlineUser />
            </div>
            <Link to='/carts'>
              <div className="text-black hover:text-red-600 transition-all cursor-pointer duration-300 relative">
                <span className="absolute -top-1 -right-1 text-[10px] w-3 h-3 rounded-full bg-red-600 flex items-center text-white justify-center">
                  {carts.length ? carts.length : 0}
                </span>
                <AiOutlineShoppingCart />
              </div>            
            </Link>
          </div>
        </div>
        <MenuItem showMenu={showMenu} active={active} />
      </div>
    </>
  );
};

export default Navbar;
