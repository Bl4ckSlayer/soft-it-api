import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import Home from "../Pages/Home/Home";
import Verify from "../Pages/Verify/Verify";
import Forget from "../Pages/Forget/Forget";
import Update from "../Pages/Update/Update";
import DashBoard from "../Pages/Dashboard/DashBoard";
import Products from "../Pages/Dashboard/Products/Products";
import ProductDetails from "../Pages/Dashboard/Products/ProductDetails";
import UpdateProduct from "../Pages/Dashboard/Products/UpdateProduct";
import CreateProducts from "../Pages/Dashboard/Products/CreateProducts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/verify",
        element: <Verify></Verify>,
      },
      {
        path: "/forget",
        element: <Forget></Forget>,
      },
      {
        path: "/update",
        element: <Update></Update>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard/products",
        element: <Products></Products>,
        children: [],
      },
      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
      },
      {
        path: "/dashboard/products/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/dashboard/update/:id",
        element: <UpdateProduct></UpdateProduct>,
      },
      {
        path: "/dashboard/createProduct",
        element: <CreateProducts></CreateProducts>,
      },
    ],
  },
]);
export default router;
