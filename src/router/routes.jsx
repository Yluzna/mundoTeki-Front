import { createBrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Home from '../page/Home';
import Gaming from '../page/Gaming';
import Development from '../page/Development';
import Culture from '../page/Culture';
import LayoutAdmin from '../components/LayoutAdmin/LayoutAdmin';
import HomeAdmin from '../page/Admin/HomeAdmin';
import Users from '../page/Admin/Users';
import Post from '../page/Admin/Post';
import Images from '../page/Admin/Images';
import Login from '../page/LoginUser';
import Register from '../page/RegisterUser';
import RegisterUser from '../page/RegisterUser';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'gaming',
        element: <Gaming />,
      },
      {
        path: 'development',
        element: <Development />,
      },
      {
        path: 'culture',
        element: <Culture />,
      },
      {
        path: 'admin',
        element: <LayoutAdmin />,
        children: [
          {
            index: true,
            element: <HomeAdmin />,
          },
          {
            path: 'users',
            element: <Users />,
          },
          {
            path: 'post',
            element: <Post />,
          },
          {
            path: 'images',
            element: <Images />,
          },
        ],
      },
    ],
  },
]);