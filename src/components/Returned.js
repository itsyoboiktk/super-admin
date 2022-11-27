import React from "react";
import {
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  Box,
  Button,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import "./returned.css";

const Returned = () => {
  const style = {
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    height: 700,
    overflow: "scroll",
  };

  return (
    <div className="test">
      <Box sx={style}>
        <Typography variant="h6" color="text.primary" textAlign="center">
          Returned Orders
        </Typography>
        <Card
          sx={{
            minWidth: "70%",
            maxWidth: "80%",
            height: 200,
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
              Title
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Brand
            </Typography>
            <Typography variant="body2" color="text.secondary">
              "PKR. 40,000"
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Size: 40
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="body2" color="text.secondary">
              Reason of return: I ordered the wrong shoe by mistake
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              alignSelf: "flex-end",
              marginLeft: "24%",
            }}
          >
            <Button size="small">Add To Inventory</Button>
            <Button size="small">Scrap</Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            minWidth: "70%",
            maxWidth: "80%",
            height: 200,
            display: "flex",
            // flexDirection: "row",
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
              Title
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Brand
            </Typography>
            <Typography variant="body2" color="text.secondary">
              "PKR. 40,000"
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Size: 40
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="body2" color="text.secondary">
              Reason of return: I ordered the wrong shoe by mistake
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            minWidth: "70%",
            maxWidth: "80%",
            height: 200,
            display: "flex",
            // flexDirection: "row",
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
              Title
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Brand
            </Typography>
            <Typography variant="body2" color="text.secondary">
              "PKR. 40,000"
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Size: 40
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="body2" color="text.secondary">
              Reason of return: I ordered the wrong shoe by mistake
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            minWidth: "70%",
            maxWidth: "80%",
            height: 200,
            display: "flex",
            // flexDirection: "row",
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
              Title
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Brand
            </Typography>
            <Typography variant="body2" color="text.secondary">
              "PKR. 40,000"
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Size: 40
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="body2" color="text.secondary">
              Reason of return: I ordered the wrong shoe by mistake
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Returned;
