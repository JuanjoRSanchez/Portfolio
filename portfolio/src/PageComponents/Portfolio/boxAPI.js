import React from 'react'
import './boxes.css'

export default function boxAPI(props) {
    let nav = '';
    let navGit;
    if (props.title === 'Filmoteca') {
        nav = <a href='https://juanjorubiosancheportfolio.netlify.app/' ><button className='btn-element'>Visitar {props.title}</button></a>;
        navGit = <a href='https://github.com/JuanjoRSanchez/Vue01/tree/trabajo' ><button className='btn-element'>Repositorio de GitHub </button></a>;

    } else{
        nav = <a href='https://juanjorubiosancheportfolio.netlify.app/' ><button className='btn-element'>Visitar {props.title}</button></a>;
        navGit = <a href='/snake' ><button className='btn-element'>Repositorio de GitHub </button></a>;
    }
    
    const snakeText = "Este es el juego de la serpiente clasico de Nokia. ";
    const conectaText = "He recreado el juego de la serpiente clasico Connecta 4.";
    let Text ;
    function defineText(titulo) {
        switch (titulo) {
            case 'Filmoteca':
                Text = snakeText;

                break;
            case 'Rick and Morty':
                Text = conectaText;

                break;
            default:
                break;
        }
        
        return Text;
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

/*
   <div className='portfolio-API portfolio-elemntAPI'>
            <h1 className='titulo-API'>{props.title}</h1>
            <div className='image-boxAPI'>
                <img className='imgAPI' src={props.imag} alt={props.title}></img>
            </div>
            <div className='portfolio-botoneraAPI'>
                {nav}
                {navGit}
            </div>
</div>
*/