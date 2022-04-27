import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

const MenuCard = (props) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{ minWidth: 255, cursor: "pointer" }}
      onClick={() => navigate("/home/addProduct")}
    >
      <CardContent>
        <CardActions>
          {props.icon}
          <Button size="large" onClick={() => navigate("/home/addProduct")}>
            {props.option}
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
export default MenuCard;
