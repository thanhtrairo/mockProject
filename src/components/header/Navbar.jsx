import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";

import { HiOutlineUser } from "react-icons/hi";
import MenuItem from "./MenuItem";
import { NavLink } from "react-router-dom";

import "../../index.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="z-300 left-0 top-0 w-full">
        <div className="fixed w-full h-[70px] bg-white shadow-md ">
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
              <h1 className="text-2xl">
                Group <span className="text-red-600">2</span>
              </h1>
            </div>
            {/* --menu destops--- */}
            <div className="hidden md:flex items-center p-5 gap-6">
              <ul className="flex item-center justify-center gap-8">
                <li className="links">
                  <NavLink to="/" exact>
                    Trang chủ
                  </NavLink>
                </li>
                <li className="links">
                  <NavLink to="/product" exact>
                    Sản Phẩm
                  </NavLink>
                </li>
                <li className="links">
                  <NavLink to="/new" exact>
                    Tin Tức
                  </NavLink>
                </li>
                <li className="links">
                  <NavLink to="/contact" exact>
                    Liên Hệ
                  </NavLink>
                </li>
                <li className="links">
                  <NavLink to="/helps" exact>
                    Hướng Dẫn
                  </NavLink>
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
              <div className="text-black hover:text-red-600 transition-all cursor-pointer duration-300 relative">
                <span className="absolute -top-1 -right-1 text-[10px] w-3 h-3 rounded-full bg-red-600 flex items-center text-white justify-center">
                  0
                </span>
                <AiOutlineShoppingCart />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MenuItem showMenu={showMenu} active={active} />
    </>
  );
};

export default Navbar;
