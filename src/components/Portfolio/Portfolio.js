import React, { useState, useEffect } from "react";
import "./Portafolio.css";
import { getUsersBriefcase } from "../../services/user";
import Android from "../../assets/portfolio/android.webp";
import Escritorio from "../../assets/portfolio/escritorio.webp";
import Web from "../../assets/portfolio/web.webp";
import Modal from './Modal';

function Portfolio() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");
  const [proyectos, setProyectos] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsersBriefcase();
        setProyectos(data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  const filtrarCategoria = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalVisible(false);
  };

  const proyectosFiltrados = categoriaSeleccionada === "todos"
    ? proyectos
    : proyectos.filter(proyecto => proyecto.tipo ===
      (categoriaSeleccionada === "web" ? 1 :
        categoriaSeleccionada === "escritorio" ? 2 : 3)
    );

  return (
    <>
      <section className="w" id="portafolios">
        <section className="contenedor" id="trabajo">
          <h2>Portafolio</h2>
          <p className="after">De algo simple algo extraordinario</p>

          <div className="botones-work">
            <ul>
              {['todos', 'web', 'escritorio', 'android'].map(categoria => (
                <li
                  key={categoria}
                  className={`filter ${
                    categoriaSeleccionada === categoria ? "active" : ""
                  }`}
                  onClick={() => filtrarCategoria(categoria)}
                  data-nombre={categoria}
                >
                  {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                </li>
              ))}
            </ul>
          </div>

          <div className="galeria-work">
            {proyectosFiltrados.map((proyecto, index) => (
              <div
                key={index}
                className={`cont-work ${proyecto.tipo === 1 ? "web" : proyecto.tipo === 2 ? "escritorio" : "android"}`}
                onClick={() => openModal(proyecto)}
              >
                <div className="img-work">
                  {proyecto.tipo === 1 && <img src={Web} alt={proyecto.proyecto} />}
                  {proyecto.tipo === 2 && <img src={Escritorio} alt={proyecto.proyecto} />}
                  {proyecto.tipo === 3 && <img src={Android} alt={proyecto.proyecto} />}
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
      {modalVisible && selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </>
  );
}

export default Portfolio;
