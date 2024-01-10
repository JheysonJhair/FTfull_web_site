
import React, { useEffect, useState } from "react";
import './Skills.css';
import { getUserSkills } from "../../services/user";

function Skills() {
  const [userSkills, setUserSkills] = useState([]);

  const fetchUserSkills = async () => {
    try {
      const data = await getUserSkills();
      setUserSkills(data);
    } catch (error) {
      console.error('Error fetching user skills:', error);
    }
  };

const efectoHabilidades = () => {
  const skills = document.getElementById("skills");
  const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

  if (distancia_skills >= 300) {
    const habilidades = document.getElementsByClassName("progreso");

    userSkills.forEach((habilidad, index) => {
      habilidad.nombre &&
        habilidad.porcentaje &&
        habilidades[index].classList.add(
          'progreso',
          habilidad.nombre.toLowerCase().replace(/\s/g, ''),
        );

      habilidades[index].style.setProperty('--porcentaje', `${habilidad.porcentaje}%`);
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
  }, [userSkills]);

  useEffect(() => {
    fetchUserSkills();
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="contenido-seccion">
        <h2>APTITUDES</h2>
        <div className="fila">
          <div className="col">
            <h3>Técnicas</h3>
            {userSkills.map((habilidad, index) => (
              habilidad.tipo === 1 && (
                <div key={index} className="skill">
                  <span>{habilidad.nombre}</span>
                  <div className="barra-skill">
                    <div className="progreso">
                      <span>{habilidad.porcentaje}%</span>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
          <div className="col">
            <h3>Profesionales</h3>
            {userSkills.map((habilidad, index) => (
              habilidad.tipo === 2 && (
                <div key={index} className="skill">
                  <span>{habilidad.nombre}</span>
                  <div className="barra-skill">
                    <div className="progreso">
                      <span>{habilidad.porcentaje}%</span>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
