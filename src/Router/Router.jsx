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
import SingleToy from "../pages/SingleToy/SingleToy";
import RequireAuth from "../protect/RequireAuth";
import MyToy from "../pages/MyToy/MyToy";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import Blog from "../pages/Blog/Blog";

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
          element: 
            <RequireAuth>
                <AddToy></AddToy>
            </RequireAuth>
          ,
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
          path: "blog",
          element: <Blog></Blog>,
        },
        {
          path: "register",
          element: <Register></Register>,
        },
        {
          path: "updateToy/:id",
          element: <UpdateToy></UpdateToy>,
          loader:({params})=>fetch(`http://localhost:3000/allToy/${params.id}`)
        },
        {
          path: "myToy",
          element:<RequireAuth>
            <MyToy></MyToy>
          </RequireAuth>,
        },
        {
          path: "allToy/:id",
          element: 
            <RequireAuth>
              <SingleToy></SingleToy>
            </RequireAuth>
          ,
          loader:({params})=>fetch(`http://localhost:3000/allToy/${params.id}`)
        },
      ],
    },
  ]);
  export default router;