import React from "react";
import { NavLink } from "react-router-dom";

const Bredcrumb = ({ to1, to2, prev, current }) => {
  return (
    <div className={"text-lg font-semibold mt-10 ml-10 "}>
      <span>
        <NavLink className=" hover:text-blue-400 text-xl hover:underline" to={to1}>
          {prev}
        </NavLink>
      </span>
      &nbsp; {`>`}
      <span>
        &nbsp; 
        <NavLink
          className={({ isActive }) => (isActive ? "  text-xl text-orange-500 " : undefined)}
          to={to2}
        >
          {current}
        </NavLink>
      </span>
    </div>
  );
};

export default Bredcrumb;
