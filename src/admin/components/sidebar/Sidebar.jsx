import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";

import clsx from "clsx";

import exportDefault from "../../redux/action/AppAction";

import { useSelector, useDispatch } from "react-redux";
import "./sidebar.css";

import sidebar_items from "../../assets/JsonData/sidebar_routes.json";


const SidebarItems = (props) => {
  const active = props.active ? "active" : "";

  return (
    <div className="sidebar-item">
      <div className={`sidebar-item-inner ${active}`}>
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>
    </div>
  );
};




const Sidebar = (props) => {

const dispatch = useDispatch();

  const appReducer = useSelector((state) => state.AppReducers);
  

  // const [show, setShow] = useState(false) 


  const handleClickSidebar = () => {
   dispatch(exportDefault.setMenu());
  }

  const activeItem = sidebar_items.findIndex(
    (item) => item.route === props.location.pathname
  );
  return (
    <>
      <div className={clsx("sidebar", appReducer.isOpenMenu && "block")}>
        <div className="sidebar-logo">
          <NavLink exact to="/admin">
            <h2>
              Group<span>2</span>
            </h2>
          </NavLink>
        </div>
        <div className="sidebar-content">
          {sidebar_items.map((item, index) => {
            return (
              <NavLink to={item.route} key={index}>
                <SidebarItems
                  title={item.display_name}
                  icon={item.icon}
                  active={index === activeItem}
                />
              </NavLink>
            );
          })}
        </div>
        <div className="sidebar-footer" onClick={handleClickSidebar}>
          <p> &lt;&lt;&lt; hidden </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
