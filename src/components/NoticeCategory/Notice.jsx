const Notice = ({image_url,title,content,created_at,author}) => {

return(
<section>
  <div class="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8 ">
    <div class="relative mx-auto max-w-7xl ">
      <div class="grid max-w-lg gap-5 mx-auto lg:grid-cols-1 lg:max-w-none ">
        <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div class="flex-shrink-0">
            <img class="object-cover w-full h-48" src={image_url} alt="img"/>
          </div>
          <div class="flex flex-col justify-between flex-1 p-6 bg-white">
            <div class="flex-1">
              <a href="#" class="block mt-2">
                <p class="text-xl font-semibold text-neutral-600">{title}</p>
                <p class="mt-3 text-base text-gray-500">{content}</p>
              </a>
            </div>
            <div class="flex items-center mt-6">
              <div class="flex-shrink-0">
                
                  <span class="sr-only">{created_at}</span>
                  <span class="sr-only">{author}</span>
                
              </div>
             </div>
          </div>
        </div>
        
          </div>
          </div>
  </div>
</section>
);
}
export default Notice;