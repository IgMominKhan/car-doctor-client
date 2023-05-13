import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, isLoading, setIsLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  } else if (user) {
    return children;
  } else {
    return navigate("/login");
  }
};

export default PrivateRouter;
