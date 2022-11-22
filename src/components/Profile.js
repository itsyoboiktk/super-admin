import React from "react";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import { CardHeader, Divider, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Input from "@mui/material/Input";
import Stack from "@mui/material/Stack";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import SignpostIcon from "@mui/icons-material/Signpost";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
// import {
//   Container,
//   Row,
// } from "react-bootstrap";
import Avatar from "@mui/material/Avatar";

// Data
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";
import { baseURL } from "./request";

const Profile = () => {
  const navigate = useNavigate();
  const [products, setProducts] = React.useState([]);
  const [shop, setShop] = React.useState({
    bio: "",
    companyName: "",
    managers: { name: "", email: "", phone: "" },
    address: { house: "", street: "", sector: "", city: "" },
  });

  const [open2, setOpen2] = React.useState(false);

  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => setOpen2(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => {
    setOpen3(true);
  };
  const handleClose3 = () => setOpen3(false);

  const handleSubmit3 = (event) => {
    event.preventDefault();
    console.log("Upload Pic");
    const data = new FormData(event.currentTarget);
    const updated = {
      // _id: sID,
      dp: data.get("dp"),
    };
    sendData3(updated);
  };
  const sendData3 = (data) => {
    axios.put(`${baseURL}/manager/update/dp`, data).then((res) => {
      console.log(res);
    });
  };

  //   const handleSubmit2 = (event) => {
  //     event.preventDefault();
  //     console.log("here");
  //     const data = new FormData(event.currentTarget);
  //     sendData2(data);
  //   };
  //     const sendData2 = (data) => {
  //       console.log(data.get("title"));
  //       axios.put(`http://localhost:4000/manager/update/${id}`, data).then((res) => {
  //         console.log(res);
  //       });
  //     };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("here store update");
    const data = new FormData(event.currentTarget);
    const updated = {
      addressId: shop.address._id,
      managerId: shop.managers._id,
      companyName: data.get("company"),
      bio: data.get("bio"),
      managerName: data.get("firstName"),
      house: data.get("house"),
      street: data.get("street"),
      sector: data.get("sector"),
      city: data.get("city"),
    };
    sendData(updated);
  };
  const sendData = (data) => {
    axios
      .put(`${baseURL}/manager/update/info`, data, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setOpen(!open);
        console.log(res);
      });
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
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [bio, setBio] = React.useState();
  const [comp, setComp] = React.useState();
  const [manName, setManName] = React.useState();
  const [house, setHouse] = React.useState();
  const [street, setStreet] = React.useState();
  const [sector, setSector] = React.useState();
  const [city, setCity] = React.useState();

  const handleChangeBio = (event) => {
    setBio(event.target.value);
  };
  const handleChangeComp = (event) => {
    setComp(event.target.value);
  };
  const handleChangeMan = (event) => {
    setManName(event.target.value);
  };
  const handleChangeHouse = (event) => {
    setHouse(event.target.value);
  };
  const handleChangeStreet = (event) => {
    setStreet(event.target.value);
  };
  const handleChangeSector = (event) => {
    setSector(event.target.value);
  };
  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };
  React.useEffect(() => {
    console.log("here");
    axios
      .get(`${baseURL}/manager/getInfo`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setShop(res.data[0]);
        setBio(res.data[0].bio);
        setComp(res.data[0].companyName);
        setManName(res.data[0].managers.name);
        setHouse(res.data[0].address.house);
        setStreet(res.data[0].address.street);
        setSector(res.data[0].address.sector);
        setCity(res.data[0].address.city);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [open]);

  const style2 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    height: 600,
    borderRadius: "10px",
    boxShadow: 25,
    p: 4,
    bgColor: "white",
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 500,
    borderRadius: "10px",
    boxShadow: 25,
    p: 4,
    bgColor: "white",
  };

  return (
    <div style={{ paddingTop: 20 }}>
      <Box mt={5} mb={3}>
        <Grid container spacing={0}>
          <Card
            sx={{
              position: "relative",
              mx: 3,
              py: 2,
              px: 2,
              backgroundColor: "#f8f9fa",
              width: "60%",
            }}
          >
            <CardHeader
              title={
                <Typography gutterBottom variant="h4" component="div">
                  Edit Profile
                </Typography>
              }
            />

            <CardContent>
              <Paper style={{ padding: "40px 20px", overflow: "auto" }}>
                <Box
                  alignItems="center"
                  component="form"
                  validate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="company"
                        label="Company"
                        name="company"
                        autoFocus
                        autoComplete="Company"
                        value={comp}
                        onChange={handleChangeComp}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="bio"
                        label="Shop Info"
                        name="bio"
                        autoComplete="bio"
                        value={bio}
                        onChange={handleChangeBio}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="Manager Name"
                        autoFocus
                        value={manName}
                        onChange={handleChangeMan}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="Manger Name"
                        autoFocus
                        value={manName}
                        onChange={handleChangeMan}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="House"
                        label="House"
                        name="house"
                        autoComplete="House"
                        value={house}
                        onChange={handleChangeHouse}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="Street"
                        label="Street"
                        name="street"
                        autoComplete="Street"
                        value={street}
                        onChange={handleChangeStreet}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="Sector"
                        label="Sector"
                        name="sector"
                        autoComplete="Sector"
                        value={sector}
                        onChange={handleChangeSector}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="City"
                        label="City"
                        name="city"
                        autoComplete="City"
                        value={city}
                        onChange={handleChangeCity}
                      />
                    </Grid>
                  </Grid>
                  <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
                  <Button
                    type="Proceed"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Update
                  </Button>
                </Box>
              </Paper>
            </CardContent>
          </Card>

          <Card
            sx={{
              position: "relative",
              mx: 3,
              py: 2,
              px: 2,
              backgroundColor: "#f8f9fa",
              width: "30%",
              height: "60%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Avatar
                sx={{ width: 100, height: 100 }}
                onClick={() => handleOpen3()}
              >
                DP
              </Avatar>
              <Typography sx={{ py: 1 }} variant="h5" fontWeight="medium">
                {shop.managers.name}
              </Typography>
              <Typography variant="button" color="text" fontWeight="regular">
                Manager
              </Typography>
              <Typography variant="button" color="text" fontWeight="regular">
                {shop.bio}
              </Typography>
              <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
              <Stack
                direction="row"
                spacing={1}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <EmailIcon />
                <Typography variant="h6" className="text-muted">
                  {shop.managers.email}
                </Typography>
              </Stack>
              <Stack
                direction="row"
                spacing={1}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <ContactPhoneIcon />
                <Typography variant="h6" className="text-muted">
                  {shop.managers.phone}
                </Typography>
              </Stack>
              <Stack
                direction="row"
                spacing={1}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <SignpostIcon />
                <Typography variant="h6" className="text-muted">
                  {shop.address.house + " "} {shop.address.street + ", "}{" "}
                  {shop.address.sector + " "}
                </Typography>
              </Stack>
              <Typography gutterBottom variant="h6">
                <LocationOnIcon />
                {shop.address.city}
              </Typography>
            </div>
          </Card>
        </Grid>
      </Box>

      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box bgColor="light" coloredShadow="dark" sx={style2}>
          <Paper style={{ padding: "40px 20px", overflow: "auto" }}>
            <Box
              alignItems="center"
              component="form"
              noValidate
              //   onSubmit={handleSubmit2}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={24} sm={12}>
                  <TextField
                    autoComplete="given-name"
                    name="Cpass"
                    required
                    fullWidth
                    placeholder="Current Password"
                    id="Cpass"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    name="Npass"
                    placeholder="New Password"
                    required
                    fullWidth
                    id="NPass"
                    autoFocus
                  />
                </Grid>
              </Grid>
              <Divider variant="fullWidth" style={{ margin: "30px 0" }} />

              <Button type="Proceed" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Change Password
              </Button>
            </Box>
          </Paper>
        </Box>
      </Modal>
      <Modal
        open={open3}
        onClose={handleClose3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box bgColor="light" coloredShadow="dark" sx={style}>
          <Paper style={{ padding: "40px 20px", overflow: "auto" }}>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit3}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Card sx={{ maxWidth: 245, margin: "10px", flex: "1 1 20%" }}>
                    <CardMedia
                      component="img"
                      height="140"
                      // image={`http://localhost:4000/${ele.path[1]}`}
                      image="{hel}"
                      alt="Display Picture"
                    />
                  </Card>

                  <Button variant="contained" component="label" color="info">
                    Upload file
                    <Input
                      type="file"
                      name="dp"
                      hidden
                      multiple
                      accept="image/png , image/jpeg"
                    />
                  </Button>
                </Grid>
              </Grid>
              <Button
                type="Proceed"
                onClick={() => handleOpen3()}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Save Change
              </Button>
            </Box>
          </Paper>
        </Box>
      </Modal>
      <Box
        pt={2}
        px={2}
        lineHeight={1.25}
        style={{
          backgroundColor: "#f8f9fa",
          borderRadius: 5,
          marginLeft: 10,
          marginRight: 11,
        }}
      >
        <Typography variant="h6" fontWeight="medium">
          Products
        </Typography>
        <Typography variant="button" color="text">
          Top Products
        </Typography>
      </Box>
      <div
        style={{
          backgroundColor: "#f8f9fa",

          marginLeft: 10,
          marginRight: 11,
          flexWrap: "wrap",
          display: "flex",
          flexDirection: "row",
          // borderRadius: 5,
        }}
      >
        {products.map((ele) => (
          <Box
            // display="flex"
            borderRadius="16px"
            width="30%"
            height="100%"
            marginRight={3}
            paddingBottom={1}
          >
            <Card
              sx={{
                maxWidth: 245,
                margin: "10px",
                flex: "1 1 20%",
                boxShadow: "1px 3px 1px #9E9E9E",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={`${baseURL}/${ele.path[0]}`}
                alt="product image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {ele.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {ele.brand}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  PKR/- {ele.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() =>
                    navigate("/productView", {
                      state: { product: ele },
                    })
                  }
                >
                  View
                </Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </div>
    </div>
  );
};

export default Profile;
