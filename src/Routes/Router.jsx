import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/register";
import FormLayout from "../Layout/FormLayout";
import PrivateRouter from "./PrivateRouter";
import Checkout from "../pages/Checkout/Checkout";
import BookService from "../pages/BookService/BookService";
import Order from "../pages/Orders/Order";


const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <HomeLayout/>,
      children: [
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/checkout',
          element:<PrivateRouter><Checkout/></PrivateRouter> 
        },
        {
          path:'/booking/:id',
          element: <PrivateRouter><BookService/></PrivateRouter>,
          loader: ({params}) => fetch(`https://jq0nvs-3000.csb.app/services/${params.id}`)
        },
        {
          path:'orders',
          element:<PrivateRouter><Order/></PrivateRouter>
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
