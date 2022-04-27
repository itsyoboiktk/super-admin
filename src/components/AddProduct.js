import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      paper: "#f54298",
    },
  },
});

const AddProduct = () => {
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const newPro = {
      name: data.get("productName"),
      quantity: data.get("quantity"),
      brand: data.get("brand"),
      price: data.get("price"),
      category: age,
      for: gender,
    };
    axios.post("http://localhost:4000/product/add", newPro).then((res) => {
      console.log(res);
    });
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
                  name="productName"
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
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="price"
                  label="Price"
                  id="price"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Product
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default AddProduct;
