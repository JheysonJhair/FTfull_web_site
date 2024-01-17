import React, { useEffect, useState } from "react";
import "./Header.css";
import Logo from "../../assets/webp/Logo.webp";
import "../responsive.css";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const scrollToTarget = (targetId) => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offset = 84;
        const targetPosition = targetId === "inicio" ? 0 : targetElement.offsetTop - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    };

    const handleLinkClick = (e, targetId) => {
      e.preventDefault();

      const links = document.querySelectorAll(".btn-header");
      links.forEach((link) => link.classList.remove("active"));

      e.target.classList.add("active");

      scrollToTarget(targetId);
    };

    document.getElementById("enlace-inicio").classList.add("active");

    const addEventListenerToLink = (id, target) => {
      document.getElementById(id).addEventListener("click", (e) => handleLinkClick(e, target));
    };

    addEventListenerToLink("enlace-inicio", "inicio");
    addEventListenerToLink("enlace-sobremi", "sobremi");
    addEventListenerToLink("enlace-skills", "skills");
    addEventListenerToLink("enlace-servicios", "servicios");
    addEventListenerToLink("enlace-portafolios", "portafolios");
    addEventListenerToLink("enlace-contacto", "contacto");
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
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
              <a href="#skills" id="enlace-skills" className="btn-header">
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
            Contrátame
          </a>
        </div>
        <div className="nav-responsive" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
        {isMenuOpen && (
          <nav id="nav-responsive">
            <ul>
              <li>
                <a href="#inicio" className="btn-header">
                  INICIO
                </a>
              </li>
              <li>
                <a href="#sobremi" className="btn-header">
                  SOBRE MI
                </a>
              </li>
              <li>
                <a href="#skills" className="btn-header">
                  APTITUDES
                </a>
              </li>
              <li>
                <a href="#servicios" className="btn-header">
                  SERVICIOS
                </a>
              </li>
              <li>
                <a href="#portafolios" className="btn-header">
                  PORTAFOLIO
                </a>
              </li>
              <li>
                <a href="#contacto" className="btn-header">
                  CONTACTO
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </div>
  );
}

export default Header;
