import UserTitle from "../../components/Admin/User/UserTitle";
import UsersTable from "../../components/Admin/User/UsersTable";
import SearchBar from "../../components/Admin/SearchBar/SearchBar";


const Users = () => {
    return (
<>
<UserTitle />
<SearchBar />
<UsersTable />
</>
    );
};

export default Users;