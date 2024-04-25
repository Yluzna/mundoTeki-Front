import { createBrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Home from '../page/Home';
import Gaming from '../page/Gaming';
import Development from '../page/Development';
import Culture from '../page/Culture';
import Science from '../page/Science';
import Company from '../page/Company';
import Last from '../page/Last';
import LayoutAdmin from '../components/LayoutAdmin/LayoutAdmin';
import Users from '../page/Admin/Users';
import Post from '../page/Admin/Post';
import NewPost from '../page/Admin/NewPost';
import Register from '../page/RegisterUser';
import Login from '../page/LoginUser'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
       path: "/login",
       element: <Login />,
     },
     {
       path: "/register",
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
        path: 'company',
        element: <Company />,
      },
       {
        path: 'science',
        element: <Science />,
      },
      {
        path: 'last',
        element: <Last />,
      },
      {
        path: 'admin',
        element: <LayoutAdmin />,
        children: [
          {
            index: true,
            element: <Users />,
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
            path: 'Newpost',
            element: <NewPost />,
          },
        ],
      },
    ],
  },
]);