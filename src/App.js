import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddProduct from "./components/AddProduct";
import SignIn from "./components/SignIn";
import SignUp from "./components/Signup";
import Layout from "./components/Layout";
import Overview from "./components/Overview";
import AddImages from "./components/AddImages";
// import ImageCheck from "./components/ImageCheck";
import UpdateProduct from "./components/UpdateProduct";
import Inventory from "./components/Inventory";
import ProductView from "./components/ProductView";
import Orders from "./components/Orders";
import Profile from "./components/Profile";
import React from "react";
import PrivateRoute from "./PrivateRoute";
const App = () => {
  const [token, setToken] = React.useState(false);
  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(true);
    } else {
      setToken(false);
    }
  }, []);

  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Overview />} />
=======
        {/* {!token ? ( */}
        {/* <> */}
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* </> */}
        {/* ) : ( */}
        <Route element={<PrivateRoute />}>
          {/* <Route path="/home" element={<Layout />}> */}
          <Route path="/" element={<Overview />} />
          {/* <Route path="overview" element={<Overview />} /> */}
>>>>>>> e366746c69408fbcc4e61f88f8891a44dcb7c0ea
          <Route path="inventory" element={<Inventory />} />
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="addImages" element={<AddImages />} />
          <Route path="productView" element={<ProductView />} />
          <Route path="updateProduct" element={<UpdateProduct />} />
          <Route path="orders" element={<Orders />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        {/* // </Route> */}
        {/* )} */}
      </Routes>
    </Router>
  );
};
export default App;
