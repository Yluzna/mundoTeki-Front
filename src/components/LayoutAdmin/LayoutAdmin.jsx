import React from "react";
import { Outlet } from "react-router-dom";
//import Sidebar from "../Admin/SideBar/SideBar";
//import Header from "../Admin/Header/Header";

function LayoutAdmin() {
  return (
    <div className="min-h-screen grid grid-cols-1 xl:grid-cols-6">
        {/* {*<Sidebar />*} */}
      <div className="xl:col-span-5 p-8">
        {/* <Header /> */}
        <div className="h[90vh] overflow-y-scroll">
        <Outlet />
        </div>
      </div>
    </div>
  );
}

export default LayoutAdmin;