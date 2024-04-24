import React from 'react';

const DetailNews = ({ news }) => {
  return (
    <section style={{ position: 'relative' }} className='px-3'>
      <div className='lg:flex lg:gap-4 '>
        <section style={{ flexBasis: '80%' }}>
        
          <div className="grid grid-cols-1 lg:grid-cols-1">
          {gamingPostCategoryData.map(post => (
          <div key={post.id} onClick={() => handleClick(post)}>
            <MainArticle
              key={post.id}
              created_at={postData.created_at}
              title={postData.title}
              image_url={postData.image_url}
              content={postData.content}
              author={postData.author}
              category={postData.category}

            />
           </div> 
          
        ))}
        </div>
        </section>
        </div>
        </section>

  );
};

export default DetailNews;