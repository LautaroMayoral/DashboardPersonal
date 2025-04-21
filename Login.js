import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebaseConfig";

const Login = () => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Usuario autenticado:", user);
      alert(`¡Bienvenido, ${user.displayName}!`);
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
      alert("Hubo un error al iniciar sesión.");
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <button onClick={handleGoogleLogin}>Iniciar sesión con Google</button>
    </div>
  );
};

export default Login;
