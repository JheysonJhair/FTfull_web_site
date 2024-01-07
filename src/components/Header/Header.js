import React from "react";
import './Header.css';
import Logo from '../../assets/webp/Logo.webp';
function Header() {
  return (
    <>
      <div className="contenedor-header">
        <header>
          <div className="logo">
          <img src={Logo} alt="Logo" />
          </div>
          <nav id="nav">
            <ul>
              <li>
              <a href="#inicio" id="enlace-inicio" className="btn-header">
                INICIO
              </a>
              </li>
              <li>
                <a href="#sobremi" id="enlace-sobremi" className="btn-header">
                  SOBRE MI
                </a>
              </li>
              <li>
                <a href="" id="enlace-skills" className="btn-header">
                  APTITUDES
                </a>
              </li>
              <li>
                <a href="#servicios" id="enlace-servicios" className="btn-header">
                  SERVICIOS
                </a>
              </li>
              <li>
                <a href="#portafolios" id="enlace-portafolios" className="btn-header">
                  PORTAFOLIO
                </a>
              </li>
              <li>
                <a href="#contacto" id="enlace-contacto" className="btn-header">
                  CONTACTO
                </a>
              </li>
            </ul>
          </nav>
          <div className="hireMe__button pt-4">
            <a
              href="mailto:jhair2003unamba.com"
              aria-label="Enviar mensaje al correo"
              id="typing-link"
              className="aa cursor-pointer no-underline text-xl xl:text-sm hover-scale-effect"
            >
              Contratame
            </a>
          </div>
          <div className="nav-responsive" onclick="mostrarOcultarMenu()">
            <i className="fa-solid fa-bars"></i>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
