import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./productView.css";

import { Button, Grid, Divider, Paper } from "@mui/material";
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
import { baseURL } from "./request";

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
  const navigate = useNavigate();
  const product = state.product;
  const [open, setOpen] = React.useState(false);
  const [reviews, setReviews] = React.useState([]);
  const [open2, setOpen2] = React.useState(false);

  const [img, setImg] = React.useState([]);
  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => setOpen2(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const reviewClicked = () => {
    axios
      .get(`${baseURL}/review/get/${product._id}`)
      .then((res) => {
        setReviews(res.data);
        handleOpen2();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    setImg(product.path);
  }, []);
  const [imgNum, setImgNum] = React.useState(0);

  const pressLeft = () => {
    if (imgNum == 0) {
      setImgNum(img.length - 1);
    } else {
      setImgNum(imgNum - 1);
    }
    console.log(imgNum);
  };

  const pressRight = () => {
    if (imgNum < img.length - 1) {
      setImgNum(imgNum + 1);
    } else {
      setImgNum(0);
    }
    console.log(imgNum);
  };
  const deleteProduct = () => {
    axios
      .delete(`http://localhost:4000/product/delete/${product._id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log("here", res);
        setOpen(false);
        navigate("/home/inventory");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="product_container">
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="Modal_Rev">
          <Box
            sx={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              bgcolor: "white",
              border: "1px solid",
              borderRadius: "10px",
              // p: 5,
            }}
          >
            {reviews.length >= 1 ? (
              reviews.map((ele) => (
                <Paper
                  style={{
                    padding: "40px 20px",
                    maxHeight: 400,
                    overflow: "auto",
                  }}
                >
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid justifyContent="left" item xs zeroMinWidth>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <h4 style={{ margin: 0, textAlign: "left" }}>
                          {ele.user.name}
                        </h4>
                        <Rating
                          name="half-rating"
                          defaultValue={ele.rating}
                          disabled
                          size="large"
                        />
                      </div>
                      <p style={{ textAlign: "left" }}>{ele.comment}</p>
                    </Grid>
                  </Grid>
                  <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
                </Paper>
              ))
            ) : (
              <Paper
                style={{
                  padding: "40px 20px",
                  maxHeight: 400,

                  overflow: "auto",
                }}
              >
                <Grid
                  container
                  wrap="nowrap"
                  spacing={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h3>No reviews yet!</h3>
                </Grid>
              </Paper>
            )}
          </Box>
        </div>
      </Modal>

      <div className="product_card">
        <div className="slider">
          <button className="btn" onClick={() => pressLeft()}>
            <ArrowBackIosNewIcon />
          </button>
          <img
            src={`${baseURL}/${img[imgNum]}`}
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

        <Grid container wrap="nowrap" spacing={2}>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>Product Info: </h4>
            <p style={{ textAlign: "left" }}>{product.desc}</p>
          </Grid>
        </Grid>

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
            onClick={() =>
              navigate("/home/updateProduct", {
                state: { product: product },
              })
            }
          >
            Update
          </Button>
          <Button
            onClick={() => reviewClicked()}
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
