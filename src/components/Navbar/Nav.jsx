import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaUser } from "react-icons/fa"; 
import { Link } from "react-router-dom";

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
    <nav className="flex items-center justify-between px-9 py-2 text-black text-center border border-b-[#c27a00]">
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="focus:outline-none hover:text-amber-600">
          {menuState.open ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      <div className="text-center flex-grow">
        <img src={"./src/images/teki.PNG"}
            alt="Mundo Teki"
            className="mx-auto h-14 m-4 rounded-lg" /> 
      </div>

      <div className="flex items-center hover:text-amber-600">
        <FaUser size={28} />
      </div>

      {menuState.open && (
 <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="p-6 z-50">
      {menuState.type === 'small' && (
        <>
          <Link to="/company" className="transform hover:scale-110 hover:text-[#7BB2D9] transition-transform duration-200 p-2 rounded block">Empresas y Startups</Link>
          <Link to="/science" className="transform hover:scale-110 hover:text-[#e11d48] transition-transform duration-200 p-2 rounded block">Ciencia y tecnología</Link>
          <Link to="/culture" className="transform hover:scale-110 hover:text-[#2A2B2A] transition-transform duration-200  p-2 rounded block">Cultura y Seguridad digital</Link>
          <Link to="/development" className="transform hover:scale-110 hover:text-[#16a34a] transition-transform duration-200 p-2 rounded block">Desarrollo y programación</Link>
          <Link to="/gaming" className="transform hover:scale-110 hover:text-[#C27A00] transition-transform duration-200 p-2 rounded block">Gaming</Link>
          <Link to="/last" className="transform hover:scale-110 hover:text-[#E5446D]  transition-transform duration-200 p-2 rounded block">Últimas Noticias</Link>
        </>
      )}
    </div>
    <div className="fixed inset-0 bg-white opacity-100 z-40" onClick={closeModal}></div>
 </div>
)}

    </nav>
 );
}

export default Navbar;
