import React from "react";
import Navbar from "./Navbar";

function Entrada() {
  return (
    <div id="entrada">
      <Navbar />
      <div
        className="flex flex-col items-center justify-center"
        style={{ height: "90vh" }}
      >
        <div className="flex justify-center mb-2">
          <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-6xl  font-bold text-white text-center">
            CLÍNICA VETERINARIA LUCKY
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="text-white">Tus mascotas son nuestra prioridad</p>
        </div>
      </div>
    </div>
  );
}

export default Entrada;
