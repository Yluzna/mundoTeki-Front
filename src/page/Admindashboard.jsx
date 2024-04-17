import React from "react";
import MenuPanel from "../components/Admin/MenuPanel/MenuPanel";

function AdminDashboard() {
 return (
    <div>
      <h1 className="text-center text-2xl font-bold shadow-md m-5">Panel de Administrador</h1>
      <div><MenuPanel /></div>
    </div>
 );
}

export default AdminDashboard;
