import React, { useState, useEffect } from 'react';
import UserCard from './UserCard'; // Asegúrate de ajustar la ruta de importación según la estructura de tu proyecto

const AdminPage = () => {
 const [users, setUsers] = useState([]);

 useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data: ', error));
 }, []);

 return (
    <div>
      <h1>Página del Usuario</h1>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
 );
};

export default AdminPage;
