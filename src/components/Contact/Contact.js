import React from "react";
import Ubicacion from '../../assets/webp/ubicacion.webp';
import './Contact.css';
function Contact() {
  return (
    <>
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
                  <label for="name">
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
                  <label for="phone">
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
                  <label for="email">
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
                  <label for="comments">
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
                  <label for="message">Mensaje</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Mensaje"
                  ></textarea>
                </div>
                <button type="submit">
                  Enviar Mensaje<i className="fa-solid fa-paper-plane"></i>
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
              <img src={Ubicacion} alt="" />
              <div className="info">
                <ul>
                  <li>
                    <i className="fa-solid fa-location-dot"></i>
                    Perú
                  </li>
                  <li>
                    <i className="fa-solid fa-mobile-screen"></i>
                    Llámame: +51 983 805 438
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    Email: jheysonjhairpro@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
