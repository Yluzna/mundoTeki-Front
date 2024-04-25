const registerUser = async (user) => {
  try {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      return true; // Registro exitoso
    } else {
      return false; // Error en el registro
    }
  } catch (error) {
    console.error("Error registering user:", error);
    return false; // Error en la solicitud
  }
};

export default registerUser;
