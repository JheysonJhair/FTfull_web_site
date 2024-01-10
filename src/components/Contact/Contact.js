import React, { useState, useEffect } from "react";
import Ubicacion from '../../assets/webp/ubicacion.webp';
import './Contact.css';
import { getUserData } from "../../services/user"; 

function Contact() {
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
  return (
    <section id="contacto" className="contacto">
      <div className="contenido-seccion">
        <h2>CONTACTO</h2>
        <div className="fila">
          <div className="col">
            <form
              action="https://formsubmit.co/3bbfa6527dc61525c9e0bdefa781acc0"
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="name">
                  Tú Nombre <span className="required">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Tú Nombre"
                  name="name"
                  id="name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">
                  Número telefónico <span className="required">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Número telefónico"
                  name="phone"
                  id="phone"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  Dirección de correo <span className="required">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Dirección de correo"
                  name="email"
                  id="email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="comments">
                  Tema<span className="required">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Tema"
                  name="comments"
                  id="comments"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Mensaje"
                ></textarea>
              </div>
              <button type="submit">
                Enviar Mensaje <i className="fa-solid fa-paper-plane"></i>
                <span className="overlay"></span>
              </button>
              <input
                type="hidden"
                name="_next"
                value="https://jheysonjhairpro.ccontrolz.com/"
              />
              <input type="hidden" name="_captcha" value="false" />
            </form>
          </div>

          <div className="col">
            <img src={Ubicacion} alt="Ubicación" />
            <div className="info">
              <ul>
                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  {userData.direccion}
                </li>
                <li>
                  <i className="fa-solid fa-mobile-screen"></i>
                  Llámame: +51 {userData.telefono}
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>
                  Email: {userData.email}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
