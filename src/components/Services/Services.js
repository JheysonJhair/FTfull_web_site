import React from 'react';
import './Services.css';
function Services() {
  return (
<>
<section className="galery" id="servicios">
      <div className="contenedor">
        <h3 className="titulo">Servicios</h3>
        <p className="after">Presento los diferentes servicios que ofrezco.</p>

        <div className="galeria-port">
          <div className="imagen-port">
            <img src="img/webp//s_html.webp" alt="" />
            <div className="hover-galeria">
              <img src="img/IconoProyecto.png" alt="" />
              <p>Diseño de Interfaz de Usuario (UI)</p>
            </div>
          </div>

          <div className="imagen-port">
            <img src="img/webp//s_css.webp" alt="" />
            <div className="hover-galeria">
              <img src="img/IconoProyecto.png" alt="" />
              <p>Desarrollo Frontend</p>
            </div>
          </div>

          <div className="imagen-port">
            <img src="img/webp/s_js.webp" alt="" />
            <div className="hover-galeria">
              <img src="img/IconoProyecto.png" alt="" />
              <p>Optimización de Rendimiento</p>
            </div>
          </div>

          <div className="imagen-port">
            <img src="img/webp/s_ts.webp" alt="" />
            <div className="hover-galeria">
              <img src="img/IconoProyecto.png" alt="" />
              <p>Desarrollo de Componentes Reutilizables</p>
            </div>
          </div>

          <div className="imagen-port">
            <img src="img/webp/s_an.webp" alt="" />
            <div className="hover-galeria">
              <img src="img/IconoProyecto.png" alt="" />
              <p>Integración con APIs y Backend</p>
            </div>
          </div>

          <div className="imagen-port">
            <img src="img/webp/s_react.webp" alt="" />
            <div className="hover-galeria">
              <img src="img/IconoProyecto.png" alt="" />
              <p>Animaciones y Transiciones</p>
            </div>
          </div>

          <div className="imagen-port">
            <img src="img/webp/s_java.webp" alt="" />
            <div className="hover-galeria">
              <img src="img/IconoProyecto.png" alt="" />
              <p>Desarrollo Backend</p>
            </div>
          </div>

          <div className="imagen-port">
            <img src="img/webp/s_php.webp" alt="" />
            <div className="hover-galeria">
              <img src="img/IconoProyecto.png" alt="" />
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
