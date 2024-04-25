import React from 'react';

const MainArticle = ({ created_at, title, image_url, description, author, content }) => {
  return (
    <section className="mt-[-8px] md:mt-[-110px] lg:mt-[-9px]">
      <img 
        src={image_url} 
        alt="articulo principal" 
        className="w-full h-auto mb-1 object-cover" 
      />
      <div>
        <div className="flex">
          <span className="text-xs text-gray-500">{created_at}</span>
          <span className="text-xs text-gray-500">{author}</span>
        </div>
        <div className="py-2 ">
          <h6 className="mt-1 text-[25px] font-bold leading-7 text-gray-800 hover:text-gray-500 sm:text-[30px]">{title}</h6>
          <p className="mt-2 text-[14px] sm:text-[14px] leading-snug text-black py-[-3] md:py-[9px] ">{description}</p>
          <p className="mt-2 text-[14px] sm:text-[14px] leading-snug text-black py-2">{content}</p>
        </div>
      </div>
    </section>
  );
};

export default MainArticle;
