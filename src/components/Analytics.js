import React, { useState } from "react";

import PriceChangeIcon from "@mui/icons-material/PriceChange";
import CachedIcon from "@mui/icons-material/Cached";

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

  const style = {
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className="front">
      <Box sx={style}>
        <Typography variant="h6" color="text.primary" textAlign="center">
          Analytics (Iski Stlying karni hai)
        </Typography>
        <div className="card">
          <Card
            sx={{
              display: "flex",
              width: 1 / 5,
              marginRight: "6%",
              border: "1px",
              height: 170,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <CardContent>
                <Stack direction="row" spacing={5} sx={{ display: "flex" }}>
                  <PriceChangeIcon fontSize="large" />
                  <Typography inline variant="body1" align="right">
                    Total Sales:
                  </Typography>
                </Stack>
                <Typography inline variant="h5" align="right">
                  Rs. 45,000
                </Typography>
                <Divider variant="middle" component="li" />
                <Typography inline variant="body1" align="right">
                  Update Now
                  <CachedIcon />
                </Typography>
              </CardContent>
            </Box>
          </Card>
          <Card
            sx={{
              display: "flex",
              width: 1 / 5,
              marginRight: "6%",
              border: "1px",
              height: 170,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 100 }}
                img="/src/components/assets/priceTag.png"
                alt="Price Tag"
              />

              <CardContent>
                <Typography inline variant="body1" align="right">
                  Total Sales:
                </Typography>

                <Typography inline variant="h5" align="right">
                  Rs. 45,000
                </Typography>
                <Divider variant="middle" component="li" />
                <Typography inline variant="body1" align="right">
                  Update Now
                  <CachedIcon />
                </Typography>
              </CardContent>
            </Box>
          </Card>
          <Card
            sx={{
              display: "flex",
              width: 1 / 5,
              border: "1px",
              marginRight: "6%",
              height: 170,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <CardContent>
                <Stack direction="row" spacing={9.5} sx={{ display: "flex" }}>
                  <PriceChangeIcon fontSize="large" />
                  <Typography inline variant="body1" align="right">
                    Total Orders:
                  </Typography>
                </Stack>
                <Typography inline variant="h5" align="right">
                  500
                </Typography>
                <Divider variant="middle" component="li" />
                <Typography inline variant="body1" align="right">
                  New Orders
                  <CachedIcon />
                </Typography>
              </CardContent>
            </Box>
          </Card>
          <Card
            sx={{
              display: "flex",
              width: 1 / 5,
              border: "1px",
              marginRight: "1%",
              height: 170,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <CardContent>
                <Stack direction="row" spacing={4} sx={{ display: "flex" }}>
                  <PriceChangeIcon fontSize="large" />
                  <Typography inline variant="body1" align="right">
                    Orders Returned:
                  </Typography>
                </Stack>
                <Typography inline variant="h5" align="right">
                  4
                </Typography>
                <Divider variant="middle" component="li" />
                <Typography inline variant="body1" align="right">
                  New Orders
                  <CachedIcon />
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </div>
        <div className="charts">
          <div className="bar">
            <BarChart salesData={barData} />
          </div>
          <div className="pie">
            <PieChart salesData={barData} />
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Analytics;
