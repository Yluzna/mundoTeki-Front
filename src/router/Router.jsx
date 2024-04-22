import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from "../page/Admindashboard";
import Detailnotice from "../page/Detailnotice";
import Company from "../page/Company";
import Culture from "../page/Culture&segurity";
import Develovmen from "../page/Developmen&programing";
import Gaming from "../page/Gaming";
import Science from "../page/Science&tecnology";
import LatestNews from "../page/Latestnews";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../page/Home";

export const router = createBrowserRouter([
 {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
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
        path: "/Detailnotice",
        element: <Detailnotice />,
      },
      {
        path: "/company",
        element: <Company />,
      },
      {
        path: "/science&tecnology",
        element: <Science />,
      },
      {
        path: "/culture&segurity",
        element: <Culture />,
      },
      {
        path: "/developmen&programing",
        element: <Develovmen />,
      },
      {
        path: "/gaming",
        element: <Gaming />,
      },
      {
        path: "/latestnews",
        element: <LatestNews />,
      }, */
    ],
 },
/*  {
    path: "/login",
    element: <AuthPage />,
 }, */
]);
