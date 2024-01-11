import React, { useState, useEffect } from "react";
import "./Home.css";
import Perfil from "../../assets/webp/perfil.webp";
import { getUserData, downloadCV } from "../../services/user";

function Home() {
  const [text, setText] = useState("");
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData();
        if (data) {
          setUserData(data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    let intervalId;

    const typeText = () => {
      intervalId = setInterval(() => {
        if (currentIndex <= userData.frase?.length) {
          setText(userData.frase.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setTimeout(() => {
            setText("");
            currentIndex = 0;
            typeText();
          }, 3000);
        }
      }, 100);
    };

    typeText();

    return () => {
      clearInterval(intervalId);
    };
  }, [userData.frase]);

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

  const handleDownloadCV = async (userId) => {
    try {
      const cvBlob = await downloadCV(userId);

      const cvUrl = window.URL.createObjectURL(cvBlob);
      const link = document.createElement("a");
      link.href = cvUrl;
      link.setAttribute("download", "Currículum_JheysonJhairAroneAngeles.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error al descargar CV:", error);
    }
  };

  return (
    <div className="left__content container">
      <section
        id="inicio"
        className="div_2 home__page flex align-items-center justify-content-center xl:justify-content-between grid grid-nogutter gap-4"
      >
        <div className="divv col-12 xl:col-6">
          <div className="message__bubble triangle mb-4 md:mb-2">
            <div className="message__text">
              <p>Hola, Yo soy</p>
            </div>
          </div>
          <div className="es">
            <div className="column-container">
              <h1 className="h11 text-3xl sm:text-5xl md:text-7xl">
                Mr. {userData.username}
              </h1>
              <p id="typing-text" className="txt p1">
                {text}
                <span>&#160;</span>
              </p>
            </div>
          </div>

          <div className="home__buttons flex align-items-center gap-2 mt-6">
            <button
              className="des"
              onClick={() => handleDownloadCV(userData.idUser)}
            >
              Descargar CV
            </button>
            <button
              onClick={scrollToPortfolio}
              aria-label="Deslizar a sección portafolio para mostrar mis trabajos"
              className="mess cursor-pointer"
            >
              Mi trabajo
            </button>
          </div>
        </div>
        <div className="imgg right__content col-9 sm:col-6 xl:col-5">
          <img
            className="image"
            src={Perfil}
            alt="Jheyson Jhair"
            width="80"
            height="80"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
