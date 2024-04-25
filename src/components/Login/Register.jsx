import React, { useState } from "react";
import registerUser from "../../services/AuthRegister";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };



  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Verificar que todos los campos estén llenos
    if (username === "" || password === "" || email === "") {
      setError(true);
      return;
    }

    // Construir el objeto de usuario
    const newUser = {
      username,
      password,
     
      email,
    };
    const success = await registerUser(newUser);

    console.log(newUser);
    if (success) {
      // Manejar redirección u otras acciones de éxito aquí
      console.log('Usuario registrado exitosamente.');
      navigate('/login');
    } else {
      // Manejar error de registro aquí
      console.error('Error al registrar el usuario.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div >
      <div className="flex justify-center items-center">
          <img
            src={"./src/images/teki.PNG"}
            alt="Mundo Teki"
            className="w-1/2 md:w-1/2 h-auto m-4 rounded-lg"
          />
        </div>

        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#c27a00]">
            Registro de Nuevos Usuarios
          </h2>
        </div>
        <label htmlFor="username" className="flex justify-center items-center">Nombre de usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-orange-400 focus:z-10 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="password" className="flex justify-center items-center">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-orange-400 focus:z-10 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="email"className="flex justify-center items-center">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-orange-400 focus:z-10 sm:text-sm"
        />
      </div>
      {error && <p>Por favor, llene todos los campos.</p>}
      <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-400 hover:bg-neutral-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Registrarse</button>
    </form>
  );
};

export default Register;
