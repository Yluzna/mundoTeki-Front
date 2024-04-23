import React, { useState } from "react";

import User from "../../components/Admin/User/User";
import UsersTable from "../../components/Admin/User/UsersTable";



const Users = () => {
    return (
<>
<User />
<UsersTable />
</>
    );
};

export default Users;