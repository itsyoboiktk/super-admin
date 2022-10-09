import React from "react";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import { Divider, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Input from "@mui/material/Input";

import Avatar from "@mui/material/Avatar";

// Data
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const sID = "6341e29d65f5afd41390c047";
  const [shop, setShop] = React.useState();
  const [products, setProducts] = React.useState([]);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => setOpen2(false);

  const [openAdd, setOpenAdd] = React.useState(false);
  const handleOpenAdd = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => setOpenAdd(false);

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
      _id: sID,
      dp: data.get("dp"),
    };
    sendData3(updated);
  };
  const sendData3 = (data) => {
    axios.put("http://localhost:4000/manager/update/dp", data).then((res) => {
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
      _id: sID,
      companyName: data.get("shopName"),
      bio: data.get("bio"),
    };

    sendData(updated);
  };
  const sendData = (data) => {
    axios.put("http://localhost:4000/manager/update/info", data).then((res) => {
      console.log(res);
    });
  };
  const addrID = "6341e29d65f5afd41390c043";
  const handleSubmitAddr = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const updated = {
      _id: addrID,
      house: data.get("house"),
      street: data.get("street"),
      sector: data.get("sector"),
      city: data.get("city"),
    };

    sendDataAddr(updated);
  };
  const sendDataAddr = (data) => {
    axios.put("http://localhost:4000/manager/update/addr", data).then((res) => {
      console.log(res);
    });
  };

  React.useEffect(() => {
    axios
      .get(`http://localhost:4000/product/inventory/display/${sID}`)
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    axios
      .get(`http://localhost:4000/manager/display/${sID}`)
      .then((res) => {
        setShop(res.data[0]);
        console.log(shop);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
    <div style={{ backgroundColor: "gray", paddingTop: 20 }}>
      <Card
        sx={{
          position: "relative",
          mx: 3,
          py: 2,
          px: 2,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Avatar onClick={() => handleOpen3()}>DP</Avatar>
          </Grid>
          <Grid item>
            <Box height="100%" mt={0.5} lineHeight={1}>
              <Typography variant="h5" fontWeight="medium">
                {/* {man.company} */}
              </Typography>
              <Typography variant="button" color="text" fontWeight="regular">
                CEO / Co-Founder
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Card>

      <Box mt={5} mb={3}>
        <Grid container spacing={1}>
          <Grid item xl={12} sx={{ display: "flex" }}>
            <Card
              sx={{
                margin: "10px",
                flex: "1 1 20%",
                width: "1200px",
                bgcolor: "white",
              }}
            >
              <CardContent>
                {/* <Paper style={{ padding: "40px 20px", overflow: "auto" }}> */}
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid justifyContent="left" item xs zeroMinWidth>
                    <h4 style={{ margin: 0, textAlign: "left" }}>
                      Store Info:{" "}
                    </h4>
                    <p style={{ textAlign: "left" }}>
                      {" "}
                      Hello world
                      {/* {shop.bio} */}
                    </p>
                  </Grid>
                </Grid>
                <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
                <Typography gutterBottom variant="h6" component="div">
                  Store Name: "shop.companyName"
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Email: "man.email"
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Address: "man.Address"
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Mobile: "man.Company"
                </Typography>
                {/* </Paper> */}
              </CardContent>
              <CardActions>
                <Button onClick={() => handleOpen()}>Edit Profile</Button>
                <Button onClick={() => handleOpenAdd()}>Change Address</Button>
                <Button onClick={() => handleOpen2()}>Change Password</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box bgColor="light" coloredShadow="dark" sx={style2}>
          <Paper style={{ padding: "40px 20px", overflow: "auto" }}>
            <Box
              alignItems="center"
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={24} sm={12}>
                  <TextField
                    autoComplete="given-name"
                    name="shopName"
                    required
                    fullWidth
                    placeholder="Shop Name"
                    id="shopName"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    name="bio"
                    placeholder="Shop Info"
                    required
                    fullWidth
                    id="detail"
                    autoFocus
                    multiline
                  />
                </Grid>
              </Grid>
              <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
              <Button type="Proceed" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Update
              </Button>
            </Box>
          </Paper>
        </Box>
      </Modal>
      <Modal
        open={openAdd}
        onClose={handleCloseAdd}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box bgColor="light" coloredShadow="dark" sx={style2}>
          <Paper style={{ padding: "40px 20px", overflow: "auto" }}>
            <Box
              alignItems="center"
              component="form"
              noValidate
              onSubmit={handleSubmitAddr}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={24} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="house"
                    required
                    fullWidth
                    placeholder="house"
                    id="house"
                    autoFocus
                    label="House"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="street"
                    placeholder="Street"
                    required
                    fullWidth
                    id="street"
                    autoFocus
                    label="Street"
                  />
                </Grid>
                <Grid item xs={24} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="sector"
                    required
                    fullWidth
                    placeholder="Sector"
                    id="sector"
                    autoFocus
                    label="Sector"
                  />
                </Grid>
                <Grid item xs={24} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="city"
                    required
                    fullWidth
                    placeholder="City"
                    id="city"
                    autoFocus
                    label="City"
                  />
                </Grid>
              </Grid>
              <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
              <Button type="Proceed" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Update Address
              </Button>
            </Box>
          </Paper>
        </Box>
      </Modal>
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
          backgroundColor: "white-smoke",
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
      <Box p={2} display="flex" flexDirection="column">
        <Grid item xs={12} xl={12}>
          <div className="grid-container">
            {products.map((ele) => (
              <Box
                display="flex"
                borderRadius="lg"
                shadow="md"
                width="100%"
                height="100%"
                marginRight={10}
                paddingBottom={1}
              >
                <Card sx={{ maxWidth: 345, margin: "10px", flex: "1 1 20%" }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`http://localhost:4000/${ele.path[0]}`}
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
                        navigate("/home/productView", {
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
        </Grid>
      </Box>
    </div>
  );
};

export default Profile;
