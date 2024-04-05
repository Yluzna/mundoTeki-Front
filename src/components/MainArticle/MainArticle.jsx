const MainArticle = ({ created_at, title, image_url, content, author }) => {
  
    return (
      <section>
      <picture>
        <source media="(max-width:640px) (min-width: 641)" />
          <img src={image_url} alt="articulo principal" className="sm:ml-3"/>
          </picture>
        <div className="px-3">
          <div className="flex">
          <span className="text-sm text-gray-500">{created_at}</span>
          <span className="text-sm text-gray-500">{author}</span>
          </div>
          < div className="py-2"> 
          <h6 className="mt-1 text-[25px] font-bold leading-6 text-gray-800 hover:text-gray-500 sm:text-[30px] ">{title}</h6>
          <p className="mt-2 text-[13px] sm:text-[14px] leading-snug text-black py-2 ">{content}</p>
          
        </div>
        </div>
      
      </section>
    );
    }  
    
  

  

export default MainArticle