import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import App from "../App";
import Gaming from "../page/Gaming";
import Development from "../page/Development";
import Culture from "../page/Culture";

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
    ],
  },
]);
