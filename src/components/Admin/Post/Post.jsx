import { CiSignpostDuo1 } from "react-icons/ci";


const Post = () =>  {

    return(
        <div className="flex items-center justify-between bg-orange-300/50 p-4 rounded-lg m-9 border border-dashed border-orange-600">
        <div>
      <CiSignpostDuo1 className="text-2xl" /> 
          </div>
          <h5 className="text-xl">
            Post
          </h5>
    </div>
    );
    };
    export default Post;