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
    bars();
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

  const [gender, setGender] = React.useState([
    { id: 1, gender: "Male", count: 5 },
    { id: 2, gender: "Female", count: 10 },
  ]);
  const [pieData, setPieData] = React.useState({
    labels: gender.map((element) => element.gender),
    datasets: [
      {
        label: "Gender",
        data: gender.map((element) => element.count),
        backgroundColor: ["lightblue", "pink"],
      },
    ],
  });
  const [category, setCategory] = React.useState([
    { id: 1, category: "Sneaker", count: 1 },
    { id: 2, category: "Formal", count: 2 },
    { id: 3, category: "Sports", count: 2 },
  ]);
  const [barData, setBarData] = React.useState({
    labels: category.map((element) => element.count),
    datasets: [
      {
        label: "Shoes",
        data: category.map((element) => element.count),
        backgroundColor: ["#cbb9ed"],
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

  const bars = () => {
    axios
      .get(`${baseURL}/admin/category`)
      .then((res) => {
        let obj = {
          labels: category.map((element) => element.category),
          datasets: [
            {
              label: "Shoes",
              data: res.data.map((element) => element.count),
              backgroundColor: ["#cbb9ed"],
            },
          ],
        };
        setBarData(obj);
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
