import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Footer from './components/footer/footer';
import Home from './PageComponents/Home/Home'
import Header from './components/headers/header';
import SobreMi from './PageComponents/sobreMi/SobreMi';
import Portfolio from './PageComponents/Portfolio/Portfolio';
import Snake from './PageComponents/Juegos/Snake/sanke01';
import Pacman from './PageComponents/Juegos/Pacman/pacman';
import Conecta from './PageComponents/Juegos/Conecta4/conecta4Home';
import JuegoPrueba from './PageComponents/Juegos/Conecta4/juegoPrueba';
import Stack from './PageComponents/tecnologias/stack02';
import NotFound from './PageComponents/ErrorPage/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/sobreMi' element={<SobreMi />} />
      <Route path='/snake' element={<Snake />} />
      <Route path='/conecta' element={<Conecta />} />
      <Route path='/juegoPrueba' element={<JuegoPrueba />} />
      <Route path='/pacman' element={<Pacman />} />
      <Route path='/stack' element={<Stack />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

reportWebVitals();

