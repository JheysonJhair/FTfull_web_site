import React from 'react';
import './Services.css';

import DIU from "../../assets/webp/s_html.webp";
import DF from "../../assets/webp/s_css.webp";
import OR from "../../assets/webp/s_js.webp";
import DCR from "../../assets/webp/s_ts.webp";
import IA from "../../assets/webp/s_an.webp";
import AT from "../../assets/webp/s_react.webp";
import DB from "../../assets/webp/s_java.webp";
import RD from "../../assets/webp/s_php.webp";
import Icon from "../../assets/webp/IconoProyecto.png";

const servicios = [
  { imagen: DIU, texto: 'Diseño de Interfaz de Usuario (UI)' },
  { imagen: DF, texto: 'Desarrollo Frontend' },
  { imagen: OR, texto: 'Optimización de Rendimiento' },
  { imagen: DCR, texto: 'Desarrollo de Componentes Reutilizables' },
  { imagen: IA, texto: 'Integración con APIs y Backend' },
  { imagen: AT, texto: 'Animaciones y Transiciones' },
  { imagen: DB, texto: 'Desarrollo Backend' },
  { imagen: RD, texto: 'Responsive Design' },
];

function Services() {
  return (
    <>
      <section className="galery" id="servicios">
        <div className="contenedor">
          <h2 className="titulo">Servicios</h2>
          <p className="after">Presento los diferentes servicios que ofrezco.</p>

          <div className="galeria-port">
            {servicios.map((servicio, index) => (
              <div key={index} className="imagen-port">
                <img src={servicio.imagen} alt="" />
                <div className="hover-galeria">
                  <img src={Icon} alt="Skill de Jhair" />
                  <p>{servicio.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
