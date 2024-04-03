import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
 return (
    <footer className="bg-amber-600 text-black p-8 text-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start">
        <div className="flex flex-col text-center p-5">
          <h2 className="text-lg font-bold mb-2 text-sm text-center">Sobre Nosotros</h2>
          <h2 className="text-lg mb-2 text-sm">2024. Mundo TEKI</h2>
        </div>
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <div className="flex space-x-4">
            <FaFacebook className="text-black m-3 hover:text-white transform hover:scale-110 transition-transform duration-200" size={35} />
            <FaTwitter className="text-black m-3  hover:text-white transform hover:scale-110 transition-transform duration-200" size={35} />
            <FaInstagram className="text-black m-3  hover:text-white transform hover:scale-110 transition-transform duration-200" size={35} />
          </div>
          <p className=' text-center m-3 p-2'>Todos los derechos reservados</p>
          <p className='text-center'>Copyright ©2024 Company| All rights reserved</p>
        </div>
        <div className="flex flex-col text-center p-5">
          <h2 className="text-lg font-bold mb-2 text-sm">Aviso Legal</h2>
          <ul className="list-none">
            <li className="mb-1"><a href="#" className="text-black">Política de privacidad</a></li>
            <li className="mb-1"><a href="#" className="text-black">Cookies</a></li>
            <li className="mb-1"><a href="#" className="text-black">Términos y condiciones</a></li>
          </ul>
        </div>
      </div>
    </footer>
 );
};

export default Footer;
