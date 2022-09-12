import React from 'react';
import './header.css';
import '../../assets/styles/botones.css';
import '../../assets/styles/global.css';
import { NavLink } from "react-router-dom";
import BurguerIcon from '../../assets/images/burguer.jpg';
import './menu-desplegable'

export default function Header() {
  return (
    <div className='header'>
      <div className="box-0">
        <div className='btn-home mibtn-home'>
          <NavLink to='/' className='header-link'>Home</NavLink>
        </div>
      </div>
      <nav className='container-link'>
        <div className="box-1">
          <div className="btn mibtn">
            <NavLink to='/sobreMi' className='header-link' >Sobre mí</NavLink>
          </div>
        </div>
        <div className="box-1">
          <div className="btn mibtn">
            <NavLink to='/portfolio' className='header-link'>Portfolio</NavLink>
          </div>
        </div>
        <div className="box-1">
          <div className="btn mibtn">
            <a href='#footer' className='header-link'>Contacto</a>
          </div>
        </div>
      </nav>
      <nav className='burguer-menu'>
        <img src={BurguerIcon} alt='Imagen menú desplegable' />
      </nav>
      <div className='desplegable' id='desplegable'>
        <ul className='desplegable-lista' >
          <NavLink to='/sobreMi' ><li className='desplegable-elemento'>Sobre mí</li></NavLink>
          <NavLink to='/portfolio'><li className='desplegable-elemento'>Portfolio</li></NavLink>
          <NavLink to='/contacto'><li className='desplegable-elemento'>Contacto</li></NavLink>
        </ul>
      </div>
    </div>
  )
}
/*
<div className="box-1">
          <div className="btn mibtn">
            <NavLink to='/contacto' className='header-link' >Contacto</NavLink>
          </div>
        </div>
*/