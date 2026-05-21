"use client";

import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Presupuesto() {

  const {
    presupuesto,
    setPresupuesto,
    totalGastado
  } = useContext(AppContext);

  const porcentaje = (totalGastado / presupuesto) * 100;

  return (
    <div>

      <h2>Presupuesto Mensual</h2>

      <input
        type="number"
        placeholder="Ingrese presupuesto"
        onChange={(e) => setPresupuesto(Number(e.target.value))}
      />

      <p>Presupuesto: L. {presupuesto}</p>

      <p>Total Gastado: L. {totalGastado}</p>

      {
        porcentaje >= 80 && porcentaje < 100 && (
          <div className="alert-yellow">
            Has alcanzado el 80% del presupuesto
          </div>
        )
      }

      {
        porcentaje >= 100 && (
          <div className="alert-red">
            Has superado el límite del presupuesto,
            debes ajustar gastos
          </div>
        )
      }

    </div>
  );
}