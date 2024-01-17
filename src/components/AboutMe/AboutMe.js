import React, { useState, useEffect } from "react";
import "./AboutMe.css";
import { getUserData, getUserInterests, downloadCV } from "../../services/user";

function AboutMe() {
  const [userData, setUserData] = useState({});
  const [userInterests, setUserInterests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userDataResponse, userInterestsResponse] = await Promise.all([
          getUserData(),
          getUserInterests(),
        ]);

        if (userDataResponse) {
          setUserData(userDataResponse);
        }

        if (userInterestsResponse) {
          setUserInterests(userInterestsResponse);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDownloadCV = async (userId) => {
    try {
      const cvBlob = await downloadCV(userId);
      const cvUrl = URL.createObjectURL(cvBlob);

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
    <section id="sobremi" className="sobremi">
      <div className="contenido-seccion">
        <h2>Sobre Mí</h2>
        <p className="t2">
          <span>Hola! Soy {userData.username} Arone Angeles </span>
          {userData.sobreMi}
        </p>

        <div className="fila">
          <div className="col">
            <h3>Datos Personales</h3>
            <ul>
              <li>
                <i className="fa-solid fa-envelope" alt="Icono de correo electrónico"></i>
                <strong>Email:</strong>
                {userData.email}
              </li>
              <li>
                <i className="fa-solid fa-phone" alt="Icono de teléfono"></i>
                <strong>Teléfono:</strong>
                +51 {userData.telefono}
              </li>
              <li>
                <i className="fa-solid fa-globe" alt="Icono de sitio web"></i>
                <strong>WebSite:</strong>
                <a href={userData.website} target="_blank" rel="noopener noreferrer" alt="Visitar mi sitio web">
                  jheysonjhairpro.ccontrolz.com
                </a>
              </li>
              <li>
                <i className="fa-solid fa-location-dot" alt="Icono de ubicación"></i>
                <strong>Dirección:</strong>
                {userData.direccion}
              </li>
              <li>
                <i className="fa-solid fa-user-tie" alt="Icono de cargo"></i>
                <strong>Cargo:</strong>
                <span>{userData.cargo}</span>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>Intereses</h3>
            <div className="contenedor-intereses">
              {userInterests.map((interest, index) => (
                <div className="interes" key={index}>
                  <i className={`${interest.icono}`} alt={`Icono de interés: ${interest.nombre}`}></i>
                  <span>{interest.nombre.toUpperCase()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button className="des" onClick={() => handleDownloadCV(userData.idUser)}>
          Descargar CV
          <i className="fa-solid fa-download" alt="Icono de descarga"></i>
          <span className="overlay"></span>
        </button>

        <span className="overlay"></span>
      </div>
    </section>
  );
}

export default AboutMe;
