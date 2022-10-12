import React from "react";
import "./SideBar.css";
import { SideBarData } from "./SideBarData";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import Logout from "@mui/icons-material/Logout";

const SideBar = () => {
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      <ul className="list">
        {SideBarData.map((item, key) => {
          return (
            <li
              className="Row"
              onClick={
                item.title === "Log out"
                  ? () => logout()
                  : () => {
                      navigate(item.link);
                      console.log(item.link);
                    }
              }
              id={location.pathname === item.link ? "active" : ""}
            >
              <div id="icon"> {item.icon}</div>
              <div id="title"> {item.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SideBar;
