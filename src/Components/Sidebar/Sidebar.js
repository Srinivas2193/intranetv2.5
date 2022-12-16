import React, { useEffect, useState } from "react";
import SidebarItem from "./../../Components/Sidebar/SidebarItem";
import items from "./../../Components/data/sidebar.json";
import "./Sidebar.css";
// import ScrollArea from 'react-scrollbar';

export default function Sidebar() {
  return (
    <div className="sidebar">
{/*      
        <ScrollArea
            speed={0.8}
            className="min-w-[200px] max-w-[400px] h-[739px] m-[-12px]"
            contentClassName="content"
            horizontal={false}
            > */}
        <div>
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
        {/* </ScrollArea> */}
    </div>
  );
}
