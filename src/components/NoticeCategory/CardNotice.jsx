const CardNotice = ({ image_url, title, content, created_at, author, category,description }) => {




  return (
    <div className="px-1 py-1 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div >
        <div className="mr-[-5px] transition-shadow duration-300 bg-white rounded shadow-sm px-4 mr-4">
          <img
            src={image_url}
            className="object-cover max-w h-40"
            alt=""
          />
          <div className="p-4 border border-t-0 mt-[-9px] mr-">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title=""
              >
                {category}
              </a>
              <span className="text-gray-600">— {created_at}</span>
            </p>
            <a
              href="/"
              aria-label="Category"
              title=""
              className="inline-block mb-3 text-xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700 ml-[-8px]"
            >
              {title}
            </a>
            <p className="mb-2 text-gray-700 text-[13px] ml-[-8px]">
              {description}
            </p>
          </div>
        </div>
        </div>
        </div>
  
          );
}
export default CardNotice;