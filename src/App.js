import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddProduct from "./components/AddProduct";
import SignIn from "./components/SignIn";
import SignUp from "./components/Signup";
import Layout from "./components/Layout";
import Overview from "./components/Overview";
import AddImages from "./components/AddImages";
const App = () => {
  return (
    <Router>
      {/* <SideBar /> */}
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/home" element={<Layout />}>
          <Route path="" element={<Overview />} />
          <Route path="overview" element={<Overview />} />

          <Route path="addProduct" element={<AddProduct />} />
          <Route path="addImages" element={<AddImages />} />

          {/* <Route path="menu" element={<MenuCard />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
