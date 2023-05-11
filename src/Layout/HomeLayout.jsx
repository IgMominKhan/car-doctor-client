import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <div className="max-w-7xl md:w-11/12 mx-auto px-5">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default HomeLayout;
