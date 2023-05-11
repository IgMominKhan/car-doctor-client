import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home/Home";


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
    }
  ]
)

export default router
