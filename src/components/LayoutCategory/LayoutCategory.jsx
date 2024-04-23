import { Link } from 'react-router-dom'

const LayoutCategory = ({ created_at, title, image_url, description, author }) => {

  return (
    <div>
      <div >
        <div className="lg:mt-[-18px] mt-[-16px] ">
          <div>
            <Link to="/gaming"
              aria-label="Article"
              className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
            /> 
              
          </div>
              <p className="text-xl font-extrabold leading-none tracking-tight lg:text-xl xl:text-2xl mb-1">
                {title}
              </p>
          
          </div>
          <p className=" text-sm text-gray-900 md:text-m lg:w-100">
            {description}
          </p>
        </div>
        <div className="flex justify-between mt-1">
            <p className="text-xs font-medium leading-4 text-gray-600 ">
              {author}</p>
              <p className="mb-1 text-xs font-semibold tracking-wide text-gray-600 uppercase mr-7">
            {created_at}
           </p>
           </div>
        {/* <div className="flex flex-col space-y-8 lg:col-span-3 col-span-1">
          <div style={{ marginRight: '8rem' }}>
            <p className="mb-1 text-xs font-semibold tracking-wide text-gray-600 uppercase">
              {created_at}
            </p>
            <div className="mb-3">
              <a
                href="/"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                <p className=" text-xl font-extrabold leading-none tracking-tight lg:text-xl">
                  {title}
                </p>
              </a>
            </div>
            <p className="mb-2 text-sm text-gray-700 md:text-m">
              {content}
            </p>
            <div className="flex items-center">
              <p className="text-xs font-medium leading-4 text-gray-600">
                {author}
              </p>
            </div>
          </div>
          <div style={{ marginRight: '8rem' }}>
            <p className="mb-1 text-xs font-semibold tracking-wide text-gray-600 uppercase">
              {created_at}
            </p>
            <div className="mb-3">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                <p className=" text-xl font-extrabold leading-none tracking-tight lg:text-xl">
                  {title}
                </p>
              </a>
            </div>
            <p className="mb-2 text-gray-700 md:text-m text-sm">
              {content}
            </p>
            <div className="flex items-center">
             <p className="text-xs font-medium leading-4 text-gray-600">
                {author}
              </p>

            </div>
          </div>
        </div> */}
      </div>
    
  );
};
export default LayoutCategory;