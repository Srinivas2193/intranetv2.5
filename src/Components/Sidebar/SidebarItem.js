import { useState } from "react"
import React from "react"
import {NavLink,Link} from 'react-router-dom'
import "./Sidebar.css"
import { useParams } from "react-router-dom"

export default function SidebarItem({item}){
    const { id } = useParams();
    const [open, setOpen] = useState(false)
    // <div className={item.status ? "sidebar-item open" : "sidebar-item"}>
    // <div className="sidebar-title" onClick={() => item.status = true ? false : true}>
        
    if(item.childrens){
        return (
            
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title" onClick={() => setOpen(!open)}>
                    
                        {/* { item.icon && <i className={item.icon}></i> } */}
                        <span> <i className="bi-chevron-right toggle-btn " ></i></span>
                       <NavLink to={item.path} className={({isActive})=> isActive ? 'text-ellipsis text-orange-600' : 'text-ellipsis'} > {item.title} </NavLink>  
                 
                    
                </div>
                <div className="sidebar-content">
                    { item.childrens.map((child, index) => <SidebarItem key={index} item={child} />) }
                </div>
            </div>
        )
    }else{   
        return (
            <NavLink  to={item.id ? `${item.path}/${item.id}` : item.path} className={({isActive})=>isActive ? 'text-orange-600 sidebar-item plain1' : 'sidebar-item plain list-disc'}>
                { item.icon && <i className={item.icon}></i> }
                <ul className=" ml-3"> <li>{item.title}</li></ul>
            </NavLink>
        )
    }
}