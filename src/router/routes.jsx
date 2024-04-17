import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
<<<<<<< HEAD
// import AdminDashboard from "../page/Admindashboard"
//import Detailnotice from "../page/Detailnotice"; 
// import Company
=======
import AdminDashboard from "../page/Admindashboard";
//import Detailnotice from "../page/Detailnotice";
>>>>>>> cbf0d6b87a6a8476e3f71e1585f27b0382b772b0
import App from "../App"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
  /*     {
        path: "/",
        element: "/login",
      }, */
      {
        path: "/home",
        element: <Home />,
      },
<<<<<<< HEAD
        /* {
          path: "/admin",
          element: <AdminDashboard />,
        }, */
      /* {
        path: "/detailnotice",
        element: <Detail />,
      }, */
        /* {
          path: "/newnotice",
          element: <AddNewNotice />,
      }, */
    
/*     {
        path: "/company",
        element: <Company />
    }, */
     /*  {
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
        element: <latestnews />,
      }, */
    ],
  },
]);
 
=======
      {
        path: "/admin",
        element: <AdminDashboard />,
      },
        /* {
          path: "/detailnotice",
          element: <Detail />,
        }, */
        /* {
          path: "/newnotice",
          element: <AddNewNotice />,
        }, */
        
        /*     {
          path: "/company",
          element: <Company />
        }, */
        /*  {
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
          element: <latestnews />,
        }, */
      ],
    },
  ]);
>>>>>>> cbf0d6b87a6a8476e3f71e1585f27b0382b772b0
