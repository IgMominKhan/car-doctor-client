import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/register";
import FormLayout from "../Layout/FormLayout";
import PrivateRouter from "./PrivateRouter";
import Checkout from "../pages/Checkout/Checkout";
import BookService from "../pages/BookService/BookService";


const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <HomeLayout/>,
      children: [
        {
          path:'/',
          element: <PrivateRouter><Home/></PrivateRouter>
        },
        {
          path:'/checkout',
          element:<Checkout/> 
        },
        {
          path:'/booking/:id',
          element: <BookService/>,
          loader: ({params}) => fetch(`https://jq0nvs-3000.csb.app/services/${params.id}`)
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
