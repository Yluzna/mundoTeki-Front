import React, { useState, useEffect } from 'react';
import MainArticle from '../components/MainArticle/MainArticle';
import Card from '../components/Cardnotice/Card';
import { getRelevantPost } from '../services/postService';
import { getAllPosts } from '../services/postService';
import Adv from '../components/Advertisement/Adv';
import Adv2 from '../components/Advertisement/Adv2';
import { getPostsByCategory } from '../services/postService';
import '../index.css';
import LayoutCategory from '../components/LayoutCategory/LayoutCategory';
import { getRelevantPostCategory } from '../services/postService';

const Home = () => {


  //console.log("hello from home")
  const [relevantPostData, setRelevantPostData] = useState([]);
  const [postsCategoryData, setPostsCategoryData] = useState([]);
  const [gamingPostsData, setGamingPostsData] = useState([]);
  const [companyPostsData, setCompanyPostsData] = useState([]);
  const [sciencePostsData, setSciencePostsData] = useState([]);
  const [developmentPostsData, setDevelopmentPostsData] = useState([]);
  const [culturePostData, setCulturePostData] = useState([]);
  const [lastPostData, setLastPostData] = useState([]);
  const[relevantPostCategoryData, setRevelantPostCategoryData] = useState([])
  const [relevantGamingPostCategoryData, setRelevantGamingPostCategoryData] = useState([]);
  const [relevantCompanyPostCategoryData, setRelevantCompanyPostCategoryData] = useState([]);
  const [relevantSciencePostCategoryData, setRelevantSciencePostCategoryData] = useState([]);
  const [relevantDevelopmentPostCategoryData, setRelevantDevelopmentPostCategoryData] = useState([]);
  const [relevantCulturePostCategoryData, setRelevantCulturePostCategoryData] = useState([]);

  const fetchRelevantPost = async () => {
    const relevantPost = await getRelevantPost();
    setRelevantPostData(relevantPost);
  }

  const fetchAllPosts = async () => {
    const posts = await getAllPosts();
    setPostsData(posts);
  }

  const fetchRelevantPostCategory = async (category) => {
    const relevantPostCategory = await getRelevantPostCategory(category);
    setRevelantPostCategoryData(relevantPostCategory);

    const relevantGamingPostCategoryData = await getRelevantPostCategory('gaming');
    setRelevantGamingPostCategoryData(relevantGamingPostCategoryData);

    const relevantCulturePostCategoryData = await getRelevantPostCategory('Culture');
    setRelevantCulturePostCategoryData(relevantCulturePostCategoryData);

    const relevantCompanyPostCategoryData = await getRelevantPostCategory('Company');
    setRelevantCompanyPostCategoryData(relevantCompanyPostCategoryData);

    const relevantDevelopmentPostCategoryData = await getRelevantPostCategory('Development');
    setRelevantDevelopmentPostCategoryData(relevantDevelopmentPostCategoryData);

    const relevantSciencePostCategoryData = await getRelevantPostCategory('Science');
    setRelevantSciencePostCategoryData(relevantSciencePostCategoryData);
  }
  //por categoria
  const fetchPostsByCategory = async (category) => {

    const postCategory = await getPostsByCategory(category);
    setPostsCategoryData(postCategory);
    const gamingPosts = await getPostsByCategory('gaming');
    setGamingPostsData(gamingPosts);

    const culturePosts = await getPostsByCategory('culture');
    setCulturePostData(culturePosts);


    const companyPosts = await getPostsByCategory('company');
    setCompanyPostsData(companyPosts);
    const sciencePosts = await getPostsByCategory('science');
    setSciencePostsData(sciencePosts);
    const developmentPosts = await getPostsByCategory('development');
    setDevelopmentPostsData(developmentPosts);

    const lastPosts = await getPostsByCategory('last');
    setLastPostData(lastPosts);

  }


  useEffect(() => {
    fetchRelevantPost();
    fetchAllPosts()
    const categories = ['gaming', 'company', 'science', 'development', 'culture', 'last']; // Lista de categorías

    categories.forEach(category => {
      // console.log(category)
      fetchRelevantPostCategory(category);

      const categories = ['gaming', 'company', 'science', 'development', 'culture', 'last'];
      categories.forEach(category => {
        fetchPostsByCategory(category);
      });
    });
    // console.log(relevantGamingPostCategoryData)
  }, []);

  let image = [];

  relevantGamingPostCategoryData.map(post => (
    image= post.image_url

  )
  )

  relevantCulturePostCategoryData.map(post => (
    image = post.image_url
  )
  )

  relevantCompanyPostCategoryData.map(post => (
    image = post.image_url
  )
  )

  relevantDevelopmentPostCategoryData.map(post => (
    image = post.image_url
  )
  )

  relevantSciencePostCategoryData.map(post => (
    image = post.image_url
  )
  )


  return (
    <section style={{ position: 'relative' }} className='px-3'>
      <div className='lg:flex lg:gap-4 '>
        <section style={{ flexBasis: '55%' }}>
          <div className="grid grid-cols-1 lg:grid-cols-1">

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

        <section style={{ position: 'absolute', top: 0, right: 12, width: '11%' }}>

          <Adv />
          <Adv />
          <Adv />
        </section>
      </div>

      <section >
        <div className="mb-6 flex gap-14 ml-1">
          <Adv2 />
          <Adv2 />
        </div>
      </section>


      <section className=''>
        <div>
          <h3 className="font-bold bg-[#C27A00] sm:mr-34 lg:mr-32 text-[25px] text-white mb-2" >Gaming</h3>
        </div>
        <div className="grid lg:grid-cols-2 lg:grid-rows-2 ">
          <img className="object-cover sm:max-w-sm  mx-auto lg:ml-[45px]  sm:ml-[20px] lg:w-[400px]" src={image}>
          </img>

          {relevantGamingPostCategoryData.map(post => (
            <LayoutCategory
              key={post.id}
              created_at={post.created_at}
              title={post.title}
              image_url={post.image_url}
              content={post.content}
              author={post.author}
              category={post.category}
            />
          ))}
        </div>


        <div>
          <h3 className="font-bold bg-[#2A2B2A] sm:mr-34 lg:mr-32 text-[25px] text-white mb-2" >Culture</h3>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 ">
          <img className="object-cover sm:max-w-sm  mx-auto lg:ml-[45px]  sm:ml-[20px] lg:w-[400px]" src={image}>
          </img>

          {relevantCulturePostCategoryData.map(post => (
            <LayoutCategory
              key={post.id}
              created_at={post.created_at}
              title={post.title}
              image_url={post.image_url}
              content={post.content}
              author={post.author}
              category={post.category}
            />
          ))}
        </div>

        <div>
          <h3 className="font-bold bg-[#7BB2D9] sm:mr-34 lg:mr-32 text-[25px] text-white mb-2" >Company</h3>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 ">

          <img className="object-cover sm:max-w-sm  mx-auto lg:ml-[45px]  sm:ml-[20px] lg:w-[400px]" src={image}>
          </img>

          {relevantCompanyPostCategoryData.map(post => (
            <LayoutCategory
              key={post.id}
              created_at={post.created_at}
              title={post.title}
              image_url={post.image_url}
              content={post.content}
              author={post.author}
              category={post.category}
            />
          ))}
        </div>

        <div>
          <h3 className="font-bold bg-[#E5446D] sm:mr-34 lg:mr-32 text-[25px] text-white mb-2" >Development</h3>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 ">
          <img className="object-cover sm:max-w-sm  mx-auto lg:ml-[45px]  sm:ml-[20px] lg:w-[400px]" src={image}>
          </img>

          {relevantDevelopmentPostCategoryData.map(post => (
            <LayoutCategory
              key={post.id}
              created_at={post.created_at}
              title={post.title}
              image_url={post.image_url}
              content={post.content}
              author={post.author}
              category={post.category}
            />
          ))}
        </div>


        <div>
          <h3 className="font-bold bg-[#E5446D] sm:mr-34 lg:mr-32 text-[25px] text-white mb-2" >Science</h3>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 ">
          <img className="object-cover sm:max-w-sm  mx-auto lg:ml-[45px]  sm:ml-[20px] lg:w-[400px]" src={image}>
          </img>

          {relevantSciencePostCategoryData.map(post => (
            <LayoutCategory
              key={post.id}
              created_at={post.created_at}
              title={post.title}
              image_url={post.image_url}
              content={post.content}
              author={post.author}
              category={post.category}
            />
          ))}
        </div>
      </section>
    </section>
  );

};



export default Home;
