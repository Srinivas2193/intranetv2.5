import { useState } from "react";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Sidebar.css";
import { useParams } from "react-router-dom";
// import {IoIosArrowForward} from 'react-icons/io';

export default function SidebarItem({ item }) {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);

//<span>{item.title}</span> <span className="listIcon">{isShown ? <IoIosArrowForward className="text-[20px]" /> : '' }</span>
  // <div className={item.status ? "sidebar-item open" : "sidebar-item"}>
  // <div className="sidebar-title" onClick={() => item.status = true ? false : true}>

  if (item.childrens) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title" onClick={() => setOpen(!open)}>
          {/* { item.icon && <i className={item.icon}></i> } */}
          <span>
            {" "}
            <i className="bi-chevron-right toggle-btn "></i>
          </span>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "text-ellipsis text-orange-600 " : "text-ellipsis"
            }
          >
            {" "}
            {item.title}{" "}
          </NavLink>
        </div>
        <div className="sidebar-content">
          {item.childrens.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <NavLink
        to={item.id ? `${item.path}/${item.id}` : item.path}
        className={({ isActive }) =>
          isActive
            ? "text-orange-600 sidebar-item plain1"
            : "sidebar-item plain "
        }
      >
        {item.icon && <i className={item.icon}></i>}
        <div className="wrapper">
        <ul className=" ml-3">
          <li onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} 
          className="listStyle hover:text-white p-[8px] hover:shadow-[inset_13rem_0_0_0] hover:shadow-orange-400 duration-[400ms,700ms] transition-[color,box-shadow] hover:rounded-[15px] hover:p-[8px] ">
            {item.title}
          </li>
        </ul>
        </div>
      </NavLink>
    );
  }
}
