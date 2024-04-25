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
    isActive: 'no', // Inicialmente se establece como 'no'
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
    <div className="p-4"> {/* Añade padding alrededor del formulario */}
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Título de la noticia
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
            Descripción de la noticia
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
            Fecha de creación
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
            Autor de la noticia
          </label>
          <input
            type="text"
            name="author"
            id="author"
            value={newsData.author}
            onChange={handleChange}
            className="mt-1 block w-full p-1 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Imagen de la noticia
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
            ID del usuario que la publica
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
            Categoría
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
            ¿Está activa?
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="radio"
              name="isActive"
              id="isActiveYes"
              value="yes"
              checked={newsData.isActive === 'yes'}
              onChange={handleChange}
              className="form-radio text-blue-500"
            />
            <label htmlFor="isActiveYes" className="text-sm">Sí</label>
            <input
              type="radio"
              name="isActive"
              id="isActiveNo"
              value="no"
              checked={newsData.isActive === 'no'}
              onChange={handleChange}
              className="form-radio text-blue-500"
            />
            <label htmlFor="isActiveNo" className="text-sm">No</label>
          </div>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Publicar noticia
        </button>
      </form>
    </div>
 );
};

export default NewPost;
