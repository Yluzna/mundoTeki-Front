import { createBrowserRouter } from "react-router-dom";
/* import home from "../page/Home" */
import AdminDashboard from "../page/Admindashboard"
import Detailnotice from "../page/Detailnotice"; 
import Company from "../page/Company";
import Culture from "../page/Culture&segurity";
import Develovmen from "../page/Developmen&programing";
import Gaming from "../page/Gaming";
import Science from "../page/Science&tecnology";
import LatestNews from "../page/Latestnews";
import App from "../App"
 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element:"/login",
      },
      {
        path: "/home",
        element: <Home />,
      },
        {
          path: "/admin",
          element: <AdminDashboard />,
        },
      {
        path: "/detailnotice",
        element: <Detail />,
      },
    {
        path: "/company",
        element: <Company />
    },
      {
        path: "/science&tecnology",
        element: <Science />,
      },
      ,
      {
        path: "/culture&segurity",
        element: <culture />,
      },
      ,
      {
        path: "/developmen&programing",
        element: <developmen />,
      },
      {
        path: "/gaming",
        element: <gaming />,
      }, 
      {
        path: "/latestnews",
        element: <LatestNews />,
       },
    ],
  },
]);
 