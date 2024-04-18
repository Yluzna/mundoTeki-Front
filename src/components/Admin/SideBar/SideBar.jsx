import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../public/MT.ico'
import { MdHome } from "react-icons/md";
import { TbCategory2 } from "react-icons/tb";
import { FaUserEdit } from "react-icons/fa";
import { CiSignpostDuo1 } from "react-icons/ci";
import { IoMdImages } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { RiMenu2Line } from "react-icons/ri";




const Sidebar = () => {
const [showMenu, setShowmenu] = useState(false);
const [showSubmenu, setShowSubmenu] = useState(false);


  return (
        <>
    <div className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] h-full top-0 bg-gray-100 p-8 z-50 ${showMenu ? "left-0" : "left-full"} transition-all text-wrap`}>

      <div>
        <h1 className='text-center text-1xl font-bold mb-10'>AdminDashboar</h1>
        <img src={Logo} alt="Logo" />
      </div>
      <nav className=''>
        <Link to="/home" className="bg-gray-300 flex items-center m-2 gap-2 py-3 px-4 rounded-lg hover:bg-orange-300 transition-colors" onClick={() => handleClick('Opción 1')}>
          <MdHome style={{ color: 'orange' }} /> Home
        </Link>
|
        <Link to="/" className="bg-gray-300 flex items-center m-2 gap-2 py-3 px-4 rounded-lg hover:bg-orange-300 transition-colors" onClick={() => handleClick('Opción 1')}>
          <TbCategory2
            style={{ color: 'orange' }} />  Categories
        </Link>

        <Link to="/" className="bg-gray-300 flex items-center m-2 gap-2 py-3 px-4 rounded-lg hover:bg-orange-300 transition-colors">
          <FaUserEdit
            style={{ color: 'orange' }} />  Users
        </Link>

        <Link to="/" className="bg-gray-300 flex items-center m-2 gap-2 py-3 px-4 rounded-lg hover:bg-orange-300 transition-colors">
          <CiSignpostDuo1
            style={{ color: 'orange' }} /> Post
        </Link>

        <Link to="/" className="bg-gray-300 flex items-center m-2 gap-2 py-3 px-4 rounded-lg hover:bg-orange-300 transition-colors">
          <IoMdImages
            style={{ color: 'orange' }} /> Images
        </Link>

        <Link to="/" className="bg-gray-300 flex items-center m-2 gap-2 py-3 px-4 rounded-lg hover:bg-orange-300 transition-colors">
          <IoIosLogOut
            style={{ color: 'orange' }} /> Cerrar Sesion
        </Link>
      </nav>
      <button onClick={() => setShowmenu(!showMenu)}
 className='fixed top-4 left-4 bg-orange-400 text-black p-3 rounded-full z-50'>
 <RiMenu2Line />
</button>

    </div>
    </>
  );
};

export default Sidebar;
