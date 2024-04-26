import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ onSearch }) => {
 const [searchTerm, setSearchTerm] = useState('');

 const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
 };

 return (
    <div className="flex items-center border-2 border-gray-300 rounded-md p-2 m-10 w-full max-w-xs">
      <CiSearch className='m-1'/>
      <input
        type="text"
        placeholder="Buscar Contenido..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="flex-grow outline-none text-sm"
      />
      <button
        type="button"
        className="ml-1 bg-gray-200 hover:bg-orange-200 py-1 px-2 rounded border-2 border-gray-300"
      >
        Buscar
      </button>
    </div>
 );
};

export default SearchBar;
