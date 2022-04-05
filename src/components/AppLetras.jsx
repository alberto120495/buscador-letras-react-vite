import React from "react";
import useLetras from "../hooks/useLetras";
import Alerta from "./Alerta";
import Formulario from "./Formulario";
import Letra from "./Letra";

function AppLetras() {
  const { cargando, alerta, letra } = useLetras();

  return (
    <>
      <header>Busqueda de letras de canciones</header>

      <Formulario />
      <main>
        {alerta ? (
          <Alerta>{alerta}</Alerta>
        ) : letra ? (
          <Letra />
        ) : cargando ? (
          "Cargando..."
        ) : (
          <p className="text-center">Busca letras de tus artistas favoritos</p>
        )}
      </main>
    </>
  );
}

export default AppLetras;
