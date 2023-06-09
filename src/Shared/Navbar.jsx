import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, setUser, logout } = useContext(AuthContext);

  // logout
  const handleLogout = () => {
    logout()
      .then(()=> setUser(null))
      .catch((err) => console.error(err));
  };

  
  const navList = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      {user?.email && <li>
      <NavLink to={`/orders?email=${user.email}`}>Orders</NavLink>
      </li>}
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navList}

              {user
                ? (
                  <>
                    <li>
                      <Link>{user?.email}</Link>
                    </li>
                    <li>
                      <Link onClick={handleLogout}>Logout</Link>
                    </li>
                  </>
                )
                : (
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                )}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navList}
            {user
              ? (
                <>
                  <li>
                    <Link>{user?.email}</Link>
                  </li>
                  <li>
                    <Link onClick={handleLogout}>Logout</Link>
                  </li>
                </>
              )
              : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-outline btn-warning">Appoinment</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
