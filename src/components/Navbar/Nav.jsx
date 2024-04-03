import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaUser } from "react-icons/fa"; 

function Navbar() {
 const [menuState, setMenuState] = useState({
    open: false,
    type: 'small'
 });

 const closeModal = () => {
    setMenuState({ ...menuState, open: false });
 };

 const toggleMenu = () => {
    setMenuState({ ...menuState, open: !menuState.open });
 };

 useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuState({ open: false, type: 'large' });
      } else {
        setMenuState({ open: false, type: 'small' });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
 }, []);

 return (
    <nav className="flex items-center justify-between px-9 py-8 text-black text-center border-2">
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="focus:outline-none hover:text-amber-600">
          {menuState.open ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      <div className="text-center flex-grow">
        <img src="/MT.png" alt="Logo" className="h-14 mx-auto" /> 
      </div>

      <div className="flex items-center hover:text-amber-600">
        <FaUser size={28} />
      </div>

      {menuState.open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="p-6 z-50">
            {menuState.type === 'small' && (
              <>
                <a href="#" className="transform hover:scale-110 transition-transform duration-200 p-2 rounded block">Empresas y Startups</a>
                <a href="#" className="transform hover:scale-110 transition-transform duration-200 p-2 rounded block">Ciencia y tecnología</a>
                <a href="#" className="transform hover:scale-110 transition-transform duration-200 p-2 rounded block">Cultura y Seguridad digital</a>
                <a href="#" className="transform hover:scale-110 transition-transform duration-200 p-2 rounded block">Desarrollo y programación</a>
                <a href="#" className="transform hover:scale-110 transition-transform duration-200 p-2 rounded block">Gaming</a>
                <a href="#" className="transform hover:scale-110 transition-transform duration-200 p-2 rounded block">Últimas Noticias</a>
              </>
            )}
           {/*  {menuState.type === 'large' && (
              <>
                <a href="#" className="transform hover:scale-110 transition-transform duration-200 p-2 rounded block">Destacados</a>
                <a href="#" className="transform hover:scale-110 transition-transform duration-200 p-2 rounded block">Análisis</a>
                <a href="#" className="transform hover:scale-110 transition-transform duration-200 p-2 rounded block">Últimas Noticias</a>
              </>
            )} */}
          </div>
          <div className="fixed inset-0 bg-black opacity-25 z-40" onClick={closeModal}></div>
        </div>
      )}
    </nav>
 );
}

export default Navbar;
