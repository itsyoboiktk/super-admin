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
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import axios from "axios";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { baseURL } from "./request";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      paper: "#f54298",
    },
  },
});

const AddProduct = () => {
  const navigate = useNavigate();
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [sizes, setSizes] = React.useState([]);
  const [sizeOptions, setOptionSizes] = React.useState([
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
  ]);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    navigate("/inventory");
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
  const handleChangeSize = (event, state) => {
    if (state) {
      let newArr = sizes;
      newArr.push(event);
      setSizes(newArr);
      console.log(sizes);
    } else {
      let newArr = sizes;
      let i = newArr.indexOf(event);
      newArr.splice(i, 1);
      setSizes(newArr);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("here");
    const data = new FormData(event.currentTarget);
    data.append("sizes", JSON.stringify(sizes));
    sendData(data);
  };

  const sendData = (data) => {
    // console.log(data.get("title"));
    axios
      .post(`${baseURL}/product/upload`, data, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
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
                      value={age}
                      label="Category"
                      onChange={handleChange}
                      name="category"
                      required={true}
                    >
                      <MenuItem value="Sneaker">Sneaker</MenuItem>
                      <MenuItem value="Causal">Sports</MenuItem>
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
                      required={true}
                    >
                      <MenuItem value="Men">Men</MenuItem>
                      <MenuItem value="Women">Women</MenuItem>
                      <MenuItem value="Unisex">Unisex</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl>
                    <div>
                      <InputLabel id="demo-simple-select-label">
                        Sizes:
                      </InputLabel>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        width: "150%",
                        marginLeft: 70,
                      }}
                    >
                      {sizeOptions.map((v, i) => (
                        <FormControlLabel
                          value="top"
                          control={
                            <Checkbox
                              onChange={(event) =>
                                handleChangeSize(v, event.target.checked)
                              }
                            />
                          }
                          label={v}
                          labelPlacement="start"
                        />
                      ))}
                    </div>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="brand"
                  label="Brand"
                  id="brand"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="price"
                  label="Price"
                  id="price"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="desc"
                  multiline
                  minRows={3}
                  required
                  fullWidth
                  id="description"
                  label="Product Description"
                  placeholder="Product Description"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" component="label">
                  Upload File
                  <input
                    type="file"
                    name="images"
                    hidden
                    multiple
                    required
                    accept="image/*"
                  />
                </Button>
                <Button variant="contained" component="label">
                  Virtual Try On
                  <input
                    type="file"
                    name="png"
                    hidden
                    multiple
                    required
                    accept="image/png"
                  />
                </Button>
              </Grid>
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
              Add Product
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
              Product successfully added!
            </Typography>
          </Box>
        </Modal>
      </Container>
    </ThemeProvider>
  );
};
export default AddProduct;
