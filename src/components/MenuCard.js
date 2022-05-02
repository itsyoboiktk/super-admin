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
              fontfamily:
                "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
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
