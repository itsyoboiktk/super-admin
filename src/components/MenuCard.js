import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";

const MenuCard = (props) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        cursor: "pointer",
        flex: "1 1 150px",
        margin: "10px",
        borderRadius: "10px",
        backgroundColor: props.color,
      }}
      onClick={() => navigate("/home/addProduct")}
    >
      <CardContent>
        <CardActions>
          {props.icon}
          <Button
            size="large"
            onClick={() => navigate("/home/addProduct")}
            style={{
              color: "#45464c",
              textTransform: "capitalize",
              fontWeight: "700",
            }}
          >
            {props.option}
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
export default MenuCard;
