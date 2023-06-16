import './Layout.css'
import React from "react";
import { NavLink, Outlet } from "react-router-dom";


const activeMenuClass = ({ isActive }) => (isActive ? "active-menu" : "");

const Layout = () => {
  return (
    <>
    <nav>
      <ul>
        <li>
          <NavLink to={"/"} className={activeMenuClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/posts"} className={activeMenuClass}>
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink to={"/publish"} className={activeMenuClass}>
            Publish
          </NavLink>
        </li>
      </ul>
    </nav>
    <div className="container">
        <Outlet/>
    </div>
    <footer>
        Footer
    </footer>
    </>
  );
};

export default Layout;
