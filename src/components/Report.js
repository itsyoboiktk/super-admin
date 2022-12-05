import React from "react";
import {
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  Box,
  Button,
  Grid,
  experimental_extendTheme,
} from "@mui/material";
import "./report.css";
import axios from "axios";
import { baseURL } from "./request";
import Modal from "@mui/material/Modal";

const Report = () => {
  const style = {
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    height: 700,
    overflow: "scroll",
  };

  const styleM = {
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

  const [reports, setReports] = React.useState([]);
  // const [open, setOpen] = React.useState(false);
  // const [id, setId] = React.useState("");
  // const handleOpen = (_id) => {
  //   setId(_id);
  //   setOpen(true);
  // };
  // const handleClose = () => setOpen(false);

  // const deleteStore = () => {
  //   axios
  //     .delete(`${baseURL}/admin/store/delete/${id}`)
  //     .then((res) => {
  //       console.log("here", res);
  //       setOpen(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  React.useEffect(() => {
    axios
      .get(`${baseURL}/admin/reports/display`)
      .then((res) => {
        setReports(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="test">
      <Box sx={style}>
        <Typography variant="h6" color="text.primary" textAlign="center">
          Reported Shoes
        </Typography>

        {reports.map((element, key) => {
          return (
            <Card
              sx={{
                minWidth: "70%",
                maxWidth: "80%",
                height: 250,
                display: "flex",
                flexDirection: "row",
                marginTop: 2,
                marginBottom: 2,
              }}
            >
              <CardMedia
                component="img"
                image={
                  "/Users/nigarahmad/Desktop/Project/store-web/src/components/assets/priceTag.png"
                }
                alt="product image"
                sx={{
                  height: 120,
                  width: 80,
                  objectFit: "cover",
                }}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {element.storeId.companyName}
                </Typography>
                <Typography variant="body1">Reported By:</Typography>
                <Typography variant="body2" color="text.secondary">
                  {element.userId.name}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {element.userId.email} {element.userId.phone}
                </Typography>

                <Typography variant="body2">Report:</Typography>
                <Typography variant="body2" color="text.secondary">
                  {element.report}
                </Typography>

                {/* <Button
                  onClick={() => handleOpen(element.storeId)}
                  variant="contained"
                  style={{
                    marginTop: 20,
                    marginBottom: 20,
                    backgroundColor: "red",
                    textTransform: "capitalize",
                  }}
                >
                  Delete
                </Button> */}
              </CardContent>
            </Card>
          );
        })}
      </Box>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleM}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to Ban this Store?
          </Typography>
          <div style={{ flexDirection: "row" }}>
            <Button onClick={() => deleteStore()}>Yes</Button>
            <Button onClick={() => handleClose()}>No</Button>
          </div>
        </Box>
      </Modal> */}
    </div>
  );
};

export default Report;
