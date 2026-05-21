"use client";

import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function ListaGastos() {

  const { gastos } = useContext(AppContext);

  return (
    <div>

      <h2>Lista de Gastos</h2>

      {
        gastos.map((item) => (
          <div key={item.idgasto}>

            <p>Categoria: {item.categoria}</p>

            <p>Monto: L. {item.monto}</p>

            <p>Fecha: {item.fecha}</p>

            <hr />

          </div>
        ))
      }

    </div>
  );
}