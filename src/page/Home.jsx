import React, { useState, useEffect } from 'react';
import MainArticle from '../components/MainArticle/MainArticle';
import Card from '../components/Cardnotice/Card';
import { getRelevantPost } from '../services/postService';

import Adv from '../components/Advertisement/Adv';
import Adv2 from '../components/Advertisement/Adv2';
import Adv3 from '../components/Advertisement/Adv3';
import { getPostsByCategory } from '../services/postService';
import '../index.css';
import LayoutCategory from '../components/LayoutCategory/LayoutCategory';
import { getRelevantPostCategory } from '../services/postService';

const Home = () => {


  //console.log("hello from home")
  const [relevantPostData, setRelevantPostData] = useState([]);
  const [postsData, setPostsData] = useState([]);
  const [postsCategoryData, setPostsCategoryData] = useState([]);
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

  console.log(relevantPostData.image_url)





  const fetchRelevantPostCategory = async () => {
    const relevantGamingPostCategoryData = await getRelevantPostCategory(10);
    setRelevantGamingPostCategoryData(relevantGamingPostCategoryData);

  
    const relevantCulturePostCategoryData = await getRelevantPostCategory(9);
    setRelevantCulturePostCategoryData(relevantCulturePostCategoryData);
  
    const relevantCompanyPostCategoryData = await getRelevantPostCategory(3);
    setRelevantCompanyPostCategoryData(relevantCompanyPostCategoryData);
  
    const relevantDevelopmentPostCategoryData = await getRelevantPostCategory(8);
    setRelevantDevelopmentPostCategoryData(relevantDevelopmentPostCategoryData);
  
    const relevantSciencePostCategoryData = await getRelevantPostCategory(4);
    setRelevantSciencePostCategoryData(relevantSciencePostCategoryData);
  }

  console.log(relevantGamingPostCategoryData)
  
  //por categoria
  const fetchPostsByCategory = async (category) => {

    const postCategory = await getPostsByCategory(category);
    setPostsCategoryData(postCategory);

    const lastPosts = await getPostsByCategory(1);
    setLastPostData(lastPosts);

  }


  useEffect(() => {
    fetchRelevantPost();
    
    const categories = [10, 3, 4, 8, 9, 1]; // Lista de categorías
    fetchRelevantPostCategory();

    categories.forEach(category => {
       fetchPostsByCategory(category);
    });
  }, []);


  let imagesByCategory = {};

// Mapear los datos de cada categoría y asignar las imágenes al objeto
relevantGamingPostCategoryData.forEach(post => {
  imagesByCategory[10] = post.image_url;
});
console.log((relevantCulturePostCategoryData))
 relevantCulturePostCategoryData.forEach(post => {
 imagesByCategory[9] = post.image_url;
});

relevantCompanyPostCategoryData.forEach(post => {
  imagesByCategory[3] = post.image_url;
});

relevantDevelopmentPostCategoryData.forEach(post => {
  imagesByCategory[8] = post.image_url;
});

relevantSciencePostCategoryData.forEach(post => {
  imagesByCategory[4] = post.image_url;
});



  return (
    <section style={{ position: 'relative' }} className='px-2'>
      <div className='lg:flex lg:gap-4 '>
        <section style={{ flexBasis: '55%' }}>
          <div className="grid grid-cols-1 lg:grid-cols-1 mt-[-50px] lg:mt-[10px]">

            <MainArticle
              key={relevantPostData.id}
              created_at={relevantPostData.created_at}
              title={relevantPostData.title}
              image_url={relevantPostData.image_url}
              description={relevantPostData.description}
              author={relevantPostData.author}
              category={relevantPostData.category}

            />

          </div>


        </section>
        



        <section style={{ flexBasis: '30%' }}>
          <div className="relative grid grid-cols-1 gap-1 lg:gap-1 mt-2 lg:mt-0 md:mt-0 lg:grid-cols-1 md:grid-cols-2" style={{ marginTop: '-3px' }}>
            <h3 className="font-bold text-[#E5446D] ml-1  text-[20px]" >Últimas Noticias</h3>
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

        <section style={{ position: 'absolute', top: 0, right: 12, width: '11%' }} className=''>
          

          <Adv />
          <Adv />
          <Adv />
          <Adv />
          <Adv />
          <Adv />
          <Adv />
          <Adv />
          <Adv />
          
        </section>
      </div>

      <section >
        <div className="mb-6 flex gap-14 ml-1 md:mt-[28px] lg:mt-[-1px]">
          <Adv3/>
        </div>
      </section>
 

      <section>
        <div>
          <h3 className="font-bold bg-[#C27A00] sm:mr-34 lg:mr-32 sm:text-[25px] lg:text-[22px] text-white mb-2" >Gaming</h3>
        </div>
        <div className='md:grid grid-cols-2 lg:grid-cols-2 grid-rows-2 lg:mr-[129px] lg:col-1 py-2 lg:py-1'>
        
          <img className="object-cover px-2 max-w-sm  mx-auto lg:ml-[2px]  lg:w-[400px] ml-[-9px]" src={imagesByCategory[10]}>
          </img>

          {relevantGamingPostCategoryData.map(post => (
            <LayoutCategory
              key={post.id}
              created_at={post.created_at}
              title={post.title}
              image_url={post.image_url}
              description={post.description}
              author={post.author}
              category={post.category}
            />
          ))}       
        </div>
        
        <div>
          <h3 className="font-bold bg-[#2A2B2A] sm:mr-34 lg:mr-32 text-[25px] lg:text-[22px] text-white mb-2 lg:mt-[-39px]" >Culture</h3>
        </div>

        <div className='md:grid grid-cols-2 lg:grid-cols-2 grid-rows-2 lg:mr-[129px] lg:col-1 py-2 lg:py-1'>
        
          <img className="object-cover px-2 max-w-sm  mx-auto lg:ml-[2px]  lg:w-[400px] ml-[-9px]" src={imagesByCategory[9]}>
          </img>

          {relevantCulturePostCategoryData.map(post => (
            <LayoutCategory
              key={post.id}
              created_at={post.created_at}
              title={post.title}
              image_url={post.image_url}
              description={post.description}
              author={post.author}
              category={post.category}
            />
          ))}
        </div>

        <div>
          <h3 className="font-bold bg-[#7BB2D9] sm:mr-34 lg:mr-32 text-[25px] lg:text-[22px] text-white mb-2 lg:mt-[-39px]" >Company</h3>
        </div>
        <div className='md:grid grid-cols-2 lg:grid-cols-2 grid-rows-2 lg:mr-[129px] lg:col-1 py-2 lg:py-1'>
        
          <img className="object-cover px-2 max-w-sm  mx-auto lg:ml-[2px]  lg:w-[400px] ml-[-9px]" src={imagesByCategory[3]}>
          </img>

          {relevantCompanyPostCategoryData.map(post => (
            <LayoutCategory
              key={post.id}
              created_at={post.created_at}
              title={post.title}
              image_url={post.image_url}
              description={post.description}
              author={post.author}
              category={post.category}
            />
          ))}
        </div>

        <div>
          <h3 className="font-bold bg-[#16a34a] sm:mr-34 lg:mr-32 text-[25px] lg:text-[22px] text-white mb-2 lg:mt-[-39px]" >Development</h3>
        </div>
        <div className='md:grid grid-cols-2 lg:grid-cols-2 grid-rows-2 lg:mr-[129px] lg:col-1 py-2 lg:py-1'>
        
          <img className="object-cover px-2 max-w-sm  mx-auto lg:ml-[2px]  lg:w-[400px] ml-[-9px]" src={imagesByCategory[8]}>
          </img>

          {relevantDevelopmentPostCategoryData.map(post => (
            <LayoutCategory
              key={post.id}
              created_at={post.created_at}
              title={post.title}
              image_url={post.image_url}
              description={post.description}
              author={post.author}
              category={post.category}
            />
          ))}
        </div>


        <div>
          <h3 className="font-bold bg-[#e11d48] sm:mr-34 lg:mr-32 text-[25px] text-white mb-2 lg:mt-[-39px] lg:text-[22px]" >Science</h3>
        </div>

        <div className='md:grid grid-cols-2 lg:grid-cols-2 grid-rows-2 lg:mr-[129px] lg:col-1 py-2 lg:py-1'>
        
          <img className="object-cover px-2 max-w-sm  mx-auto lg:ml-[2px]  lg:w-[400px] ml-[-9px]" src={imagesByCategory[4]}>
          </img>

          {relevantSciencePostCategoryData.map(post => (
            <LayoutCategory
              key={post.id}
              created_at={post.created_at}
              title={post.title}
              image_url={post.image_url}
              description={post.description}
              author={post.author}
              category={post.category}
            />
          ))}
        </div>
        <div>
          <Adv3 />
        </div>
      </section>
     
      
        
      
      
    </section>
  );
  

};



export default Home;
