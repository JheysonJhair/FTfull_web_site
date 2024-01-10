import React, { useState, useEffect } from "react";
import "./Portafolio.css";
import { getUsersBriefcase } from "../../services/user";
import Android from "../../assets/portfolio/android.webp";
import Escritorio from "../../assets/portfolio/escritorio.webp";
import Web from "../../assets/portfolio/web.webp";

function Portfolio() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsersBriefcase();
        setProyectos(data);
      } catch (error) {}
    };

    fetchData();
  }, []);

  const filtrarCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  const proyectosFiltrados =
    categoriaSeleccionada === "todos"
      ? proyectos
      : proyectos.filter(
          (proyecto) =>
            proyecto.tipo ===
            (categoriaSeleccionada === "web"
              ? 1
              : categoriaSeleccionada === "escritorio"
              ? 2
              : 3)
        );

  return (
    <>
      <section className="w" id="portafolios">
        <section className="contenedor" id="trabajo">
          <h2>Portafolio</h2>
          <p className="after">De algo simple algo extraordinario</p>

          <div className="botones-work">
            <ul>
              <li
                className={`filter ${
                  categoriaSeleccionada === "todos" ? "active" : ""
                }`}
                onClick={() => filtrarCategoria("todos")}
                data-nombre="todos"
              >
                Todos
              </li>
              <li
                className={`filter ${
                  categoriaSeleccionada === "web" ? "active" : ""
                }`}
                onClick={() => filtrarCategoria("web")}
                data-nombre="web"
              >
                Web
              </li>
              <li
                className={`filter ${
                  categoriaSeleccionada === "escritorio" ? "active" : ""
                }`}
                onClick={() => filtrarCategoria("escritorio")}
                data-nombre="escritorio"
              >
                Escritorio
              </li>
              <li
                className={`filter ${
                  categoriaSeleccionada === "android" ? "active" : ""
                }`}
                onClick={() => filtrarCategoria("android")}
                data-nombre="android"
              >
                Android
              </li>
            </ul>
          </div>

          <div className="galeria-work">
            {proyectosFiltrados.map((proyecto, index) => (
              <div
                key={index}
                className={`cont-work ${
                  proyecto.tipo === 1
                    ? "web"
                    : proyecto.tipo === 2
                    ? "escritorio"
                    : "android"
                }`}
              >
                <div className="img-work">
                  {proyecto.tipo === 1 && (
                    <img src={Web} alt={proyecto.proyecto} />
                  )}
                  {proyecto.tipo === 2 && (
                    <img src={Escritorio} alt={proyecto.proyecto} />
                  )}
                  {proyecto.tipo === 3 && (
                    <img src={Android} alt={proyecto.proyecto} />
                  )}
                  <div className="img-caption">{proyecto.proyecto}</div>
                </div>
                <div className="textos-work">
                  <h4>{proyecto.texto}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}

export default Portfolio;
