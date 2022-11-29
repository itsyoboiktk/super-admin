import axios from "axios";
import React from "react";
import "./stores.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { baseURL } from "./request";

const Stores = () => {
  const navigate = useNavigate();
  const [products, setProducts] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState("");
  const handleOpen = (_id) => {
    setId(_id);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const deleteProduct = () => {
    axios
      .delete(`${baseURL}/product/delete/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log("here", res);
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    border: "1px solid",
    borderRadius: "10px",
    boxShadow: 25,
    p: 4,
  };

  React.useEffect(() => {
    axios
      .get(`${baseURL}/product/display`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setProducts(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [open]);

  return (
    <div className="invent">
      <div className="search_bar">
        <TextField label="Search" sx={{ width: "70%", marginTop: "2%" }} />
      </div>
      <div className="items">
        {products.map((element, key) => {
          return (
            <Card sx={{ maxWidth: 345, margin: "10px", flex: "1 1 20%" }}>
              <CardMedia
                component="img"
                height="210"
                image={`${baseURL}/${element.path[0]}`}
                alt="product image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {element.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {element.brand}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {element.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() =>
                    navigate("/storeDetail", {
                      state: { product: element },
                    })
                  }
                >
                  View
                </Button>
                <Button
                  size="small"
                  onClick={() =>
                    navigate("/updateProduct", {
                      state: { product: element },
                    })
                  }
                >
                  Edit
                </Button>
                <Button size="small" onClick={() => handleOpen(element._id)}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to delete this item?
          </Typography>
          <div style={{ flexDirection: "row" }}>
            <Button onClick={() => deleteProduct()}>Yes</Button>
            <Button onClick={() => handleClose()}>No</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Stores;
