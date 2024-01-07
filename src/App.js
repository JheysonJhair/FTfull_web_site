import "./App.css";
import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import './index.css'; 
import './assets/styles/_variables.scss'; // Importa tus variables y fuentes
import './assets/styles/_global.scss'; // Importa tus estilos globales
import './index.css'; // Asegúrate de tener tu archivo de estilos CSS global

function App() {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
