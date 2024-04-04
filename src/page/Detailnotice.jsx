import React, { useState, useEffect } from 'react';
import Card from '../components/Cardnotice/Card';

const Detailnotice = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/posts');
        
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="grid grid-cols-1 gap-5 lg:gap-1 mt-6 lg:grid-cols-1">
      <h3 className="font-bold text-pink-500  " >Últimas Noticias</h3>
        {data.map((item) => (
          <Card
            key={item.id}
            created_at={item.created_at}
            title={item.title}
            image_url={item.image_url}
            //content={item.content}
            author={item.author}
            categor
          />
        ))}
      </div>
    </section>
  );
};

export default Detailnotice;
