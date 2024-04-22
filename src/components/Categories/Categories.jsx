import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
 return (
    <div className="flex justify-between p-4 px-9 m-5">
      <Link to="/company" className="text-black hover:scale-105 transition-transform duration-300 hover:text-amber-600 hidden lg:block">Empresas y Startups</Link>
      <Link to="/science&tecnology" className="text-black hover:scale-105 transition-transform duration-300 hover:text-amber-600 hidden lg:block">Ciencia y Tecnología</Link>
      <Link to="/culture&segurity" className="text-black hover:scale-105 transition-transform duration-300 hover:text-amber-600 hidden lg:block">Cultura y Seguridad Digital</Link>
      <Link to="/develovmen&programing" className="text-black hover:scale-105 transition-transform duration-300 hover:text-amber-600 hidden lg:block">Desarrollo y Programación</Link>
      <Link to="/gaming" className="text-black hover:scale-105 transition-transform duration-300 hover:text-amber-600 hidden lg:block">Gaming</Link>
      <Link to="/latestnews" className="text-black hover:scale-105 transition-transform duration-300 hover:text-amber-600 hidden lg:block">Últimas Noticias</Link>
    </div>
 );
};

export default Categories;
