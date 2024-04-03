import React from 'react';

const Card = ({ created_at, title, image_url, content, author }) => {
  
  return (
    <div className="sm:flex lg:items-start group">
      <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
        <img className="w-full rounded-md sm:h-32 sm:w-32 object-cover" src={image_url} alt="text" />
      </div>
      <div className='font-family: Signika Negative'>
        <span className="text-sm text-gray-500">{created_at}</span>
        <h6 className="mt-3 text-lg font-medium leading-6 text-xl text-gray-800 hover:text-gray-500">{title}</h6>
        <p className="mt-2 text leading-normal text-gray-500">{content}</p>
      </div>
    </div>
  );
};

export default Card;
