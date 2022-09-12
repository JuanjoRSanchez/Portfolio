import React from 'react';
import Portfolio from '../../components/portfolio/portfolio';
import Presentacion from '../../components/presentacion/presentacion';
import './home.css';

export default function Home() {
  return (
    <>
      <div id='presentacion'>
        <Presentacion />
      </div>
      <Portfolio />
    </>
  )
}