import { IoMdImages } from "react-icons/io";


const Images = () =>  {

    return(
        <div className="flex items-center justify-between bg-orange-300/50 p-4 rounded-lg m-9 border border-dashed border-orange-600">
        <div>
      <IoMdImages className="text-2xl" /> 
          </div>
          <h5 className="text-xl">
            Images
          </h5>
    </div>
    );
    };
    export default Images;