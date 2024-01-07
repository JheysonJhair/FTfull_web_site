import React from "react";
import './Footer.css';

function Footer() {
  const scrooInit = () => {
    const portfolioSection = document.getElementById("inicio");
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
      <footer>
        <a onClick={scrooInit} className="arriba btn-header" id="enlace-arriba" >
          <i className="fa-solid fa-angles-up"></i>
        </a>
        <div className="redes">
          <a
            href="https://www.facebook.com/JheysonJhair.AroneAngeles.2003/"
            target="_blank"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/jheyson_jhair2003/"
            target="_blank"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/jheysonjhairpro" target="_blank">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/JheysonJhair" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="#">
            <i className="fa-solid fa-rss" target="_blank"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
