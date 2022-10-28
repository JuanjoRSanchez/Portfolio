import React from 'react'
import './boxes.css'

export default function BoxAPI(props) {
    let url = props.dir;
    let nav;
    let navGit;
    if (props.title === 'Filmoteca') {
        nav = <a href={url} ><button className='btn-element'>Visitar {props.title}</button></a>;
        navGit = <div> <a href='https://github.com/JuanjoRSanchez/filmotecaFront/tree/trabajo/filmotecafront' ><button className='btn-element'>Repositorio de GitHub FrontEnd</button></a> <a href='https://github.com/JuanjoRSanchez/filmotecaBack' ><button className='btn-element'>Repositorio de GitHub BackEnd</button></a></div>;
    }
    else if (props.title === 'Rick&Morty') {
        nav = <a href={url} ><button className='btn-element'>Visitar {props.title}</button></a>;
        navGit = <a href='https://github.com/JuanjoRSanchez/rick-morty' ><button className='btn-element'>Repositorio de GitHub </button></a>;
    }else {
        nav = <a href={url} ><button className='btn-element'>Visitar {props.title}</button></a>;
        navGit =  <a href='https://github.com/JuanjoRSanchez/rick-morty' ><button className='btn-element'>Repositorio de GitHub FrontEnd</button></a> ; 
    }

    const filmotecaText = " Filmoteca es una aplicación que desarrollé como trabajo final del Ciclo de Formación Profesional de Desarrollo de Aplicaciones Web. Es una aplicación diseñada para que los usuarios guarden información sobre las series y películas que ven o tienen pendientes, pudiendo añadir información sobre la obra, comentarios y notas.";
    const stackFilmoteca = "Utilicé para el FrontEnd el frameWork Vue, para el BackEnd Java con Spring Boot y JPA y la Base de Datos MySQL.   "
    const rickYmortyText = " Rick y Morty es la primera aplicación de FrontEnd que hice para empezar a practicar React. Es una página sencilla sobre consume la API de Rick & Morty mediante Axios, muestra todos todos los personajes de la serie y clicando en cada personaje muestra información sobre él.  ";
    const stackRick = "Utilicé para el FrontEnd las librerías React y Axios."
    // const portfolioText = "He hecho el portfolio en React para mejorar mis habilidades con esta librería.";
    const portfolioStack = "Este portfolio ha sido creado utilizando React.";

    let Text;
    let stack;
    function defineText(titulo) {
        switch (titulo) {
            case 'Filmoteca':
                Text = filmotecaText;
                stack = stackFilmoteca;
                break;
            case 'Rick&Morty':
                Text = rickYmortyText;
                stack = stackRick;
                break;
            case 'Portfolio':
                //Text = portfolioText;
                stack = portfolioStack;
                break;
            default:
                break;
        }
        return (
            <>
                <div >{Text}</div>
                <div className='centrado'>
                    <div >Stack:</div>
                    {stack}
                </div>
            </>
        );
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

