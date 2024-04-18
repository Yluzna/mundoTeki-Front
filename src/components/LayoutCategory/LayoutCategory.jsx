const LayoutCategory = ({ created_at, title, image_url, content, author }) => {

  return (
    <div>
      <div className="">
        <div className="lg:w-80 sm:w-40">
          {/* <img className="object-cover w-full max-w-sm mx-auto ml-[-1px]" src={image_url}></img> */}
          <p className="mb-1 text-xs font-semibold tracking-wide text-gray-600 uppercase">
            {created_at}
          </p>
          <div className="mb-1">
            <a
              href="/"
              aria-label="Article"
              className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              <p className="text-xl font-extrabold leading-none tracking-tight lg:text-xl xl:text-2xl">
                {title}
              </p>
            </a>
          </div>
          <p className="mb-4 text-sm text-gray-700 md:text-m">
            {content}
          </p>
          <div className="flex items-center">
            <p className="text-xs font-medium leading-4 text-gray-600">
              {author}
            </p>
          </div>
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
    </div>
  );
};
export default LayoutCategory;