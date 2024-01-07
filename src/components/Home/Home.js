import React, { useState, useEffect } from "react";
import "./Home.css";
import Perfil from "../../assets/webp/perfil.webp";

function Home() {
  const [text, setText] = useState("");
  const originalText = "Programador y diseñador Fullstack Web Developer";

  useEffect(() => {
    let currentIndex = 0;
    let intervalId;

    const typeText = () => {
      intervalId = setInterval(() => {
        if (currentIndex <= originalText.length) {
          setText(originalText.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setTimeout(() => {
            setText("");
            currentIndex = 0;
            typeText();
          }, 6000);
        }
      }, 100);
    };

    typeText();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portafolios");
    if (portfolioSection) {
      const offset = 84;
      const targetPosition = portfolioSection.offsetTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };
  
  return (
    <>
      <div class="left__content container">
        <section
          id="inicio"
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
                <p id="typing-text" className="txt p1">
                  {text}
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
                onClick={scrollToPortfolio}
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
