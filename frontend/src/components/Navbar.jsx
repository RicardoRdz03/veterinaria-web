import React from "react";
import "../estilos.css";
import "@flaticon/flaticon-uicons/css/all/all.css";

function Navbar() {
  return (
    <>
      <header id="header">
        <nav id="navbar">
          <h1 className="text-3xl text-white" id="logo">
            LUCKY <i className="fi fi-sr-paw-heart"></i>
          </h1>

          <label id="label_hamburguesa" htmlFor="menu_hamburguesa">
            <i
              id="list_icon"
              className="fi fi-rr-menu-burger text-3xl text-white"
            ></i>
          </label>
          <input id="menu_hamburguesa" type="checkbox" />
          <ul className="text-white" id="ul_links">
            <li id="li_links">
              <a id="link" href="#">
                Inicio
              </a>
            </li>
            <li id="li_links">
              <a id="link" href="#cerca-de-ti">
                Cerca de ti
              </a>
            </li>
            <li id="li_links">
              <a id="link" href="#consejos">
                Consejos
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
