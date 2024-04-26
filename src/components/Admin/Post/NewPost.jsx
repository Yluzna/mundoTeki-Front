import React, { useState } from 'react';

const NewPost = () => {
 const [newsData, setNewsData] = useState({
    id: '',
    title: '',
    description: '',
    createdAt: '',
    author: '',
    image: '',
    userId: '',
    category: '',
    isActive: 'no',
 });

 const handleChange = (e) => {
    setNewsData({
      ...newsData,
      [e.target.name]: e.target.value,
    });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newsData);
 };

 return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <h1 className='text-center text-xl p-2 m-5 bg-gray-200  rounded font-semibold'>Post Notice</h1>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={newsData.title}
            onChange={handleChange}
            className="mt-1 block w-full p-1 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={newsData.description}
            onChange={handleChange}
            className="mt-1 block w-full p-1 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="createdAt" className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            name="createdAt"
            id="createdAt"
            value={newsData.createdAt}
            onChange={handleChange}
            className="mt-1 block w-full p-1 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="author" className="block text-sm font-medium text-gray-700">
            Author
          </label>
          <input
            type="text"
            name="author"
            id="author"
            value={newsData.author}
            onChange={handleChange}
            className="mt-1 block w-full p-1 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image
          </label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleChange}
            className="mt-1 block w-full p-1 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
            ID_User
          </label>
          <input
            type="text"
            name="userId"
            id="userId"
            value={newsData.userId}
            onChange={handleChange}
            className="mt-1 block w-full p-1 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            name="category"
            id="category"
            value={newsData.category}
            onChange={handleChange}
            className="mt-1 block w-full p-1 border border-gray-300 rounded-md"
          >
            <option value="">Selecciona una categoría</option>
            <option value="ultimas-noticias">Últimas noticias</option>
            <option value="gaming">Gaming</option>
            <option value="cultura">Cultura</option>
            <option value="seguridad-digital">Seguridad digital</option>
            <option value="ciencia-tecnologia">Ciencia y tecnología</option>
            <option value="destacados">Destacados</option>
            <option value="desarrollo-programacion">Desarrollo y programación</option>
            <option value="empresas-startups">Empresas y Startups</option>
          </select>
        </div>
        <div>
          <label htmlFor="isActive" className="block text-sm font-medium text-gray-700">
            ¿Is active?
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="radio"
              name="isActive"
              id="isActiveYes"
              value="yes"
              checked={newsData.isActive === 'yes'}
              onChange={handleChange}
              className="form-radio text-orange-300"
            />
            <label htmlFor="isActiveYes" className="text-sm">Yes</label>
            <input
              type="radio"
              name="isActive"
              id="isActiveNo"
              value="no"
              checked={newsData.isActive === 'no'}
              onChange={handleChange}
              className="form-radio text-orange-300"
            />
            <label htmlFor="isActiveNo" className="text-sm">No</label>
          </div>
        </div>
        <button type="submit" className="bg-orange-300/50 hover:bg-orange-300 font-bold py-2 px-4 rounded">
          Post
        </button>
      </form>
    </div>
 );
};

export default NewPost;
