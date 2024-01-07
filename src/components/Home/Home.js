import React from "react";
import "./Home.css";
import Perfil from '../../assets/webp/perfil.webp';
function Home() {
  return (
    <>
      <div class="left__content container">
        <section
          id="home"
          class="div_2 home__page flex align-items-center justify-content-center xl\:justify-content-between grid grid-nogutter gap-4"
        >
          <div class="divv col-12 xl:col-6">
            <div class="message__bubble triangle mb-4 md:mb-2">
              <div class="message__text">
                <p>Hola, Yo soy</p>
              </div>
            </div>
            <div class="es">
              <div class="column-container">
                <h1 class="h11 text-3xl sm:text-5xl md:text-7xl">
                  Mr. Jheyson Jhair
                </h1>
                <p id="typing-text" class="txt p1">
                  Programador y diseñador Fullstack Web Developer
                  <span>&#160;</span>
                </p>
              </div>
            </div>

            <div class="home__buttons flex align-items-center gap-2 mt-6">
              <a
                href="./pdf/Currículum JheysonJhairAroneAngeles.pdf"
                aria-label="Descargar curriculum"
                class="mess aa"
                download
              >
                Descargar CV
              </a>
              <button
                id="mitrabajo"
                aria-label="Deslizar a sección portafolio para mostrar mis trabajos"
                class="mess cursor-pointer"
              >
                Mi trabajo
              </button>
            </div>
          </div>
          <div class="imgg right__content col-9 sm:col-6 xl:col-5">
            <img
              clas="image"
              src={Perfil}
              alt="Jheyson Jhair"
              width="80"
              height="80"
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
