const AuthLogin = {
  login: async function(email, password) {
    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error("Failed to authenticate user");
      }

      const data = await response.json();

      // Verificar si hay un mensaje de redirección en la respuesta del servidor
      if (data.redirect) {
        // Redirigir a la URL especificada en la respuesta del servidor
        window.location.href = data.redirect;
      } else {
        // Manejar la respuesta de manera apropiada si no hay una URL de redirección
        console.log(data.message);
      }

      return data; // Devuelve los datos de usuario (si los hay)
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }
};

export default AuthLogin;
