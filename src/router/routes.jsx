import { createBrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Home from '../page/Home';
import Gaming from '../page/Gaming';
import Development from '../page/Development';
import Culture from '../page/Culture';
import LayoutAdmin from '../components/LayoutAdmin/LayoutAdmin';
import NewPost from '../page/Admin/NewPost';
import Users from '../page/Admin/Users';
import Post from '../page/Admin/Post';
<<<<<<< HEAD
import Images from '../page/Admin/Images';
import Login from '../page/LoginUser';
import Register from '../page/RegisterUser';
import RegisterUser from '../page/RegisterUser';
=======
import Login from '../page/LoginRegister/Login/Login'
>>>>>>> 7acc74b515f7ec84ee5bab6a0c70902130df1477

export const router = createBrowserRouter([
  {
    path: '/',
<<<<<<< HEAD
=======
    element: <Home />,
  },
  {
    path: '/',
>>>>>>> 7acc74b515f7ec84ee5bab6a0c70902130df1477
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
<<<<<<< HEAD
        path: 'register',
        element: <Register />,
      },
      {
=======
>>>>>>> 7acc74b515f7ec84ee5bab6a0c70902130df1477
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