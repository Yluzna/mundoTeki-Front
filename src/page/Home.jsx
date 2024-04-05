import React, { useState, useEffect } from 'react';
import MainArticle from '../components/MainArticle/MainArticle';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/posts');

        const jsonData = await response.json();
        const relevantPost = jsonData.find(post => post.isRelevant == true);

        setData(relevantPost);

      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="grid grid-cols-1 gap 12 lg:gap-1 mt-6 lg:grid-cols-1">

        <MainArticle
          key={data.id}
          created_at={data.created_at}
          title={data.title}
          image_url={data.image_url}
          content={data.content}
          author={data.author}

        />
      </div>
    </section>
  );
};

export default Home;
