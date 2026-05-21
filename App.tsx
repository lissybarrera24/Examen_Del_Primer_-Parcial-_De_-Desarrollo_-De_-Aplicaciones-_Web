"use client";

import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [usuario, setUsuario] = useState(null);

  const [presupuesto, setPresupuesto] = useState(0);

  const [gastos, setGastos] = useState([]);

  const totalGastado = gastos.reduce(
    (acc, item) => acc + Number(item.monto),
    0
  );

  const obtenerGastos = async () => {

    try {

      const response = await fetch("http://localhost:5000/gasto");

      const data = await response.json();

      setGastos(data);

    } catch (error) {
      console.log(error);
    }
  };

  const agregarGasto = async (gasto) => {

    try {

      await fetch("http://localhost:5000/gasto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(gasto),
      });

      obtenerGastos();

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerGastos();
  }, []);

  return (
    <AppContext.Provider
      value={{
        usuario,
        setUsuario,
        presupuesto,
        setPresupuesto,
        gastos,
        agregarGasto,
        totalGastado,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};