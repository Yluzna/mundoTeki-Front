const Notice = ({ image_url, title, content, created_at, author }) => {
  return (
     <section>
       <div className="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
         <div className="relative mx-auto max-w-7xl">
           <div className="grid max-w-lg gap-3 mx-auto md:h-screen lg:grid-cols-1 lg:max-w-none lg:grid-cols-2">
             <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
               <div className="flex-shrink-0">
                 <img className="object-cover w-full h-48" src={image_url} alt="Imagen" />
               </div>
               <div className="flex flex-col justify-between flex-1 p-6 bg-white mr-6">
                 <div className="flex-1">
                  <a href="#" className="block mt-2">
                     <p className="text-2xl font-semibold text-gray-800">{title}</p>
                     <p className="mt-3 text-sm text-gray-500">{content}</p>
                  </a>
                 </div>
                 <div className="flex items-center mt-6">
                  <div className="flex-shrink-0">
                     <span className="text-sm font-medium text-gray-500">{created_at}</span>
                     <span className="text-sm font-medium text-gray-500">{author}</span>
                  </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
  );
 };
 
 export default Notice;
 