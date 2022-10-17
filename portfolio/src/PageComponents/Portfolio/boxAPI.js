import React from 'react'
import './boxes.css'

export default function BoxAPI(props) {
    let nav = '';
    let navGit;
    if (props.title === 'Filmoteca') {
        nav = <a href='http://localhost:9013' ><button className='btn-element'>Visitar {props.title}</button></a>;
        navGit = <a href='https://github.com/JuanjoRSanchez/Vue01/tree/trabajo' ><button className='btn-element'>Repositorio de GitHub </button></a>;
    } 
    else {
        nav = <a href='http://localhost:9014' ><button className='btn-element'>Visitar {props.title}</button></a>;
        navGit = <a href='/snake' ><button className='btn-element'>Repositorio de GitHub </button></a>;
    }

    const filmotecaText = " Filmoteca es una aplicación que desarrollé como trabajo final del Ciclo de Formación Profesional de Desarrollo de Aplicaciones Web ";
    const rickYmortyText = " Rick y Morty es la primera aplicación de FrontEnd que hice para empezar a practicar React";
    let Text;
    function defineText(titulo) {
        switch (titulo) {
            case 'Filmoteca':
                Text = filmotecaText;
                break;
            case 'Rick and Morty':
                Text = rickYmortyText;
                break;
            default:
                break;
        }
        return Text;
    }
    
    return (
        <>
            <div className='boxTitlePortfolio'>
                <h1 >{props.title}</h1>
            </div>
            <div className='portfolio-juego portfolio-element'>
                <div className='boxElement_content'>
                    <img className='boxElement_img' src={props.imag} alt={props.title}></img>
                    {<div className='content_descripcion'>{defineText(props.title)}</div>}
                </div>
                <div className='portfolio-botonera'>
                    {nav}
                    {navGit}
                </div>
            </div>
        </>
    )
}

