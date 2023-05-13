import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();
  

  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  } else if (user) {
    return children;
  } else {
    
    return <Navigate to='/login' state={{from:location}}/>
  }
};

export default PrivateRouter;
