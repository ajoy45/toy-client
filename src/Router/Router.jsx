import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/error404/ErrorPage";
import Home from "../pages/Home/Home";
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
      ],
    },
  ]);
  export default router;