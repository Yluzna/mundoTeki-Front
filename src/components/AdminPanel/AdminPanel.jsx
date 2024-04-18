import React, { useState, useEffect } from 'react';
import logo from '/MT.ico';
import { FaBars } from 'react-icons/fa';

const AdminPanel = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [isSmallScreen, setIsSmallScreen] = useState(false);

 useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
 }, []);

 useEffect(() => {
    if (!isMenuOpen) {
      // Aquí puedes colocar la lógica que deseas que se ejecute cuando el menú se cierra
      console.log('El menú se ha cerrado');
    }
 }, [isMenuOpen]);

 return (
    <div className="flex h-screen bg-gray-200">
      <div className="w-1/5 bg-gray-300 text-white p-4">
        <img src={logo} alt="Logo mundo teki" className="mx-auto" />
        {isSmallScreen && (
          <button
            className="h-12 w-12 border-2 m-5 rounded flex flex-col justify-center items-center group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars size={24} />
          </button>
        )}
        {isMenuOpen && (
          <>
            <button className="bg-gray-500 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded mb-2">
              Home
            </button>
            <button className="bg-gray-500 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded mb-2">
              Categorias
            </button>
            <button className="bg-gray-500 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded mb-2">
              Imagenes
            </button>
            <button className="bg-gray-500 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded mb-2">
              Post
            </button>
          </>
        )}
      </div>
      <div className="w-4/5 bg-white p-4">
        <h2 className="text-xl">Contenido Principal</h2>
      </div>
    </div>
 );
};

export default AdminPanel;
