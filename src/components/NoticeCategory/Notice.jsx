const Notice = ({ image_url, title, content, created_at, author, category }) => {

  return (

    <article className="flex w-[370px] lg:w-[400px] mt-4 ml-2 bg-[#F8F4E3]">

      <div className="flex">
        <img alt="notice" src={image_url} className="w-80 h-32 rounded-md object-cover"/>
      </div>
      <div class="pl-4">
      <div class="flex justify-between text-gray-500 mb-3  text-[11px] ">
          <span> {author}</span>
          <span className="mr-3">{created_at}</span>
        </div>
      
        <h2 class=" mb-[14px] text-gray-900 font-bold hover:text-[#C27A00] cursor-pointer ">{title}</h2>
        <div className="flex justify-end text-[11px]">
        <span span className="mr-3" style={{ marginTop: '-10px' }}>{category}</span>
        </div>
        


      </div>



    </article>
  );
}
export default Notice;