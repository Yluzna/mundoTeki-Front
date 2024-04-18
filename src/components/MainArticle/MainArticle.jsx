const MainArticle = ({ created_at, title, image_url, description, author,content }) => {
  
    return (
      <section className="mt-[-110px] lg:mt-1" >
      <picture>
        <source media="(max-width:640px) (min-width: 641)" />
          <img src={image_url} alt="articulo principal" className="mb-1"/>
          </picture>
        <div>
          <div className="flex">
          <span className="text-sm text-gray-500">{created_at}</span>
          <span className="text-s text-gray-500">{author}</span>
          </div>
          < div className="py-2"> 
          <h6 className="mt-1 text-[25px] font-bold leading-6 text-gray-800 hover:text-gray-500 sm:text-[30px] ">{title}</h6>
          <p className="mt-2 text-[14px] sm:text-[14px] leading-snug text-black py-2 ">{description} lorem ipsum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident doloribus repellat fugit sequi eaque rerum repellendus non explicabo facilis numquam suscipit autem nobis optio error deserunt ea pariatur, ipsum dolores!</p>
          <p className="mt-2 text-[14px] sm:text-[14px] leading-snug text-black py-2 ">{content}</p>
          
        </div>
        </div>
      
      </section>
    );
    }  
    
  

  

export default MainArticle