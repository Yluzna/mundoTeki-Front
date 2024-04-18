import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../public/MT.ico'

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-row md:flex-row h-screen">
      <div className="w-full md:w-1/10 h-screen bg-gray-200">
        <div className="p-4">
          <div className="flex justify-center mt-4">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="flex flex-col">
            <Link to="/admin" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => handleClick('Opción 1')}>
              Home
            </Link>
            <Link to="/admin" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => handleClick('Opción 2')}>
              Categories
            </Link>
            <Link to="/admin" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => handleClick('Opción 3')}>
              Users
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
