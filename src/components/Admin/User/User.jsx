import { FaUserEdit } from "react-icons/fa";


const User = () =>  {

return(

    <div className="flex items-center justify-between bg-orange-300/50 p-4 rounded-lg m-9 border border-dashed border-orange-600">
    <div>
  <FaUserEdit className="text-2xl" /> 
      </div>
      <h5 className="text-xl">
        Users
      </h5>
</div>
);
};
export default User;