import React, { useState, useEffect } from 'react';
import Card from '../components/Cardnotice/Card';

const Detailnotice = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/articles');
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
      <div className="grid grid-cols-1 gap-12 lg:gap-24 lg:grid-cols-3">
        {data.map((item) => (
          <Card
            key={item.id}
            created_at={item.created_at}
            title={item.title}
            image_url={item.image_url}
            //content={item.content}
            author={item.author}
          />
        ))}
      </div>
    </section>
  );
};

export default Detailnotice;
