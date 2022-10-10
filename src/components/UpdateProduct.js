import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { baseURL } from "./request";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      paper: "#f54298",
    },
  },
});

const UpdateProduct = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state.product;

  const [category, setCategory] = React.useState(product.category);
  const [gender, setGender] = React.useState(product.gender);
  const [title, setTitle] = React.useState(product.title);
  const [price, setPrice] = React.useState(product.price);
  const [brand, setBrand] = React.useState(product.brand);
  const [quantity, setQuantity] = React.useState(product.quantity);
  const [desc, setDesc] = React.useState(product.desc);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    navigate("/home/inventory");
  };
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };
  const handleChangeBrand = (event) => {
    setBrand(event.target.value);
  };
  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const updated = {
      _id: product._id,
      title: data.get("title"),
      category: data.get("category"),
      gender: data.get("gender"),
      price: data.get("price"),
      brand: data.get("brand"),
      quantity: data.get("quantity"),
      desc: data.get("desc"),
    };
    sendData(updated);
  };

  const sendData = (data) => {
    axios
      .put(`${baseURL}/product/update`, data, {
        // headers: {
        //   Authorization: localStorage.getItem("token"),
        // },
      })
      .then((res) => {
        console.log(res);
        handleOpen();
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

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="SneakerLogo"
            src="../sneaklogo.png"
            sx={{ width: 80, height: 80 }}
          />{" "}
          <Typography component="h1" variant="h5">
            SneakAR
          </Typography>
          <Typography component="h1" variant="h6">
            Add New Product
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="title"
                  required
                  fullWidth
                  id="productName"
                  label="Product Title"
                  autoFocus
                  value={title}
                  onChange={handleChangeTitle}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={category}
                      label="Category"
                      onChange={handleChange}
                      name="category"
                    >
                      <MenuItem value="Sneaker">Sneaker</MenuItem>
                      <MenuItem value="Causal">Casual</MenuItem>
                      <MenuItem value="Formal">Formal</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="quantity"
                  required
                  fullWidth
                  id="quantity"
                  label="Quantity"
                  value={quantity}
                  onChange={handleChangeQuantity}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">For</InputLabel>
                    <Select
                      labelId="for"
                      id="for"
                      value={gender}
                      label="For"
                      name="gender"
                      onChange={handleChangeGender}
                    >
                      <MenuItem value="Men">Men</MenuItem>
                      <MenuItem value="Women">Women</MenuItem>
                      <MenuItem value="Unisex">Unisex</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="brand"
                  label="Brand"
                  id="brand"
                  value={brand}
                  onChange={handleChangeBrand}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="price"
                  label="Price"
                  id="price"
                  value={price}
                  onChange={handleChangePrice}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  name="desc"
                  multiline
                  minRows={3}
                  required
                  fullWidth
                  value={desc}
                  onChange={handleChangeDescription}
                  id="description"
                  label="Product Description"
                  placeholder="Product Description"
                  autoFocus
                />
              </Grid>

              {/* <Grid item xs={12}>
                <Button variant="contained" component="label">
                  Upload File
                  <input
                    type="file"
                    name="images"
                    hidden
                    multiple
                    accept="image/png , image/jpeg"
                  />
                </Button>
              </Grid> */}
            </Grid>

            <Button
              type="Proceed"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{
                backgroundColor: "#45464c",
                textTransform: "capitalize",
                fontfamily:
                  "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
              }}
            >
              Update Product
            </Button>
          </Box>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Product successfully updated
            </Typography>
          </Box>
        </Modal>
      </Container>
    </ThemeProvider>
  );
};
export default UpdateProduct;
