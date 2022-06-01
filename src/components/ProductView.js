import React from "react";
import { useLocation } from "react-router-dom";
import "./productView.css";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Rating from "@mui/material/Rating";
import DeleteIcon from "@mui/icons-material/Delete";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import ReviewsIcon from "@mui/icons-material/Reviews";
import axios from "axios";

const ProductView = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    borderRadius: "10px",
    boxShadow: 25,
    p: 4,
  };
  const { state } = useLocation();
  const product = state.product;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const [img, setImg] = React.useState([]);
  React.useEffect(() => {
    setImg(product.path);
  }, []);
  const [imgNum, setImgNum] = React.useState(0);

  const pressLeft = () => {
    if (imgNum == 0) {
    } else {
      setImgNum(imgNum - 1);
    }
    console.log(imgNum);
  };

  const pressRight = () => {
    if (imgNum < img.length - 1) {
      setImgNum(imgNum + 1);
    } else {
    }
    console.log(imgNum);
  };
  const deleteProduct = () => {
    axios
      .delete(`http://localhost:4000/product/delete/${product.id}`, {
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
  return (
    <div className="product_container">
      <div className="product_card">
        <div className="slider">
          <button className="btn" onClick={() => pressLeft()}>
            <ArrowBackIosNewIcon />
          </button>
          <img
            src={`http://localhost:4000/${img[imgNum]}`}
            style={{
              objectFit: "contain",
              maxWidth: "600px",
              maxHeight: "600px",
              minHeight: "600px",
              minWidth: "600px",
            }}
          />
          <button className="btn" onClick={() => pressRight()}>
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>

      <div className="desc">
        <h1 style={{ fontWeight: "1000", fontSize: 50 }}>{product.title}</h1>
        <p>Brand: {product.brand}</p>
        <p>Available Quantity: {product.quantity}</p>
        <p>Category: {product.category}</p>
        <p>For: {product.gender}</p>
        <h4 style={{ fontWeight: "600" }}>
          Price:{"  "}
          {"Rs.  "}
          {product.price}
        </h4>
        <Rating name="half-rating" defaultValue={4} size="large" />
        <p>{"(1.5k)"}</p>

        <div
          style={{
            height: "2px",
            backgroundColor: "black ",
            marginTop: "5%",
            marginBottom: "5%",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
          }}
        >
          <Button
            style={{ marginBottom: "10px" }}
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={() => handleOpen()}
          >
            Delete
          </Button>
          <Button
            style={{ marginBottom: "10px" }}
            variant="outlined"
            startIcon={<UpgradeIcon />}
          >
            Update
          </Button>
          <Button
            style={{ marginBottom: "10px" }}
            variant="outlined"
            startIcon={<ReviewsIcon />}
          >
            View Reviews
          </Button>
        </div>
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

export default ProductView;
