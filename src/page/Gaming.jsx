import React, { useState, useEffect } from 'react';
import MainArticle from "../components/MainArticle/MainArticle";
import CardNotice from "../components/NoticeCategory/CardNotice";
import Card from "../components/Cardnotice/Card";
import {getPrincipalPostCategory} from "../services/postService";
import {getPostsByCategory} from "../services/postService";
import Adv from '../components/Advertisement/Adv';
import Adv2 from '../components/Advertisement/Adv2';
import Adv3 from '../components/Advertisement/Adv3';
import '../index.css';
const Gaming = () => {
  const [principalPostCategory, setPrincipalPostCategory] = useState([]);
const [postsCategoryData, setPostsCategoryData] = useState([]);
const [lastPostData, setLastPostData] = useState([]);
const [gamingPostsData, setGamingPostsData] = useState([]);
const fetchPostsByCategory = async (category) => {

  const postCategory = await getPostsByCategory(category);
  setPostsCategoryData(postCategory);

  const gamingPosts = await getPostsByCategory('gaming');
  setGamingPostsData(gamingPosts);

}
const fetchPrincipalPostCategory = async () => {
  const principalPostCategory = await getPrincipalPostCategory('gaming');
  setPrincipalPostCategory(principalPostCategory);
}

useEffect(() => {
  fetchPrincipalPostCategory()
 

  const categories = ['gaming', 'company', 'science', 'development', 'culture', 'last'];
  categories.forEach(category => {
    fetchPostsByCategory(category);
  });

}, []);



  return(
    <div className="px-2 py-2">
    <h3 className="font-bold bg-[#C27A00] sm:mr-4 lg:mr-8 sm:text-2xl lg:text-xl text-white mb-2 mt-[-20px] py-1 px-4 rounded-xs w-[-100px] " >Gaming</h3>
  
    <div className="lg:flex lg:gap-4 relative"> {/* Agregar clase relative al contenedor principal */}
    <div className="lg:flex-1 mr-0 lg:mr- mb-8"> {/* Ajustar el tamaño del contenedor principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4"> {/* Ajustar la cuadrícula */}
        <MainArticle
     
              key={principalPostCategory.id}
              //created_at={principalPostCategory.created_at}
              title={principalPostCategory.title}
              image_url={principalPostCategory.image_url}
              content={principalPostCategory.content}
              author={principalPostCategory.author}
              category={principalPostCategory.category}
              />
              </div>
            </div>
            
            <div className="hidden lg:block absolute top-0 right-0 w-24"> {/* Ajustar el tamaño y la posición del anuncio */}
      <Adv />
      <Adv />
      <Adv />
      <Adv />
    
  </div>
</div>
<section>
    <h3 className="font-bold text-[#E5446D] text-[20px]" ></h3>
    
            {gamingPostsData && gamingPostsData.map((posts) => (
              <CardNotice
                key={posts.id}
                created_at={posts.created_at}
                title={posts.title}
                image_url={posts.image_url}
                author={posts.author}
                category={posts.category}
                description={posts.description}
              />
            ))}
            </section>
</div>





  )
};
export default Gaming;