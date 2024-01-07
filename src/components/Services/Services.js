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

function Services() {
  return (
    <>
      <section className="galery" id="servicios">
        <div className="contenedor">
          <h2 className="titulo">Servicios</h2>
          <p className="after">Presento los diferentes servicios que ofrezco.</p>

          <div className="galeria-port">
            <div className="imagen-port">
              <img src={DIU} alt="" />
              <div className="hover-galeria">
                <img src={Icon} alt="" />
                <p>Diseño de Interfaz de Usuario (UI)</p>
              </div>
            </div>

          <div className="imagen-port">
            <img src={DF} alt="" />
            <div className="hover-galeria">
              <img src={Icon} alt="" />
              <p>Desarrollo Frontend</p>
            </div>
          </div>

          <div className="imagen-port">
            <img src={OR} alt="" />
            <div className="hover-galeria">
              <img src={Icon} alt="" />
              <p>Optimización de Rendimiento</p>
            </div>
          </div>

          <div className="imagen-port">
            <img src={DCR} alt="" />
            <div className="hover-galeria">
              <img src={Icon} alt="" />
              <p>Desarrollo de Componentes Reutilizables</p>
            </div>
          </div>

          <div className="imagen-port">
            <img src={IA} alt="" />
            <div className="hover-galeria">
              <img src={Icon} alt="" />
              <p>Integración con APIs y Backend</p>
            </div>
          </div>

          <div className="imagen-port">
            <img src={AT} alt="" />
            <div className="hover-galeria">
              <img src={Icon} alt="" />
              <p>Animaciones y Transiciones</p>
            </div>
          </div>

          <div className="imagen-port">
            <img src={DB} alt="" />
            <div className="hover-galeria">
              <img src={Icon} alt="" />
              <p>Desarrollo Backend</p>
            </div>
          </div>

          <div className="imagen-port">
            <img src={RD} alt="" />
            <div className="hover-galeria">
              <img src={Icon} alt="" />
              <p>Responsive Design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
</>
  );
}

export default Services;
