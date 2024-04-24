import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import App from "../App";
import Gaming from "../page/Gaming";
import Development from "../page/Development";
import Culture from "../page/Culture";
import Company from "../page/Company";
import Science from "../page/Science";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Se debe renderizar un componente, no una cadena
    children: [
      {
        path: "/home",
        element: <Home />,
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
},
{
  path: "/company",
  element: <Company />,
},
{
  path: "/science",
  element: <Science />,
},
    ],
  },
]);
