import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import App from "../App"
import Gaming from "../page/Gaming"
import Development from "../page/Development"
import Culture from "../page/Culture"
import LayoutAdmin from "../components/LayoutAdmin/LayoutAdmin"
import HomeAdmin from "../page/Admin/HomeAdmin";
import Users from "../page/Admin/Users"; 
import Post from "../page/Admin/Post";
import Images from "../page/Admin/Images";


export const router = createBrowserRouter([
  {
     path: "/",
     element: <App />,
     children: [
       {
         path: "/home",
         element: <Home />,
       },
       {
         path: "/admin",
         element: <LayoutAdmin />,
         children: [
           {
             index: true,
             element: <HomeAdmin />,
           }, 
           {
             path: "/admin/users",
             element: <Users />,
           }, 
           {
             path: "/admin/post",
             element: <Post />,
           },
           {
             path: "/admin/images",
             element: <Images />
           }
         ]
       }
     ]
  },
  {
     path: "/gaming",
     element: <Gaming />,
  },
  {
     path: "/development",
     element: <Development />,
  },
  {
     path: "/culture",
     element: <Culture />,
  }
 ]);
 