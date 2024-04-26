import React, { useState, useEffect } from 'react';

const UsersTable = () => {
 const [users, setUsers] = useState([]);

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://random-data-api.com/api/users/random_user');
        const data = await response.json();
        setUsers([data]);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
 }, []);

 const handleEdit = (user) => {
   console.log('Editar usuario:', user);
 };

 const handleDelete = (user) => {
   console.log('Borrar usuario:', user);
 };

 const handleBlock = (user) => {
   console.log('Bloquear usuario:', user);
 };

 return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-600 sm:table-auto sm:block mx-auto  border border-gray-300 rounded-lg">
        <thead className="bg-gray-200 gap-3 items-center">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
              ID
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
              Username
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
              Email
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
              Created_At
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
              Is_Active
            </th>
            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id} className="border-b border-gray-300">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{user.id}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{user.username}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{user.email}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{user.date_of_birth}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{user.subscription.status}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium w-full">
                <button onClick={() => handleEdit(user)} className="p-2 m-2 hover:bg-orange-200 bg-gray-200 border border-gray-300">Editar</button>
                <button onClick={() => handleDelete(user)} className="p-2 m-2 hover:bg-orange-200 bg-gray-200 border border-gray-300">Eliminar</button>
                <button onClick={() => handleBlock(user)} className="p-2 m-2 hover:bg-orange-200 bg-gray-200 border border-gray-300">Bloquear</button>
              </td>
            </tr>
          ))}
          </tbody>
      </table>
    </div>
 );
};

export default UsersTable;
