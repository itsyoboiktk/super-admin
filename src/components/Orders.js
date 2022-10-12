/* eslint-disable no-undef */

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useTheme, styled } from "@mui/material/styles";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableFooter,
  Grid,
  Paper,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

import TablePagination from "@mui/material/TablePagination";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { baseURL } from "./request";
// import order from "../../../fyp-backend/models/order";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function OrderTable() {
  const [orders, setOrders] = React.useState([]);
  const [ordersD, setOrdersD] = React.useState([]);
  const [orderID, setOrderID] = React.useState();

  const [open2, setOpen2] = React.useState(false);

  const handleOpen2 = (val, idO) => {
    setOrdersD(val);
    setOrderID(idO);
    setOpen2(true);
  };
  console.log(orderID);
  const handleClose2 = () => setOpen2(false);

  const updateStatus = (val) => {
    console.log("Hello in update", val);

    const updated = {
      id: val,
      status: "COMPLETED",
    };
    console.log(updated);
    sendData(updated);
  };

  const sendData = (data) => {
    axios
      .put(`${baseURL}/order/update`, data, {
        // headers: {
        //   Authorization: localStorage.getItem("token"),
        // },
      })
      .then((res) => {
        console.log(res);
      });
  };

  React.useEffect(() => {
    axios
      .get(`${baseURL}/order/display`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setOrders(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - orders.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    // <Paper sx={{ width: "100%", overflow: "hidden", backgroundColor: "aqua" }}>
    <div
      style={{
        marginLeft: 10,
        marginRight: 10,
        flexWrap: "wrap",
        display: "flex",
        flexDirection: "row",
        // borderRadius: 5,
      }}
    >
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: "55%",
            transform: "translate(-50%, -50%)",
            width: "60%",
            border: "1px solid",
            borderRadius: "10px",
          }}
        >
          <Paper style={{ padding: "40px 20px", overflow: "auto" }}>
            <Grid
              container
              wrap="nowrap"
              spacing={2}
              style={{ overflow: "auto" }}
            >
              <Grid justifyContent="left" item xs zeroMinWidth>
                {
                  // eslint-disable-next-line no-shadow
                  ordersD.map((ele) => (
                    <Card
                      sx={{
                        maxWidth: "80%",
                        flex: "1 1 20%",
                        display: "flex",
                        flexDirection: "row",
                        padding: "10px",
                        boxShadow: "1px 3px 1px 3px #9E9E9E",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="140"
                        image={`${baseURL}/${ele.productId.path[0]}`}
                        alt="product image"
                        sx={{
                          maxWidth: "20%",
                          maxHeight: "30%",
                          borderRadius: "10px",
                        }}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {ele.productId.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {ele.productId.brand}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {ele.productId.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Size: {ele.size}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Description: {ele.productId.desc}
                        </Typography>
                      </CardContent>
                    </Card>
                  ))
                }
                <Button
                  onClick={() => updateStatus(orderID)}
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  style={{
                    backgroundColor: "#45464c",
                    textTransform: "capitalize",
                    fontfamily:
                      "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                  }}
                >
                  Dispatch Order
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Modal>
      <Box
        sx={{
          m: 2,
          p: 3,
          backgroundColor: "#fa3751",
          borderRadius: "10px",
          width: "100%",
        }}
      >
        <Typography variant="h6" color="white">
          Orders Management
        </Typography>
      </Box>
      <TableContainer
        sx={{ maxHeight: 600, borderRadius: "10px", m: 2, mt: -1 }}
      >
        <Table aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Order ID</StyledTableCell>
              <StyledTableCell>Order Date</StyledTableCell>
              <StyledTableCell>Order Time</StyledTableCell>
              <StyledTableCell>Payment Method</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? orders.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : orders
            ).map((ele) => (
              <StyledTableRow
                key={ele.id}
                onClick={() => handleOpen2(ele.items, ele._id)}
                // align={column.align}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell>{ele._id}</StyledTableCell>
                <StyledTableCell>{ele.orderDate}</StyledTableCell>
                <StyledTableCell>{ele.orderTime}</StyledTableCell>
                <StyledTableCell>{ele.paymentMethod}</StyledTableCell>
                <StyledTableCell>{ele.status.toUpperCase()}</StyledTableCell>
              </StyledTableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                sx={{ width: "100%" }}
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={orders.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
    // </Paper>
  );
}

export default OrderTable;
