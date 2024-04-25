import { MdPostAdd } from "react-icons/md";


const NewPostTitle = () =>  {

    return(
        <div className="flex items-center justify-between bg-orange-300/50 p-4 rounded-lg m-9 border border-dashed border-orange-600">
        <div>
      <MdPostAdd
 className="text-2xl" /> 
          </div>
          <h5 className="text-xl">
            NewPost
          </h5>
    </div>
    );
    };
    export default NewPostTitle;