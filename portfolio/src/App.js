import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Home from './PageComponents/Home/Home'
import Header from './components/headers/header';
import SobreMi from './PageComponents/sobreMi/SobreMi';
import Portfolio from './PageComponents/Portfolio/Portfolio';
import Contacto from './PageComponents/Contacto/Contacto';
import Snake from './PageComponents/Juegos/Snake/sanke01';
import Pacman from './PageComponents/Juegos/Pacman/pacman';
import Conecta from './PageComponents/Juegos/Conecta4/conecta4';
import JuegoPrueba from './PageComponents/Juegos/Conecta4/juegoPrueba';
import NotFound from './PageComponents/ErrorPage/NotFound';

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/sobreMi' element={<SobreMi />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/snake' element={<Snake />} />
          <Route path='/conecta' element={<Conecta />} />
          <Route path='/juegoPrueba' element={<JuegoPrueba />} />
          <Route path='/pacman' element={<Pacman />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

/*

 <Route path='/conectaJuego' element={<ConectaJuego />} />


<Route path='/conecta' element={<Conecta />} />
          <Route path='/conecta4Juego' element={<ConectaJuego />} />
*/