import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import SignIn from "./components/SignIn";
import SignUp from "./components/Signup";

import Analytics from "./components/Analytics";
import Stores from "./components/Stores";
import StoreDetail from "./components/StoreDetail";
import Report from "./components/Report";
import Users from "./components/Users";

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
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Analytics />} />
          <Route path="stores" element={<Stores />} />
          <Route path="storeDetail" element={<StoreDetail />} />
          <Route path="users" element={<Users />} />
          <Route path="report" element={<Report />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
