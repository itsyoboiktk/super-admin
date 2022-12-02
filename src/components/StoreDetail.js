import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./storeDetail.css";

import { Button, Grid, Divider, Paper, Card } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import SignpostIcon from "@mui/icons-material/Signpost";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import axios from "axios";
import { baseURL } from "./request";

const StoreDetail = () => {
  const { state } = useLocation();
  const store = state.store;

  return (
    <div className="page">
      <Box
        sx={{
          width: "100%",
          mt: "10px",
        }}
      >
        <Card
          sx={{
            position: "relative",
            py: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Avatar>DP</Avatar>
            <Typography variant="h5" fontWeight="medium">
              {store.companyName}
            </Typography>
            <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
            <Typography variant="h5" fontWeight="medium">
              Store Bio
            </Typography>
          </div>
        </Card>

        <div className="card">
          <Box mt={2} mb={2} sx={{ width: "50%" }}>
            <Grid container spacing={0}>
              <Card
                sx={{
                  position: "relative",
                  mx: 3,
                  py: 2,
                  flex: "1 1 20%",
                }}
              >
                <CardContent>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <EmailIcon />

                    <Typography gutterBottom variant="h6" component="div">
                      Email:
                    </Typography>
                    <Typography variant="h6" className="text-muted">
                      testing@gmail.com
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <LocationCityIcon />
                    <Typography gutterBottom variant="h6" component="div">
                      Building:
                    </Typography>
                    <Typography variant="h6" className="text-muted">
                      Testing Address
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <SignpostIcon />
                    <Typography gutterBottom variant="h6" component="div">
                      Street:
                    </Typography>
                    <Typography variant="h6" className="text-muted">
                      Testing Address two
                    </Typography>
                  </Stack>
                  <Typography gutterBottom variant="h6">
                    <LocationOnIcon />
                    Testing City
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <ContactPhoneIcon />
                    <Typography gutterBottom variant="h6" component="div">
                      Phone:
                    </Typography>
                    <Typography variant="h6" className="text-muted">
                      {store.managers.number}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Box>
          <Box mt={2} mb={2} sx={{ width: "50%" }}>
            <Grid container spacing={0}>
              <Card
                sx={{
                  position: "relative",
                  py: 2,
                  flex: "1 1 20%",
                }}
              >
                <CardContent>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <EmailIcon />

                    <Typography gutterBottom variant="h6" component="div">
                      Total Products:
                    </Typography>
                    <Typography variant="h6" className="text-muted">
                      4
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <LocationCityIcon />
                    <Typography gutterBottom variant="h6" component="div">
                      Total Orders:
                    </Typography>
                    <Typography variant="h6" className="text-muted">
                      5
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Box>
        </div>
      </Box>

      <Box
        pt={2}
        px={2}
        lineHeight={1.25}
        style={{
          borderRadius: 5,
          marginLeft: 10,
          marginRight: 11,
        }}
      >
        <Typography variant="h6" fontWeight="medium">
          Products listed by the store:
        </Typography>
      </Box>
      <div
        style={{
          marginLeft: 10,
          marginRight: 11,
          flexWrap: "wrap",
          display: "flex",
          flexDirection: "row",
          // borderRadius: 5,
        }}
      >
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
              //image={`${baseURL}/${ele.path[0]}`}
              alt="product image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Black Panther
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Nike
              </Typography>
              <Typography variant="body2" color="text.secondary">
                PKR/- 42,000
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View</Button>
            </CardActions>
          </Card>
        </Box>
      </div>
    </div>
  );
};

export default StoreDetail;
