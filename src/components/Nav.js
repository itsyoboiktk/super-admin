import React from "react";
import "./Nav.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
const Nav = () => {
  return (
    <div className="navbar">
      <div id="text">
        <Avatar alt="SneakerLogo" src="../sneaklogo.png" />
        <p>SneakAR</p>
      </div>
      <div id="icon">
        <NotificationsIcon style={{ color: "#45464c" }} />
        <SettingsIcon style={{ color: "#45464c" }} />
      </div>
    </div>
  );
};

export default Nav;
