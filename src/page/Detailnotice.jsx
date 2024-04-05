import React, { useState, useEffect } from 'react';
import Card from '../components/Cardnotice/Card';
import useFetch from '../services/useFetch';


const Detailnotice = () => {
  

  const URL_API = import.meta.env.VITE_URL
  
  const { data, error, loading} = useFetch(URL_API)

  return (
    <section>
      <div className="grid grid-cols-1 gap-1 lg:gap-1 mt-2 lg:mt-6 lg:grid-cols-1">
      <h3 className="font-bold text-pink-500 ml-3 text-[20px] " >Últimas Noticias</h3>
        {data && data.map((item) => (
          <Card
            key={item.id}
            created_at={item.created_at}
            title={item.title}
            image_url={item.image_url}
            // content={item.content}
            author={item.author}
            categor
          />
        ))}
      </div>
    </section>
  );
};

export default Detailnotice;
