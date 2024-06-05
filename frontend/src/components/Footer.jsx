import React from "react";
import "../../node_modules/@flaticon/flaticon-uicons/css/all/all.css";

function Footer() {
  return (
    <>
      <footer className="bg-blue-950">
        <div className="grid grid-cols-3">
          <div className="mt-9 col-span-3 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1">
            <div className="flex flex-col items-center justify-center">
              <h1 className="mb-9 text-lg font-bold text-white">
                CONTACTA CON NOSOTROS
              </h1>
              <div className="text-white mb-5">
                <p className="mb-2">
                  <i className="fi fi-sr-phone-call text-sm"></i> 833 110 2842
                </p>
                <p>
                  <i class="fi fi-sr-envelope text-sm"></i>{" "}
                  atencion.cliente@gmail.com
                </p>
              </div>
              <div>
                <i className="text-2xl text-white fi fi-brands-facebook m-3"></i>
                <i className="text-2xl text-white fi fi-brands-instagram m-3"></i>
                <i className="text-2xl text-white fi fi-brands-twitter-alt-circle m-3"></i>
                <i className="text-2xl text-white fi fi-brands-linkedin m-3"></i>
              </div>
            </div>
          </div>

          <div className="mt-9 col-span-3 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1">
            <div className="flex flex-col items-center justify-center">
              <h1 className="mb-9 text-lg font-bold text-white">LUCKY.COM</h1>
              <div className="text-white">
                <a href="#">
                  <p className="mb-2">Servicios veterinarios</p>
                </a>
                <a href="#">
                  <p className="mb-2">Trabaja con nosotros</p>
                </a>
                <a href="#">
                  <p className="mb-2">Clinicas Lucky</p>
                </a>
                <a href="#">
                  <p className="mb-2">Planes de salud</p>
                </a>
                <a href="#">
                  <p className="mb-2">Consejos</p>
                </a>
                <a href="#">
                  <p className="mb-2">Consultas veterinarias</p>
                </a>
              </div>
            </div>
          </div>

          <div className=" mt-9 col-span-3 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1">
            <h1 className=" mb-9 text-lg font-bold text-white text-center">
              SUSCRIBETE
            </h1>
            <div className="flex justify-center">
              <form className="w-11/12">
                <label
                  for="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="EMAIL"
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
