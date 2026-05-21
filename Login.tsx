"use client";

import { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useRouter } from "next/navigation";

export default function Login() {

  const { setUsuario } = useContext(AppContext);

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const router = useRouter();

  const iniciarSesion = () => {

    if (user === "admin" && pass === "admin123") {

      setUsuario(user);

      router.push("/dashboard");

    } else {
      alert("Usuario o contraseña incorrecta");
    }
  };

  return (
    <div className="container">

      <h1>Inicio de Sesión</h1>

      <input
        type="text"
        placeholder="Usuario"
        onChange={(e) => setUser(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        onChange={(e) => setPass(e.target.value)}
      />

      <button onClick={iniciarSesion}>
        Ingresar
      </button>

    </div>
  );
}