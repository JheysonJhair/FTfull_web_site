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

  const handleSkillEffect = () => {
    const skillsSection = document.getElementById("skills");
    const distanceToSkills = window.innerHeight - skillsSection.getBoundingClientRect().top;

    if (distanceToSkills >= 300) {
      const skillsElements = document.getElementsByClassName("progreso");

      userSkills.forEach((skill, index) => {
        if (skill.nombre && skill.porcentaje) {
          skillsElements[index].classList.add(
            'progreso',
            skill.nombre.toLowerCase().replace(/\s/g, ''),
          );
          skillsElements[index].style.setProperty('--porcentaje', `${skill.porcentaje}%`);
        }
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleSkillEffect);

    return () => {
      window.removeEventListener('scroll', handleSkillEffect);
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
            {userSkills.map((skill, index) => (
              skill.tipo === 1 && (
                <div key={index} className="skill">
                  <span>{skill.nombre}</span>
                  <div className="barra-skill">
                    <div className="progreso">
                      <span>{skill.porcentaje}%</span>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
          <div className="col">
            <h3>Profesionales</h3>
            {userSkills.map((skill, index) => (
              skill.tipo === 2 && (
                <div key={index} className="skill">
                  <span>{skill.nombre}</span>
                  <div className="barra-skill">
                    <div className="progreso">
                      <span>{skill.porcentaje}%</span>
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
