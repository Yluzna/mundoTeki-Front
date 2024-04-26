import React from "react";
import { FaUser } from "react-icons/fa6";

const Header = () => {
 const currentHour = new Date().getHours();

 let greeting;
 if (currentHour >= 6 && currentHour < 12) {
    greeting = "Good Morning";
 } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good afternoon";
 } else {
    greeting = "Good Night";
 }

 return (
    <header className="h-[7vh] md:h-[10vh] border-b border-gray-900 p-8 flex items-center justify-end">
      <nav className="flex items-center">
        <button className="flex items-center gap-x-2">
        {greeting},
          <FaUser className="w-5 h-5" />
          <span>Alejandro_Diaz</span>
        </button>
      </nav>
    </header>
 );
};

export default Header;
