import React from "react";
import "./SideBar.css";
import { SideBarData } from "./SideBarData";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="Container">
      <div className="Nav">
        <h1>nav</h1>
      </div>

      <div className="below-Nav">
        <div className="SideBar">
          <ul className="list">
            {SideBarData.map((item, key) => {
              return (
                <li
                  className="Row"
                  onClick={() => {
                    navigate(item.link);
                    console.log(item.link);
                  }}
                  id={location.pathname === item.link ? "active" : ""}
                >
                  <div id="icon"> {item.icon}</div>
                  <div id="title"> {item.title}</div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="Content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
