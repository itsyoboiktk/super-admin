import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MiniDrawer from "./components/MiniDrawer";
import AddProduct from "./components/AddProduct";
import SignIn from "./components/SignIn";
import SignUp from "./components/Signup";
import SideBar from "./components/SideBar";
import MenuCard from "./components/MenuCard";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      {/* <SideBar /> */}
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/home" element={<Layout />}>
          <Route path="addProduct" element={<AddProduct />} />

          {/* <Route path="menu" element={<MenuCard />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
