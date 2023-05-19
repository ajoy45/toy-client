import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/error404/ErrorPage";
import Home from "../pages/Home/Home";
import AddToy from "../pages/AddToy/AddToy";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllToy from "../pages/AllToy/AllToy";
  const router = createBrowserRouter([
    {
      path: "/",
      element:<App></App>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "addToy",
          element: <AddToy></AddToy>,
        },
        {
          path: "allToy",
          element: <AllToy></AllToy>,
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "register",
          element: <Register></Register>,
        },
      ],
    },
  ]);
  export default router;