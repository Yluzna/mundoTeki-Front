import React from 'react';

const Card = ({ created_at, title, image_url, content, author }) => {
  
  return (
    <div className="w-full sm:max-w-xs mx-auto my-4 mb-1 bg-white shadow-xl rounded-xl flex">
      <div className="flex-shrink-0">
        <img className="w-24 h-24 sm:w-32 sm:h-32 rounded-md object-cover" src={image_url} alt="text" />
      </div>
      <div className="ml-4">
        <span className="text-sm text-gray-500">{created_at}</span>
        <h6 className="mt-1 text-sm font-medium leading-6 text-gray-800 hover:text-gray-500">{title}</h6>
        <p className="mt-1 text-sm leading-snug text-gray-500">{content}</p>
      </div>
    </div>
  );
  }  
  

export default Card;
