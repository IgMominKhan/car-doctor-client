import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, isLoading, setIsLoading } = useContext(AuthContext);
  const navigate = useNavigate();

console.log(isLoading,user)
  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  } else if (user) {
    return children;
  } else {
    useEffect(()=>{
navigate('/login')
    },[])
  }
};

export default PrivateRouter;
