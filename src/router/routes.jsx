import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
//import Detailnotice from "../page/Detailnotice"; 
// import Company
import App from "../App"


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
           // Asegúrate de que todos los objetos estén correctamente cerrados y que los comentarios estén bien formateados
           // {
           //   path: "/detailnotice",
           //   element: <Detail />,
           // },
           // {
           //   path: "/newnotice",
           //   element: <AddNewNotice />,
           // },
           // {
           //   path: "/company",
           //   element: <Company />,
           // },
           // {
           //   path: "/science&tecnology",
           //   element: <Science />,
           // },
           // {
           //   path: "/culture&segurity",
           //   element: <Culture />,
           // },
           // {
           //   path: "/developmen&programing",
           //   element: <Development />,
           // },
           // {
           //   path: "/gaming",
           //   element: <Gaming />,
           // },
           // {
           //   path: "/latestnews",
           //   element: <LatestNews />,
           // },
         ],
       },
     ],
  },
 ]);
 