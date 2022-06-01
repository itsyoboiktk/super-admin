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
        <h4 style={{ color: "white", fontWeight: "600" }}>SneakAR</h4>
      </div>
      <div id="icon">
        <NotificationsIcon
          style={{ color: "#dbeaf1", margin: "5px", cursor: "pointer" }}
        />
        <SettingsIcon
          style={{ color: "#dbeaf1", margin: "5px", cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Nav;
