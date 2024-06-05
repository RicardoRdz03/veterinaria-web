import React from "react";

function Seccion1() {
  return (
    <div
      id="cerca-de-ti"
      className="grid grid-cols-4 gap-3 mt-16 mx-2 sm:mx-2 md:mx-8 lg:mx-32 xl:mx-32"
    >
      <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex justify-center ">
        <div className=" bg-sky-500 rounded-md py-14 w-11/12">
          <div className="flex justify-center">
            <img style={{ width: "32%" }} src="/2.png" alt="ubicacion" />
          </div>
          <div className="pt-3 pb-7 text-3xl flex text-white font-bold justify-center">
            Cerca de ti
          </div>
          <div className="flex justify-center text-white text-center px-3">
            Más de 60 centros veterinarios en México
          </div>
        </div>
      </div>

      <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex justify-center ">
        <div className=" bg-sky-500 rounded-md py-14 w-11/12">
          <div className="flex justify-center">
            <img style={{ width: "32%" }} src="/4.png" alt="ubicacion" />
          </div>
          <div className="pt-3 pb-7 text-3xl flex text-white font-bold justify-center text-center">
            Profesionales especializados
          </div>
          <div className="flex justify-center text-white text-center px-3">
            Más de 250 expertos veterinarios que dedican el máximo cuidado y
            cariño a tu mascota.
          </div>
        </div>
      </div>

      <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex justify-center ">
        <div className=" bg-sky-500 rounded-md py-14 w-11/12">
          <div className="flex justify-center">
            <img style={{ width: "32%" }} src="/1.png" alt="ubicacion" />
          </div>
          <div className="pt-3 pb-7 text-3xl flex text-white font-bold justify-center">
            Servicio integral
          </div>
          <div className="flex justify-center text-white text-center px-3">
            Servicio especializado para adaptarnos a las necesidades de cada
            mascota.
          </div>
        </div>
      </div>

      <div className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex justify-center ">
        <div className=" bg-sky-500 rounded-md py-14 w-11/12">
          <div className="flex justify-center">
            <img style={{ width: "32%" }} src="/3.png" alt="ubicacion" />
          </div>
          <div className="pt-3 pb-7 text-3xl flex text-white font-bold justify-center">
            Campañas
          </div>
          <div className="flex justify-center text-white text-center px-3">
            Lanzamos campañas periódicas para que tu mascota esté en plena forma
            ¡Estate atento!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seccion1;
