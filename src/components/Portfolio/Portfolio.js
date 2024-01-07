import React from 'react';
import './Portafolio.css';
function Portfolio() {
  return (
<>
<section className="w" id="portafolios">
      <section className="contenedor" id="trabajo">
        <h2>Portafolio</h2>
        <p className="after">De algo simple algo extraordinario</p>

        <div className="botones-work">
          <ul>
            <li className="filter active" data-nombre="todos">Todos</li>
            <li className="filter" data-nombre="programacion">Web</li>
            <li className="filter" data-nombre="diseño">Escritorio</li>
            <li className="filter" data-nombre="marketing">Android</li>
          </ul>
        </div>
        <div className="galeria-work">
          <div className="cont-work programacion">
            <div className="img-work">
              <img src="img/webp/we.webp" alt="" />
              <div className="img-caption">SOUND THEZER</div>
            </div>
            <div className="textos-work">
              <h4>Reproductor de video y música</h4>
            </div>
          </div>

          <div className="cont-work programacion">
            <div className="img-work">
              <img src="img/webp/we.webp" alt="" />
              <div className="img-caption">SALE OF TICKET</div>
            </div>
            <div className="textos-work">
              <h4>Sistema de venta de ticket</h4>
            </div>
          </div>
          <div className="cont-work programacion">
            <div className="img-work">
              <img src="img/webp/we.webp" alt="" />
              <div className="img-caption">REPODOCS</div>
            </div>
            <div className="textos-work">
              <h4>Repositorio de archivos</h4>
            </div>
          </div>
          <div className="cont-work programacion">
            <div className="img-work">
              <img src="img/webp/we.webp" alt="" />
              <div className="img-caption">JHEWEKEND</div>
            </div>
            <div className="textos-work">
              <h4>Página web</h4>
            </div>
          </div>
          <div className="cont-work programacion">
            <div className="img-work">
              <img src="img/webp/we.webp" alt="" />
              <div className="img-caption">EIPRES</div>
            </div>
            <div className="textos-work">
              <h4>Sistema de cálculo presupuestal</h4>
            </div>
          </div>
          <div className="cont-work diseño">
            <div className="img-work">
              <img src="img/webp/es.webp" alt="" />
              <div className="img-caption">MARVISUR</div>
            </div>
            <div className="textos-work">
              <h4>Sistema de encomiendas</h4>
            </div>
          </div>

          <div className="cont-work diseño">
            <div className="img-work">
              <img src="img/webp/es.webp" alt="" />
              <div className="img-caption">CALCULIP</div>
            </div>
            <div className="textos-work">
              <h4>Calculadora de IPs</h4>
            </div>
          </div>
          <div className="cont-work diseño">
            <div className="img-work">
              <img src="img/webp/es.webp" alt="" />
              <div className="img-caption">CALCULADORA</div>
            </div>
            <div className="textos-work">
              <h4>Calculadora científica</h4>
            </div>
          </div>
          <div className="cont-work diseño">
            <div className="img-work">
              <img src="img/webp/es.webp" alt="" />
              <div className="img-caption">SIVEN</div>
            </div>
            <div className="textos-work">
              <h4>Sistema de ventas</h4>
            </div>
          </div>
          <div className="cont-work diseño">
            <div className="img-work">
              <img src="img/webp/es.webp" alt="" />
              <div className="img-caption">JAMDER</div>
            </div>
            <div className="textos-work">
              <h4>Sistema de cotización de autos</h4>
            </div>
          </div>
          <div className="cont-work marketing">
            <div className="img-work">
              <img src="img/webp/an.webp" alt="" />
              <div className="img-caption">XGOO</div>
            </div>
            <div className="textos-work">
              <h4>Venta de licores</h4>
            </div>
          </div>
          <div className="cont-work marketing">
            <div className="img-work">
              <img src="img/webp/an.webp" alt="" />
              <div className="img-caption">THE MINIMUN DANGER</div>
            </div>
            <div className="textos-work">
              <h4>Juego aventura</h4>
            </div>
          </div>
          <div className="cont-work marketing">
            <div className="img-work">
              <img src="img/webp/an.webp" alt="" />
              <div className="img-caption">PACMAN</div>
            </div>
            <div className="textos-work">
              <h4>Juego retro</h4>
            </div>
          </div>
          <div id="modal" className="modal">
            <span className="close">&times;</span>
            <div className="modal-content">
              <h2 className="modal-t" id="modal-title"></h2>
              <div className="modal-images"></div>
              <div className="modal-skills"></div>
            </div>
          </div>
        </div>
      </section>
    </section>
</>
  );
}

export default Portfolio;
