import React from "react";
import { FaUser } from "react-icons/fa6";





const Header =() =>     {
return(
 <header className="h-[7vh] md:h-[10vh] border-b border-gray-900 p-8 flex items-center justify-end">
 <nav className="flex items-center">
<button className="flex items-center gap-x-2">
<FaUser className="w-5 h-5" />
<span>Yeshi_Prinss</span>
</button>
 </nav>
 </header>
);
};



export default Header;