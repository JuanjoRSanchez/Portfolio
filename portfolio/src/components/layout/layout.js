import React from 'react';
import Portfolio from '../portfolio/portfolio';
import Presentacion from '../presentacion/presentacion';
import './layout.css';

export default function Layout() {
  return (
    <>
      <div id='presentacion'>
        <Presentacion />
      </div>
      <Portfolio />
    </>
  )
}