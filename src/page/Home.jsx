import React, { useState, useEffect } from 'react';
import MainArticle from '../components/MainArticle/MainArticle';
import Card from '../components/Cardnotice/Card';
import { getRelevantPost } from '../services/postService';
import { getAllPosts } from '../services/postService';
import Adv from '../components/Advertisement/Adv'
import { getPostsByCategory } from '../services/postService';
import Notice from '../components/NoticeCategory/Notice';

const Home = () => {
  //console.log("hello from home")
  const [relevantPostData, setRelevantPostData] = useState([]);
  const [postsData, setPostsData] = useState([]);
  const [postsCategoryData, setPostsCategoryData] = useState([]);

  const fetchRelevantPost = async () => {
    const relevantPost = await getRelevantPost();
    setRelevantPostData(relevantPost);
  }

  const fetchAllPosts = async () => {
    const posts = await getAllPosts();
    setPostsData(posts);
  }

  const fetchPostsByCategory = async (category) => {

    const postCategory = await getPostsByCategory(category);
    setPostsCategoryData(postCategory);
  
  }

  useEffect(() => {
    fetchRelevantPost();
    fetchAllPosts()
    const categories = ['gaming', 'company']; // Lista de categorías

    categories.forEach(category => {
        fetchPostsByCategory(category);
    });

  }, []);

  return (
    <div>
      <div className='sm:flex sm: gap-4 px-4'>
        <section style={{ flexBasis: '58%' }}>
          <div className="grid grid-cols-1 gap 12 lg:gap-1 mt-6 lg:grid-cols-1">

            <MainArticle
              key={relevantPostData.id}
              created_at={relevantPostData.created_at}
              title={relevantPostData.title}
              image_url={relevantPostData.image_url}
              content={relevantPostData.content}
              author={relevantPostData.author}
              category={relevantPostData.category}

            />
          </div>
        </section>

        <section>
          <div className="grid grid-cols-1 gap-1 lg:gap-1 mt-2 lg:mt-6 lg:grid-cols-1">
            <h3 className="font-bold text-pink-500 ml-3 text-[20px] " >Últimas Noticias</h3>
            {postsData && postsData.map((posts) => (
              <Card
                key={posts.id}
                created_at={posts.created_at}
                title={posts.title}
                image_url={posts.image_url}
                author={posts.author}
                category={posts.category}
              />
            ))}
          </div>
        </section>
        <section>

          <Adv />
        </section>
      </div>
      <section>
<div>
  
{ postsCategoryData && postsCategoryData.map((post) =>(
 
  <Notice 
   
  key={post.id}
  created_at={post.created_at}
  title={post.title}
  image_url={post.image_url}
  content={post.content}
  author={post.author}
  category={post.category}/>


 ))},



</div>
</section>

<section>
<div>
  
{ postsCategoryData && postsCategoryData.map((post) =>(
 
 <Notice 
  
 key={post.id}
 created_at={post.created_at}
 title={post.title}
 image_url={post.image_url}
 content={post.content}
 author={post.author}
 category={post.category}/>


))},

</div>
 
</section>
      
    
      </div>
      
  );

};


export default Home;
