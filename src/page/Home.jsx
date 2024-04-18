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



  const fetchRelevantPostCategory = async () => {
   //const relevantPostCategoryData = await getRelevantPostCategory(category);
   // setRevelantPostCategoryData(relevantPostCategoryData);

    const relevantGamingPostCategoryData = await getRelevantPostCategory('gaming');
    setRelevantGamingPostCategoryData(relevantGamingPostCategoryData);

    const relevantCulturePostCategoryData = await getRelevantPostCategory('culture');
    setRelevantCulturePostCategoryData(relevantCulturePostCategoryData);

    const relevantCompanyPostCategoryData = await getRelevantPostCategory('company');
    setRelevantCompanyPostCategoryData(relevantCompanyPostCategoryData);

    const relevantDevelopmentPostCategoryData = await getRelevantPostCategory('development');
    setRelevantDevelopmentPostCategoryData(relevantDevelopmentPostCategoryData);

    const relevantSciencePostCategoryData = await getRelevantPostCategory('science');
    setRelevantSciencePostCategoryData(relevantSciencePostCategoryData);
  }
  //por categoria
  const fetchPostsByCategory = async (category) => {

    const postCategory = await getPostsByCategory(category);
    setPostsCategoryData(postCategory);

    const lastPosts = await getPostsByCategory('last');
    setLastPostData(lastPosts);

  }


  useEffect(() => {
    fetchRelevantPost();
    
    const categories = ['gaming', 'company', 'science', 'development', 'culture', 'last']; // Lista de categorías
    fetchRelevantPostCategory();

    categories.forEach(category => {
       fetchPostsByCategory(category);
    });
  }, []);

  let imagesByCategory = {};

// Mapear los datos de cada categoría y asignar las imágenes al objeto
relevantGamingPostCategoryData.forEach(post => {
  imagesByCategory['gaming'] = post.image_url;
});

relevantCulturePostCategoryData.forEach(post => {
  imagesByCategory['culture'] = post.image_url;
});

relevantCompanyPostCategoryData.forEach(post => {
  imagesByCategory['company'] = post.image_url;
});

relevantDevelopmentPostCategoryData.forEach(post => {
  imagesByCategory['development'] = post.image_url;
});

relevantSciencePostCategoryData.forEach(post => {
  imagesByCategory['science'] = post.image_url;
});



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
              description={relevantPostData.description}
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
          <Adv />
          <Adv />
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
 

      <section>
        <div>
          <h3 className="font-bold bg-[#C27A00] sm:mr-34 lg:mr-32 sm:text-[25px] lg:text-[22px] text-white mb-2" >Gaming</h3>
        </div>
        <div className='sm:grid grid-cols-2 lg:grid-cols-2 grid-rows-2 mr-[129px] lg:col-1'>
        
          <img className="object-cover px-2 max-w-sm  mx-auto lg:ml-[2px] mr-[-9]  lg:w-[400px]" src={imagesByCategory['gaming']}>
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

        <div className="sm:grid grid-cols-2 lg:grid-cols-2 grid-rows-2 mr-[129px] lg:col-1">
          <img className="object-cover lg:max-w-m  mx-auto lg:ml-[2px] sm:ml-[20px] lg:w-[400px]" src={imagesByCategory['culture']}>
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
          <h3 className="font-bold bg-[#7BB2D9] sm:mr-34 lg:mr-32 text-[25px] lg:text-[22px] text-white mb-2 mt-[-39px]" >Company</h3>
        </div>
        <div className="sm:grid grid-cols-2 lg:grid-cols-2 grid-rows-2 mr-[129px] lg:col-1">

          <img className="object-cover sm:max-w-m  mx-auto lg:ml-[2px]  sm:ml-[20px] lg:w-[400px]" src={imagesByCategory['company']}>
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
          <h3 className="font-bold bg-[#16a34a] sm:mr-34 lg:mr-32 text-[25px] lg:text-[22px] text-white mb-2 mt-[-39px]" >Development</h3>
        </div>
        <div className="sm:grid grid-cols-2 lg:grid-cols-2 grid-rows-2 mr-[129px] lg:col-1">
          <img className="object-cover sm:max-w-m  mx-auto lg:ml-[2px]  sm:ml-[20px] lg:w-[400px]" src={imagesByCategory['development']}>
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
          <h3 className="font-bold bg-[#e11d48] sm:mr-34 lg:mr-32 text-[25px] text-white mb-2 mt-[-39px] lg:text-[22px]" >Science</h3>
        </div>

        <div className="sm:grid grid-cols-2 lg:grid-cols-2 grid-rows-2 mr-[129px] lg:col-1">
          <img className="object-cover sm:max-w-m  mx-auto lg:ml-[2px]  sm:ml-[20px] lg:w-[400px]" src={imagesByCategory['science']}>
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
