import React from 'react'
import { NavLink } from "react-router-dom";
import './boxes.css'

export default function BoxElement(props) {
    const dirSnake = props.dir;
    const snakeText = "Este es el juego de la serpiente clasico de Nokia. ";
    const conectaText = "He recreado el juego de la serpiente clasico Connecta 4.";
    const pacmanText = "He recreado el juego de la serpiente clasico Pacman.";
    let Text ;
    function defineText(titulo) {
        switch (titulo) {
            case 'Snake':
                Text = snakeText;

                break;
            case 'Conecta 4':
                Text = conectaText;

                break;
            case 'Pacman':
                Text = pacmanText;

                break;
            default:
                break;
        }
        
        return Text;
    }
    let nav;
    let navGit;
    if (props.dir === '/snake') {
        nav = <NavLink to={dirSnake} ><button className='btn-element'>Jugar {props.title}</button></NavLink>;
        navGit = <a href='*' ><button className='btn-element'>Repositorio de GitHub </button></a>;

    } else if (props.dir === '/conecta') {
        nav = <NavLink to={dirSnake} ><button className='btn-element'>Jugar {props.title}</button></NavLink>;
        navGit = <a href='https://github.com/JuanjoRSanchez/Conecta4' ><button className='btn-element'>Repositorio de GitHub </button></a>;
    } else {
        nav = <NavLink to={dirSnake} ><button className='btn-element'>Jugar {props.title}</button></NavLink>;
        navGit = <a href='*' ><button className='btn-element'>Repositorio de GitHub </button></a>;
    }

    return (
        <div className='portfolio-juego portfolio-elemnt'>
            <h1 >{props.title}</h1>
            <div className='boxElement_content'>
                <img className='boxElement_img' src={props.imag} alt={props.title}></img>
                {<div className='content_descripcion'>{defineText(props.title)}</div>}
            </div>
            <div className='portfolio-botonera'>
                {nav}
                {navGit}
            </div>
        </div>
    )
}

