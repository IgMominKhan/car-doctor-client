import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/register";
import FormLayout from "../Layout/FormLayout";


const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <HomeLayout/>,
      children: [
        {
          path:'/',
          element: <Home/>
        }
      ]
    },
    {
      path: '/',
      element: <FormLayout/>,
      children: [
        {
          path: 'login',
          element:<Login/>,

        },
        {
          path:'register',
          element: <Register/>
        }
      ]
    }

  ]
)

export default router
