import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular, faNode, faReact, faHtml5, faCss3Alt, faJs, faJava, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDatabase as faDatabaseSolid,faCloud,faCode,faMobile } from "@fortawesome/free-solid-svg-icons";

const getFontAwesomeIcon = (icon) => {
  switch (icon) {
    case "nodejs":
      return faNode;
    case "angular":
      return faAngular;
    case "bd":
      return faDatabaseSolid; 
    case "git":
      return faGithub; 
    case "nube":
      return faCloud;
    case "react":
      return faReact;
    case "reactNat":
      return faMobile;
    case "html":
      return faHtml5;
    case "css":
      return faCss3Alt;
    case "js":
      return faJs;
    case "java":
      return faJava;
    case "code":
      return faCode;
    case "c#":
      return faCode;
    case "c++":
      return faCode;
    default:
      return null;
  }
};

const Modal = ({ project, onClose }) => {
  const iconArray = project.iconos.split(",");

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div>
          <span className="close-button" onClick={onClose}>
            &times;
          </span>
          <h2>Proyecto: {project.proyecto}</h2>
          <img src={project.image} alt={project.proyecto} />
          <p>{project.descripcion}</p>
        </div>
        <div className="buttons-container">
          <div className="modal-skills">
            {iconArray.map((iconClass, index) => (
              <div key={index}>
                <FontAwesomeIcon icon={getFontAwesomeIcon(iconClass.trim())} />
              </div>
            ))}
          </div>
          <div className="modal-enlaces">
            <a href={project.gitHub} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={project.web} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
