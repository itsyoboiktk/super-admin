import axios from "axios";
import React from "react";
import "./inventory.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const Inventory = () => {
  const [products, setProducts] = React.useState([
    { title: "shoe", category: "casual", price: "", image: "", brand: "nike" },
    { title: "shoe", category: "sneaker", price: "", image: "", brand: "nike" },
    { title: "shoe", category: "formal", price: "", image: "", brand: "nike" },
    { title: "shoe", category: "formal", price: "", image: "", brand: "nike" },
    { title: "shoe", category: "formal", price: "", image: "", brand: "nike" },
    { title: "shoe", category: "formal", price: "", image: "", brand: "nike" },
    { title: "shoe", category: "formal", price: "", image: "", brand: "nike" },
    { title: "shoe", category: "formal", price: "", image: "", brand: "nike" },
  ]);

  //   React.useEffect(() => {
  //     axios.get("https://localhost:4000/products/display").then((res) => {
  //       setProducts(res);
  //     });
  //   });
  return (
    <div className="invent">
      <div className="search_bar">
        <h1>Search bar will come here</h1>
      </div>
      <div className="items">
        {products.map((element, key) => {
          return (
            <Card sx={{ maxWidth: 345, margin: "10px", flex: "1 1 25%" }}>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {element.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {element.brand}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Edit</Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Inventory;
