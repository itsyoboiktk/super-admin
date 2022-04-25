import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MiniDrawer from "./components/MiniDrawer";
import AddProduct from "./components/AddProduct";
// import SignInSide from "./components/SignInSide";

// import NavbarTop from "./components/NavbarTop";
import SignIn from "./components/SignIn";
import SignUp from "./components/Signup";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<MiniDrawer />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};
export default App;
