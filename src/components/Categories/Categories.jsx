import React from 'react';

const Categories = () => {
 return (
    <div className="flex justify-between p-4 px-9">
      <a href='#' to="/empresas-y-startups" className="text-black hover:scale-105 transition-transform duration-300  hover:text-amber-600 hidden lg:block">Empresas y Startups</a>
      <a href='#' to="/ciencia-y-tecnologia" className="text-black hover:scale-105 transition-transform duration-300  hover:text-amber-600 hidden lg:block">Ciencia y Tecnología</a>
      <a href='#' to="/cultura-y-seguridad-digital" className="text-black hover:scale-105 transition-transform duration-300  hover:text-amber-600 hidden lg:block">Cultura y Seguridad Digital</a>
      <a href='#' to="/desarrollo-y-programacion" className="text-black hover:scale-105 transition-transform duration-300  hover:text-amber-600 hidden lg:block">Desarrollo y Programación</a>
      <a href='#' to="/gaming" className="text-black hover:scale-105 transition-transform duration-300  hover:text-amber-600 hidden lg:block">Gaming</a>
      <a href='#' to="/ultimas-noticias" className="text-black hover:scale-105 transition-transform duration-300 hover:text-amber-600 hidden lg:block">Últimas Noticias</a>
    </div>
 );
};

export default Categories;
