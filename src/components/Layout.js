import React from "react";
import "./SideBar.css";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Nav from "./Nav";
const Layout = () => {
  return (
    <div className="Container">
      <div className="Nav">
        <Nav />
      </div>

      <div className="Content">
        <div className="SideBar">
          <SideBar />
        </div>

        <div className="Outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
