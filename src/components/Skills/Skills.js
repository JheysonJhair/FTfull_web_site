import React, { useEffect, useState } from "react";
import './Skills.css';

function Skills() {

  const efectoHabilidades = () => {
    const skills = document.getElementById("skills");
    const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
  
    if (distancia_skills >= 300) {
      const habilidades = document.getElementsByClassName("progreso");
  
      const clases = [
        "java", "javascript", "typescript", "htmlcss",
        "photoshop", "wordpress", "drupal", "node",
        "comunicacion", "trabajo", "creatividad", "dedicacion", "proyect"
      ];
  
      Array.from(habilidades).forEach((habilidad, index) => {
        habilidad.classList.add(clases[index]);
      });
    }
  };
  

  useEffect(() => {
    window.onscroll = () => {
      efectoHabilidades();
    };

    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="contenido-seccion">
        <h2>APTITUDES</h2>
        <div className="fila">
          <div className="col">
            <h3>Técnicas</h3>
            <div className="skill">
              <span>Java</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>85%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>Javascript</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>75%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>Typescript</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>85%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>HTML & CSS</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>92%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>Photoshop</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>75%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>Angular js</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>85%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>React js</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>60%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>Node js</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>60%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <h3>Profesionales</h3>
            <div className="skill">
              <span>Comunicación</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>80%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>Trabajo en Equipo</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>80%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>Creatividad</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>95%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>Dedicación</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>75%</span>
                </div>
              </div>
            </div>
            <div className="skill">
              <span>Gestión de proyectos</span>
              <div className="barra-skill">
                <div className="progreso">
                  <span>94%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
