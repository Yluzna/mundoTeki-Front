import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
 return (
    <div className="flex justify-between p-4 px-9 m-2">
      <Link to="/company" className="text-black hover:scale-105 transition-transform duration-300 hover:text-[#7BB2D9] hidden lg:block">Empresas y Startups</Link>
      <Link to="/science" className="text-black hover:scale-105 transition-transform duration-300 hover:text-[#e11d48] hidden lg:block">Ciencia y Tecnología</Link>
      <Link to="/culture" className="text-black hover:scale-105 transition-transform duration-300 hover:text-[#2A2B2A] hidden lg:block">Cultura y Seguridad Digital</Link>
      <Link to="/development" className="text-black hover:scale-105 transition-transform duration-300 hover:text-amber-600 hidden lg:block">Desarrollo y Programación</Link>
      <Link to="/gaming" className="text-black hover:scale-105 transition-transform duration-300 hover:text-[#16a34a] hidden lg:block">Gaming</Link>
      <Link to="/last" className="text-black hover:scale-105 transition-transform duration-300 hover:text-[#E5446D] hidden lg:block">Últimas Noticias</Link>
    </div>
 );
};

export default Categories;
