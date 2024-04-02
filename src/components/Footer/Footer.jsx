import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
 return (
    <footer className="bg-amber-600 text-black p-8 text-xs">
      <div className="container mx-auto flex justify-between">
        <div className="flex flex-col">
          <h2 className="text-lg font-bold mb-2 text-sm">Sobre Nosotros</h2>
          <h2 className="text-lg mb-2 text-sm">2024. Mundo TEKI</h2>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex space-x-4 mt-4">
            <FaFacebook className="text-black m-3" size={25} />
            <FaTwitter className="text-black m-3" size={25} />
            <FaInstagram className="text-black m-3" size={25} />
          </div>
          <p>Todos los derechos reservados</p>
        </div>
        <div className="flex flex-col">
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
