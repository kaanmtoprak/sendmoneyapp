import { Navigate, Outlet,Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext"
import { Box } from "@chakra-ui/react";

const ProtectedAdmin = ({element}) => {
  const { loggedIn,user } = useAuth();



if(loggedIn && user.role ==="admin"){
    return (
        <>
        <nav>
				<ul className="admin-menu">
					<li>
						<Link to={"/admin"}>Home</Link>
					</li>

				</ul>
			</nav>
			<Box mt={10}>
				<Outlet />
			</Box></>
    )
}else if(!loggedIn){
    return <Navigate to="/" />
}
else{
    return <Navigate to="/admin" />
  }


 
}

export default ProtectedAdmin