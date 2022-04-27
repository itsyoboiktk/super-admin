import React from "react";
import MenuCard from "../components/MenuCard";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import PageviewIcon from "@mui/icons-material/Pageview";
import AssessmentIcon from "@mui/icons-material/Assessment";
import Divider from "@mui/material/Divider";
import "./overview.css";
const Overview = () => {
  return (
    <div className="overview">
      <div className="card">
        <MenuCard icon={<PageviewIcon />} option="180 Products" />
        <MenuCard icon={<AssessmentIcon />} option="65 Current orders" />
        <MenuCard icon={<DeleteIcon />} option="5 removed" />
        <MenuCard icon={<AddCircleIcon />} option="10 new added" />
      </div>
      <Divider variant="middle" />
      <div className="chart"></div>
    </div>
  );
};

export default Overview;
