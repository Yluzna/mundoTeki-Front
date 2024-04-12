import React, { useState, useEffect } from 'react';
import MainArticle from '../components/MainArticle/MainArticle';
import Card from '../components/Cardnotice/Card';
import { getRelevantPost } from '../services/postService';
import { getAllPosts } from '../services/postService';
import Adv from '../components/Advertisement/Adv';
import Adv2 from '../components/Advertisement/Adv2';
import { getPostsByCategory } from '../services/postService';
import Notice from '../components/NoticeCategory/Notice';
import '../index.css';

const Home = () => {
  
  
  //console.log("hello from home")
  const [relevantPostData, setRelevantPostData] = useState([]);
  const [postsData, setPostsData] = useState([]);
  const [postsCategoryData, setPostsCategoryData] = useState([]);
  const [gamingPostsData, setGamingPostsData] = useState([]);
  const [companyPostsData, setCompanyPostsData] = useState([]);
  const [sciencePostsData, setSciencePostsData] = useState([]);
  const [developmentPostsData, setDevelopmentPostsData] = useState([]);
  const [culturePostData, setCulturePostData] = useState([]);
  const [lastPostData, setLastPostData] = useState([]);

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
    const gamingPosts = await getPostsByCategory('gaming');
    setGamingPostsData(gamingPosts);

    const companyPosts = await getPostsByCategory('company');
    setCompanyPostsData(companyPosts);
    const sciencePosts = await getPostsByCategory('science');
    setSciencePostsData(sciencePosts);
    const developmentPosts = await getPostsByCategory('development');
    setDevelopmentPostsData(developmentPosts);
    const culturePosts = await getPostsByCategory('culture');
    setCulturePostData(culturePosts);
    const lastPosts = await getPostsByCategory('last');
    setLastPostData(lastPosts);

  }

  useEffect(() => {
    fetchRelevantPost();
    fetchAllPosts()
    const categories = ['gaming', 'company', 'science', 'development', 'culture', 'last']; // Lista de categorías

    categories.forEach(category => {
      fetchPostsByCategory(category);
    });

  }, []);

  return (
    <div>
      <div className='lg:flex lg:gap-4 '>
        <section style={{ flexBasis: '55%' }}>
          <div className="grid grid-cols-1 gap 12 lg:gap-1 lg:grid-cols-1">

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



        <section style={{ flexBasis: '30%' }}>
          <div className="relative grid grid-cols-1 gap-1 lg:gap-1 mt-2 lg:mt-0 lg:grid-cols-1 " style={{ marginTop: '-3px' }}>
            <h3 className="font-bold text-[#E5446D] ml-3 text-[20px]" >Últimas Noticias</h3>
            {lastPostData && lastPostData.map((posts) => (
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
          <Adv />


        </section>
      </div>

      <section >
        <div className="mb-6">
          <Adv2 />
        </div>
      </section>

      <section>

        <div>
          <div>
            <h3 className='text-[#7BB2D9] text-xl font-medium ml-5 mt-7 lg:mt-6 '>Gaming</h3>
            </div>
            <div className="border-t border-[#7BB2D9] my-1 shadow-md lg:w-full">
            </div>
          </div>
          
            <div>
              {gamingPostsData.map(post => (
                <Notice
                  key={post.id}
                  created_at={post.created_at}
                  title={post.title}
                  image_url={post.image_url}
                  //content={post.content}
                  author={post.author}
                  category={post.category}
                  
                />
                
              ))}
            </div>
          
      </section>



      <section>
        <div>

          <div>
            <h3 className='text-[#C27A00] text-xl font-medium ml-5 mt-7 lg:mt-6'>Science</h3>
          </div>
          <div className="border-t border-[#C27A00] my-1  lg:w-full">
          </div>
        </div>
        <div>
          {companyPostsData.map(post => (
            <Notice
              key={post.id}
              created_at={post.created_at}
              title={post.title}
              image_url={post.image_url}
              //content={post.content}
              author={post.author}
              category={post.category}
            />
          ))}
        </div>

      </section>

      <section >
        <div>
          <div >
            <div >

              <h3 className='text-[#2A2B2A] text-xl font-medium ml-5 mt-7 lg:mt-6' >Development</h3>
            </div>
            <div className="border-t border-[#2A2B2A] my-1  lg:w-full">
            </div>
          </div>
          <div>
            {developmentPostsData.map(post => (
              <Notice
                key={post.id}
                created_at={post.created_at}
                title={post.title}
                image_url={post.image_url}
                //content={post.content}
                author={post.author}
                category={post.category}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div>

          <h3 className='text-xl font-medium ml-5 mt-7 lg:mt-6'>Culture & Security</h3>


          {culturePostData.map(post => (
            <Notice
              key={post.id}
              created_at={post.created_at}
              title={post.title}
              image_url={post.image_url}
              //content={post.content}
              author={post.author}
              category={post.category}
            />
          ))}
        </div>
      </section>

      <section className='mb-4'>

        <div>
          <h3 className='text-xl font-medium ml-5 mt-7 lg:mt-6'>Science & Tecnology</h3>
          <div></div>
          {sciencePostsData.map(post => (
            <Notice
              key={post.id}
              created_at={post.created_at}
              title={post.title}
              image_url={post.image_url}
              //content={post.content}
              author={post.author}
              category={post.category}
            />
          ))}
        </div>
      </section>




    </div>

  );

};


export default Home;
