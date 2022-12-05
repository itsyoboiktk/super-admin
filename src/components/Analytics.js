import React, { useState } from "react";
import MenuCard from "../components/MenuCard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import StoreTwoToneIcon from "@mui/icons-material/StoreTwoTone";
import LocalShippingTwoToneIcon from "@mui/icons-material/LocalShippingTwoTone";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import "./analytics.css";
import BarChart from "./BarChart";
import { BarData } from "../components/BarData";
import PieChart from "../components/PieChart";

import {
  Card,
  CardContent,
  Box,
  Typography,
  Stack,
  CardMedia,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import axios from "axios";
import { baseURL } from "./request";

const Analytics = () => {
  const [totalProducts, setTotalProducts] = useState();
  const [totalOrders, setTotalOrders] = useState();
  const [totalStores, setTotalStores] = useState();
  const [totalUsers, setTotalUsers] = useState();

  React.useEffect(() => {
    pieChart();
    axios
      .get(`${baseURL}/admin/totals`)
      .then((res) => {
        setTotalOrders(res.data.totalOrders);
        setTotalProducts(res.data.totalProducts);
        setTotalUsers(res.data.totalUsers);
        setTotalStores(res.data.totalStores);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [category, setCategory] = React.useState([
    { id: 1, gender: "Male", count: 5 },
    { id: 2, gender: "Female", count: 10 },
  ]);
  const [pieData, setPieData] = React.useState({
    labels: category.map((element) => element.gender),
    datasets: [
      {
        label: "Shoe Type",
        data: category.map((element) => element.count),
        backgroundColor: ["#B9D1D9", "#d1de85", "red"],
      },
    ],
  });

  const [barData, setBarData] = React.useState({
    labels: BarData.map((element) => element.month),
    datasets: [
      {
        label: "Sales per month",
        data: BarData.map((element) => element.sales),
        backgroundColor: ["#d1de85", "pink"],
      },
    ],
  });

  const pieChart = () => {
    axios
      .get(`${baseURL}/admin/gender`)
      .then((res) => {
        let obj = {
          labels: res.data.map((element) => element.gender),
          datasets: [
            {
              label: "User",
              data: res.data.map((element) => element.count),
              backgroundColor: ["lightblue", "pink"],
            },
          ],
        };
        setPieData(obj);
      })

      .catch((e) => {
        console.log(e);
      });
  };

  const style = {
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className="front">
      <Box sx={style}>
        <div className="card">
          <MenuCard
            icon={<StoreTwoToneIcon fontSize="large" />}
            option="Total Stores: "
            num={totalStores}
            color="#dbeaf1"
          />
          <MenuCard
            icon={<ShoppingBagTwoToneIcon fontSize="large" />}
            option={"Total Products: "}
            num={totalProducts}
            color="#e3f49a"
          />
          <MenuCard
            icon={<LocalShippingTwoToneIcon fontSize="large" />}
            option="Total Orders: "
            num={totalOrders}
            color="#ddd2ef"
          />
          <MenuCard
            icon={<PeopleAltIcon fontSize="large" />}
            option="Total Users: "
            num={totalUsers}
            color="#88b8f7"
          />
        </div>
        <div className="charts">
          <div className="bar">
            <BarChart salesData={barData} />
          </div>
          <div className="pie">
            <PieChart salesData={pieData} />
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Analytics;
