import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "./App";
import Home from "./components/home";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path: "/home",
      element: <Home/>
    },
  ]);