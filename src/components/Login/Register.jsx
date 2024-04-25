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
      <div>
        <label htmlFor="username">Nombre de usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      {error && <p>Por favor, llene todos los campos.</p>}
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default Register;
