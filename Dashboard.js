"use client";

import Presupuesto from "../../components/Presupuesto";
import FormGasto from "../../components/FormGasto";
import ListaGastos from "../../components/ListaGastos";

export default function Dashboard() {

  return (
    <div className="container">

      <h1>Administrador de Gastos</h1>

      <div className="card">
        <Presupuesto />
      </div>

      <div className="card">
        <FormGasto />
      </div>

      <div className="card">
        <ListaGastos />
      </div>

    </div>
  );
}