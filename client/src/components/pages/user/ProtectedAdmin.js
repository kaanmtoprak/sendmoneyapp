import { Navigate, Outlet,Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext"
// import { Box } from "@chakra-ui/react";

const ProtectedAdmin = ({element}) => {
  const { loggedIn,user } = useAuth();



  return loggedIn ? <Outlet /> : <Navigate to="/login" />


 
}

export default ProtectedAdmin