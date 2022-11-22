import React, { useState } from "react";
import MenuCard from "../components/MenuCard";
import LoyaltyOutlinedIcon from "@mui/icons-material/LoyaltyOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import "./overview.css";
import BarChart from "./BarChart";
import { BarData } from "../components/BarData";
import PieChart from "../components/PieChart";

import { Card, Row, Col } from "react-bootstrap";
// import { Card, CardContent, Box, Typography } from "@mui/material";
// import Divider from "@mui/material/Divider";
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
        {/* <Card sx={{ display: "flex", width: 1 / 3 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent>
              <LoyaltyOutlinedIcon fontSize="large" />
              <Typography sx={{ justifyContent: "right" }}>
                Total Sales: Rs. 45,000
              </Typography>
              <Divider />
              <Typography>update now</Typography>
            </CardContent>
          </Box>
        </Card> */}
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Number</p>
                      <Card.Title as="h4">150GB</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update Now
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-light-3 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Revenue</p>
                      <Card.Title as="h4">$ 1,345</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  Last day
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Errors</p>
                      <Card.Title as="h4">23</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  In the last hour
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Followers</p>
                      <Card.Title as="h4">+45K</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update now
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        {/* <MenuCard
          icon={<LocalAtmOutlinedIcon fontSize="large" />}
          option={"Total Products: " + totalPro}
          color="#e3f49a"
        />
        <MenuCard
          icon={<AssessmentOutlinedIcon fontSize="large" />}
          option={"Total Orders: " + totalOrder}
          color="#ddd2ef"
        /> */}
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
