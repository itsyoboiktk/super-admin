/* eslint-disable no-undef */

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import PropTypes from "prop-types";
import React from "react";
import { useTheme, styled } from "@mui/material/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableFooter,
  Typography,
  CardMedia,
  CardContent,
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

function UserTable() {
  const [users, setUsers] = React.useState([]);
  const [ordersD, setOrdersD] = React.useState([]);
  const [orderID, setOrderID] = React.useState();
  const [address, setAddress] = React.useState({});
  const [open2, setOpen2] = React.useState(false);

  const handleOpen2 = (val, idO) => {
    setOrdersD(val.items);
    setAddress(val.address);
    setOrderID(idO);
    setOpen2(true);
  };

  const handleClose2 = () => setOpen2(false);

  //backend pae banana hai users ka sara display ka data

  React.useEffect(() => {
    axios
      .get(`${baseURL}/admin/users/display`)
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [open2]);

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
    <div
      style={{
        marginLeft: 10,
        marginRight: 10,
        flexWrap: "wrap",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {/* <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" color="text.primary" textAlign="center">
            Order Detail
          </Typography>
          {ordersD.map((ele) => (
            <Card
              sx={{
                minWidth: "100%",
                maxWidth: "100%",
                height: 120,
                display: "flex",
                flexDirection: "row",
                marginTop: 2,
                marginBottom: 2,
              }}
            >
              <CardMedia
                component="img"
                image={`${baseURL}/${ele.productId.path[0]}`}
                alt="product image"
                sx={{
                  height: 120,
                  width: 80,
                  objectFit: "cover",
                }}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {ele.productId.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {ele.productId.brand}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {"PKR. " + ele.productId.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Size: {ele.size}
                </Typography>
              </CardContent>
            </Card>
          ))}

          <Typography gutterBottom variant="body.2" component="div">
            <LocationOnIcon />
            {"House: " + address.house}
          </Typography>
          <Typography
            gutterBottom
            variant="body.2"
            component="div"
          ></Typography>
          <Typography gutterBottom variant="body.2" component="div">
            {"Street: " + address.street + ", " + address.sector}
          </Typography>
          <Typography gutterBottom variant="body.2" component="div">
            {address.city}
          </Typography>

          <Typography
            gutterBottom
            variant="body.1"
            component="div"
            sx={{ fontWeight: "700" }}
          >
            {"Total:  Rs." + calTotal()}
          </Typography>

          <Button
            onClick={() => updateStatus(orderID)}
            variant="contained"
            style={{
              marginTop: 20,
              backgroundColor: "green",
              textTransform: "capitalize",
              fontfamily:
                "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
            }}
          >
            Dispatch Order
          </Button>
        </Box>
      </Modal> */}
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
          Users Management
        </Typography>
      </Box>
      <TableContainer
        sx={{ maxHeight: 600, borderRadius: "10px", m: 2, mt: -1 }}
      >
        <Table aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Phone No.</StyledTableCell>
              <StyledTableCell>Age</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? users.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : users
            ).map((ele) => (
              <StyledTableRow
                key={ele.id}
                onClick={() => handleOpen2(ele, ele._id)}
                // align={column.align}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell>{ele.name}</StyledTableCell>
                <StyledTableCell>{ele.email}</StyledTableCell>
                <StyledTableCell>{ele.phone}</StyledTableCell>
                <StyledTableCell>{ele.age}</StyledTableCell>
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
                count={users.length}
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

export default UserTable;
