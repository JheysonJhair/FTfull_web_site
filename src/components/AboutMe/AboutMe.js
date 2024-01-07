import React from "react";
import './AboutMe.css';

function AboutMe() {
  return (
    <section id="sobremi" className="sobremi">
      <div className="contenido-seccion">
        <h2>Sobre Mí</h2>
        <p className="t2">
          <span>Hola! soy Jheyson Jhair Arone Angeles.</span> Soy un
          desarrollador web y programador apasionado por crear soluciones
          digitales excepcionales. Mi objetivo es proporcionar experiencias
          intuitivas y atractivas a través de la combinación de diseño estético
          y funcionalidad impecable.
        </p>

        <div className="fila">
          <div className="col">
            <h3>Datos Personales</h3>
            <ul>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <strong>Email</strong>
                jheysonjhairpro@gmail.com
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <strong>Teléfono</strong>
                +51 983 805 438
              </li>
              <li>
                <i className="fa-solid fa-globe"></i>
                <strong>WebSite</strong>
                <a
                  href="https://jheysonjhairpro.ccontrolz.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  jheysonjhairpro.ccontrolz.com
                </a>
              </li>
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <strong>Dirección</strong>
                Perú
              </li>
              <li>
                <i className="fa-solid fa-user-tie"></i>
                <strong>Cargo</strong>
                <span>FULL STACK DEVELOPER</span>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>Intereses</h3>
            <div className="contenedor-intereses">
              <div className="interes">
                <i className="fa-solid fa-gamepad"></i>
                <span>JUEGOS</span>
              </div>
              <div className="interes">
                <i className="fa-solid fa-headphones"></i>
                <span>MUSICA</span>
              </div>
              <div className="interes">
                <i className="fa-solid fa-plane"></i>
                <span>VIAJAR</span>
              </div>
              <div className="interes">
                <i className="fa-solid fa-pencil"></i>
                <span>DIBUJO</span>
              </div>
              <div className="interes">
                <i className="fa-solid fa-laptop"></i>
                <span>PROGRAMAR</span>
              </div>
              <div className="interes">
                <i className="fa-solid fa-pen-nib"></i>
                <span>DISEÑO</span>
              </div>
              <div className="interes">
                <i className="fa-brands fa-edge"></i>
                <span>EDICIÓN</span>
              </div>
              <div className="interes">
                <i className="fa-solid fa-video"></i>
                <span>VIDEOS</span>
              </div>
            </div>
          </div>
        </div>
        <button className="cv">
          <a
            href="./pdf/Currículum JheysonJhairAroneAngeles.pdf"
            aria-label="Descargar curriculum"
            download
            rel="noopener noreferrer"
          >
            Descargar CV
          </a>
          <i className="fa-solid fa-download"></i>
          <span className="overlay"></span>
        </button>
      </div>
    </section>
  );
}

export default AboutMe;
