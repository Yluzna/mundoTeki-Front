import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './components/Navbar/Nav';
import Categories from './components/Categories/Categories';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
 const location = useLocation();
 const isAdminOrLoginPage = location.pathname.includes('/admin') || location.pathname.includes('/login')  ||  location.pathname.includes('/Register');

 return (
    <>
      {!isAdminOrLoginPage && <NavBar />}
      {!isAdminOrLoginPage && <Categories />}
      <Outlet />
      {!isAdminOrLoginPage && <Footer />}
    </>
 );
}

export default App;
