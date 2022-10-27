import React from 'react'
import { NavLink } from "react-router-dom";
import './boxes.css'

export default function BoxElement(props) {
    const url = props.dir;
    const snakeText = "Este es el juego de la serpiente clasico de Nokia ¡Ciudado no podras salirte del mapa! ";
    const snakeStack = "Creada unicamente en JavaScript inicialmente y adaptada a React para este Portfolio.";
    const conectaText = "He desarrollado el juego Connecta 4 para poder ser jugado por dos jugadores.";
    const conectaStack = "Creada en JavaScript inicialmente y adaptada a React para este Portfolio.";
    const pacmanText = "He intentado recrear el juego clasico Pacman.";
    const pacmanStack = "Creada en JavaScript inicialmente y adaptada a React para este Portfolio.";


    let Text;
    let stack;
    function defineText(titulo) {
        switch (titulo) {
            case 'Snake':
                Text = snakeText;
                stack = snakeStack;
                break;
            case 'Conecta 4':
                Text = conectaText;
                stack = conectaStack;
                break;
            case 'Pacman':
                Text = pacmanText;
                stack = pacmanStack;
                break;
            default:
                break;
        }

        return (
            <>
                <div className='centrado'>{Text}</div>
                <br></br>
                <div className='centrado'>
                    <div>Stack:</div>
                    {stack}
                </div>
            </>
        )
    }

    let nav;
    let navGit;
    let urlGit;
    if (props.dir === '/snake') {
        urlGit = 'https://github.com/JuanjoRSanchez/Juego-Snake';
    } else if (props.dir === '/conecta') {
        urlGit = 'https://github.com/JuanjoRSanchez/Conecta4/tree/master';
    } else {
        urlGit = 'https://github.com/JuanjoRSanchez/ComeCocos/tree/master';
    }

    nav = <NavLink to={url} ><button className='btn-element'>Jugar {props.title}</button></NavLink>;
    navGit = <a href={urlGit} ><button className='btn-element'>Repositorio de GitHub </button></a>;

    return (
        <>
            <div className='boxTitlePortfolio'>
                <h1 >{props.title}</h1>
            </div>
            <div className='portfolio-juego portfolio-element'>
                <div className='boxElement_content'>
                    <img className='boxElement_img' src={props.imag} alt={props.title}></img>
                    {<div className='content_descripcion'>
                        <p>{defineText(props.title)}</p>
                    </div>}
                </div>
                <div className='portfolio-botonera'>
                    {nav}
                    {navGit}
                </div>
            </div>
        </>
    )
}

