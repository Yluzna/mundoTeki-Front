import React, { useState, useEffect } from 'react';
import MainArticle from "../components/MainArticle/MainArticle";
import Card from "../components/Cardnotice/Card";
import {getPrincipalPostCategory} from "../services/postService";
import {getPostsByCategory} from "../services/postService";
import {getRelevantPostCategory} from "../services/postService";
import Adv4 from '../components/Advertisement/Adv4';
import '../index.css';
import AdvertCategory from '../components/Advertisement/AdvertCategory';

const Last = () => {
  const [principalPostCategory, setPrincipalPostCategory] = useState([]);
const [lastPostData, setLastPostData] = useState([]);
const [lastPostsData, setLastPostsData] = useState([]);
const [relevantPostCategory, setRelevantPostCategory] = useState([]);
const [relevantLastPostCategoryData, setRelevantLastPostCategoryData] = useState([]);
const fetchPostsByCategory = async (category) => {


  const lastPosts = await getPostsByCategory(1);
  setLastPostsData(lastPosts);

}
const fetchPrincipalPostCategory = async () => {
  const principalPostCategory = await getPrincipalPostCategory(1);
  setPrincipalPostCategory(principalPostCategory);
}

const fetchRelevantPostCategory = async () => {
  const relevantLastPostCategoryData = await getRelevantPostCategory(1);
   setRelevantLastPostCategoryData(relevantLastPostCategoryData);}

useEffect(() => {
  fetchPrincipalPostCategory()
 

  const categories = [10, 3, 4, 8, 9, 1];
  fetchRelevantPostCategory();
  categories.forEach(category => {
    fetchPostsByCategory(category);
  });

}, []);



return(
  <div className="px-2 py-2">
  <h3 className="font-bold bg-[#E5446D] sm:mr-4 lg:mr-8 text-2xl lg:text-2xl text-white mb-2 mt-[-70px] md:mt-[-70px] lg:mt-[-19px]  py-1 px-4 rounded-xs w-full" >últimas noticias</h3>

  <div className="lg:flex lg:gap-4 md:flex md:gap-2 relative">
<div className="lg:flex-1 lg:mr-4 mb-[-8px] md:mt-[100px] lg:mt-[1px]"> {/* El primer componente ocupa más espacio */}
  <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
    <MainArticle
      key={principalPostCategory.id}
      title={principalPostCategory.title}
      image_url={principalPostCategory.image_url}
      author={principalPostCategory.author}
      category={principalPostCategory.category}
    />
  </div>
</div>
<div className="lg:flex-1/3 mt-[-8px]"> {/* El segundo componente ocupa menos espacio */}
  <AdvertCategory />
</div>
</div>




<div>
  <h3 className="font-bold sm:mr-4 lg:mr-8 text-2xl lg:text-2xl text-[#C27A00] mt-[-30px] lg:mt-[-35px] md:mt-[-40px] py-3 rounded-xs w-[-100px] ">Ultimas Noticias</h3>
  <div className="bg-[#C27A00] h-[5px] w-full mt-[-10px] mb-6"></div>


  <div className="lg:flex lg:gap-4 mt-[16px] lg:mt-[6px] md:mt-[120px] sm:mb-[-30px] relative"> {/* Agregar clase relative al contenedor principal */}
  <div className="lg:flex-1 mr-0 md:mb-2 lg:mb-[8px] sm:"> {/* Ajustar el tamaño del contenedor principal */}
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 md:grid-cols-3 md:gap-4"> {/* Ajustar la cuadrícula */}
    { relevantLastPostCategoryData
     .map(post => (
      <MainArticle
   
            key={post.id}
            created_at={post.created_at}
            title={post.title}
            image_url={post.image_url}
            author={post.author}
            category={post.category}
            />
          ))
          }       
          </div>
          </div>
          </div>
          </div>

          <div className=''>
        <Adv4 />
      </div>
<section>

<h3 className="font-bold sm:mr-4 lg:mr-8 text-2xl lg:text-2xl text-[#C27A00] mt-[-20px] lg:mt-[16px] md:mt-[7px] py-3 rounded-xs w-[-100px]">Tendencias</h3>
  <div className="bg-[#C27A00] h-[7px] w-full mt-[-10px] mb-3"></div>
  <div className="lg:flex relative">
<div className="lg:flex-1 mb-6 lg:mt-[-4px]"> 
  <div className="grid lg:grid-cols-3  md:grid-cols-2 md:max-w-3xl sm:max-w-sm sm:mx-auto lg:max-w-7xl">   

          { lastPostsData 
              ? lastPostsData.map((posts) => (
            
                <Card
                  key={posts.id}
                  created_at={posts.created_at}
                  title={posts.title}
                  image_url={posts.image_url}
                  author={posts.author}
                  category={posts.category}
                  description={posts.description}
                />
              ))
              : <div> <p>No hay Noticias</p> </div>

          }
</div>
</div>
<div className="lg:flex-1/3 mb-4 mt-[-12px] md:hidden"> 
  <AdvertCategory />
</div>
</div>
          </section>    


           <div className='mt-9'>
        <Adv4 />
      </div>        
</div>






)
};
export default Last;