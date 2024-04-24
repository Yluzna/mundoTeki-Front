import { useState } from "react";


const Register = () => {
 const [formData, setFormData] = useState({
    username: '',
    mail: '',
    password: '',
 });

 const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aquí puedes agregar la lógica para manejar el envío del formulario,
    // como enviar los datos a un servidor o almacenarlos en el estado global.
 };

 return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
          Nombre de usuario
        </label>
        <input
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="mail" className="block text-sm font-medium text-gray-700">
          Correo electrónico
        </label>
        <input
          type="email"
          name="mail"
          id="mail"
          value={formData.mail}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">
          Registrarse
        </button>
      </div>
    </form>
 );
};

export default Register;