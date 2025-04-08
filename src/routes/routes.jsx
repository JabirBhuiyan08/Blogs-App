import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../layout/Main";
import Admin from "../Admin/Admin";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
        children: [
             {
                path: "/",
                element: <Home></Home>,
             },
             {
                path: "admin",
                element: <Admin></Admin>,
             },
             {
                path: "blogs",
                element: <Blogs></Blogs>,
             },
             {
                path: "contact",
                element: <Contact></Contact>,
             },
        ]
   }
]);