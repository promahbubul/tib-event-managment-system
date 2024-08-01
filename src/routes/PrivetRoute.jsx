import { useContext } from "react";
import { CreateUserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";
import Loading from "../pages/Loading";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(CreateUserContext);
  if (loading) {
    return <Loading />;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} />;
};

export default PrivetRoute;
