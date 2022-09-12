import React from 'react'
import { NavLink } from "react-router-dom";
import './boxes.css'

export default function boxElement(props) {
    const dirSnake = props.dir;

    let nav;
    let navGit;
    if (props.dir === '/snake') {
        nav = <NavLink to='/snake' ><button className='btn-element'>Jugar {props.title}</button></NavLink>;
        navGit = <NavLink to='/snake' ><button className='btn-element'>Jugar {props.title}</button></NavLink>;

    } else if(props.dir === '/conecta'){
        nav = <NavLink to='/conecta' ><button className='btn-element'>Jugar {props.title}</button></NavLink>;
        navGit = <NavLink to='/snake' ><button className='btn-element'>Jugar {props.title}</button></NavLink>;
    }else {
        nav = <NavLink to='/pacman' ><button className='btn-element'>Jugar {props.title}</button></NavLink>;
        navGit = <NavLink to='/snake' ><button className='btn-element'>Jugar {props.title}</button></NavLink>;
    }

    console.log(dirSnake)
    return (
        <div className='portfolio-juego portfolio-elemnt'>
            <h1>{props.title}</h1>
            <div className='image-box'>
                <img src={props.imag} alt={props.title}></img>
            </div>
            <div className='portfolio-botonera'>
                {nav}
                {navGit}
            </div>
        </div>
    )
}

