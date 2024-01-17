import React, { useState, useEffect } from "react";
import Ubicacion from "../../assets/webp/ubicacion.webp";
import "./Contact.css";
import { getUserData } from "../../services/user";

function Contact() {
  const [userData, setUserData] = useState({});
  const [isFormSubmitted, setFormSubmitted] = useState(false);

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    try {
      await fetch("https://formspree.io/f/xgegvppo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataObject),
      });

      event.target.reset();
      setFormSubmitted(true);

      setTimeout(() => {
        setFormSubmitted(false);
      }, 4000); 
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <section id="contacto" className="contacto">
      <div className="contenido-seccion">
        <h2>CONTACTO</h2>
        <div className="fila">
          <div className="col">
            <form
              action="https://formspree.io/f/xgegvppo"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="name">Tú Nombre <span className="required">*</span></label>
                <input type="text" placeholder="Tú Nombre" name="name" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Número telefónico <span className="required">*</span></label>
                <input type="text" placeholder="Número telefónico" name="phone" id="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Dirección de correo <span className="required">*</span></label>
                <input type="email" placeholder="Dirección de correo" name="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="comments">Tema<span className="required">*</span></label>
                <input type="text" placeholder="Tema" name="comments" id="comments" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Mensaje"></textarea>
              </div>
              <button type="submit">Enviar Mensaje <i className="fa-solid fa-paper-plane"></i><span className="overlay"></span></button>
              <input type="hidden" name="_next" value="https://jheysonjhairpro.ccontrolz.com/" />
              <input type="hidden" name="_captcha" value="false" />
              {isFormSubmitted && (
                <div className="confirmation-message">
                 ✅  ¡El formulario se envió correctamente! Gracias por tu mensaje.
                </div>
              )}
            </form>
          </div>

          <div className="col">
            <img src={Ubicacion} alt="Ubicación" />
            <div className="info">
              <ul>
                <li><i className="fa-solid fa-location-dot"></i>{userData.direccion}</li>
                <li><i className="fa-solid fa-mobile-screen"></i>Llámame: +51 {userData.telefono}</li>
                <li><i className="fa-solid fa-envelope"></i>Email: {userData.email}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
