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
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/home" element={<Layout />}>
          <Route path="" element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="addImages" element={<AddImages />} />
          <Route path="productView" element={<ProductView />} />
          <Route path="updateProduct" element={<UpdateProduct />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
