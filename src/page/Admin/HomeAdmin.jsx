import React from "react";
import { Outlet } from "react-router-dom";
import { TbCategory2 } from "react-icons/tb";

function HomeAdmin() {
  return (
    <div className="flex items-center justify-between bg-orange-300/50 p-4 rounded-lg m-9 border border-dashed border-orange-600">
        <div>
      <TbCategory2 className="text-2xl" /> 
          </div>
          <h5 className="text-xl">
            Categories
          </h5>
    </div>
  );
}

export default HomeAdmin;
