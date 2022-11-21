import React, { useState } from "react";
import MenuCard from "../components/MenuCard";
import LoyaltyOutlinedIcon from "@mui/icons-material/LoyaltyOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import "./overview.css";
import BarChart from "./BarChart";
import { BarData } from "../components/BarData";
import PieChart from "../components/PieChart";
import axios from "axios";
import { baseURL } from "./request";
const Overview = () => {
  const [totalPro, setTotalPro] = useState();
  const [totalOrder, setTotalOrder] = useState();
  React.useEffect(() => {
    axios
      .get(`${baseURL}/stats/totals`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setTotalOrder(res.data.totalOrders);
        setTotalPro(res.data.totalProducts);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const [barData, setBarData] = React.useState({
    labels: BarData.map((element) => element.month),
    datasets: [
      {
        label: "Sales per month",
        data: BarData.map((element) => element.sales),
        backgroundColor: ["#B9D1D9", "#d1de85"],
      },
    ],
  });
  return (
    <div className="overview">
      <div className="card">
        <MenuCard
          icon={<LoyaltyOutlinedIcon fontSize="large" />}
          option="Total Sales: Rs.456,688"
          color="#dbeaf1"
        />
        <MenuCard
          icon={<LocalAtmOutlinedIcon fontSize="large" />}
          option={"Total Products: " + totalPro}
          color="#e3f49a"
        />
        <MenuCard
          icon={<AssessmentOutlinedIcon fontSize="large" />}
          option={"Total Orders: " + totalOrder}
          color="#ddd2ef"
        />
      </div>
      <div className="charts">
        <div className="bar">
          <BarChart salesData={barData} />
        </div>
        <div className="pie">
          <PieChart salesData={barData} />
        </div>
      </div>
      {/* <div className="recent">
        
      </div> */}
    </div>
  );
};

export default Overview;
