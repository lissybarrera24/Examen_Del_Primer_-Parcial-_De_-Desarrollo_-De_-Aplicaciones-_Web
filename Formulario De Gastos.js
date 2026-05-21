"use client";

import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function FormGasto() {

  const { agregarGasto } = useContext(AppContext);

  const [categoria, setCategoria] = useState("");
  const [monto, setMonto] = useState("");
  const [fecha, setFecha] = useState("");

  const guardar = () => {

    const nuevo = {
      categoria,
      monto,
      fecha
    };

    agregarGasto(nuevo);

    setCategoria("");
    setMonto("");
    setFecha("");
  };

  return (
    <div>

      <h2>Registro de Gastos</h2>

      <input
        type="text"
        placeholder="Categoria"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      />

      <input
        type="number"
        placeholder="Monto"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
      />

      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />

      <button onClick={guardar}>
        Guardar
      </button>

    </div>
  );
}