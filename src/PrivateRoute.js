import { Navigate, Outlet } from "react-router-dom";
import Layout from "./components/Layout";

const PrivateRoute = () => {
  const getToken = () => {
    if (localStorage.getItem("token")) {
      //   setToken(true)
      return true;
    } else {
      //   setToken(false);
      return false;
    }
  };
  let auth = getToken();
  return auth ? <Layout /> : <Navigate to="/signIn" />;
};
export default PrivateRoute;
