import React from "react";
import "../estilos.css";

function Seccion2() {
  return (
    <div className="grid grid-cols-3 mt-16 mb-16">
      <div
        id="fondo1"
        className="flex justify-center items-center px-7 col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-1 xl:col-span-1"
        style={{ height: "50vh" }}
      >
        <div className="">
          <div className="flex justify-center">
            <h1 className="text-4xl font-bold text-white text-center">
              Consejos veterinarios
            </h1>
          </div>
          <div className="flex justify-center my-9">
            <p className="text-white text-center">
              Conoce las últimas noticias, consejos y cuidados para tu mejor
              amigo.
            </p>
          </div>
          <div className="flex justify-center">
            <button
              id="botones"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              VER TODOS LOS CONSEJOS
            </button>
          </div>
        </div>
      </div>
      <div
        id="fondo2"
        className="flex justify-center items-center px-7 col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-1 xl:col-span-1"
        style={{ height: "50vh" }}
      >
        <div className="">
          <div className="flex justify-center">
            <h1 className="text-4xl font-bold text-white text-center">
              Cuidamos de tu mascota
            </h1>
          </div>
          <div className="flex justify-center my-9">
            <p className="text-white text-center">
              El cuidado de una mascota también está por dentro y por fuera
            </p>
          </div>
          <div className="flex justify-center">
            <button
              id="botones"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              VER MÁS
            </button>
          </div>
        </div>
      </div>
      <div
        id="fondo3"
        className="flex justify-center items-center px-7 col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-1 xl:col-span-1"
        style={{ height: "50vh" }}
      >
        <div className="">
          <div className="flex justify-center">
            <h1 className="text-4xl font-bold text-white text-center">
              Adopta
            </h1>
          </div>
          <div className="flex justify-center my-9">
            <p className="text-white text-center">
              Desde veterinaria "Lucky" colaboramos con protectoras y
              asociaciones prestando ayuda a los animales en busca de una nueva
              familia.
            </p>
          </div>
          <div className="flex justify-center">
            <button
              id="botones"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              ¿ESTAS PENSANDO EN ADOPTAR?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seccion2;
