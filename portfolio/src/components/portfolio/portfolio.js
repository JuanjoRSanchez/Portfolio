import React from 'react';
import './portfolio.css';
import '../../assets/styles/global.css'
import '../../assets/styles/botones.css'
import { NavLink } from "react-router-dom";

export default function Portfolio() {
    return (
        <>
            <div className='body-portfolio'>
                <div className='portfolio'>
                    <p className='titulo bold'>Algunos de mis trabajos</p>
                    <hr className='hr01' />
                    <div className='text-box'>
                        <p className='text-content'>Aquí le muestro algunos de los proyectos que he desarrolado, con
                            diferentes tecnologías tanto de frontEnd (HTML, CSS, Javascript, React, Vue) como
                            de BackEnd (Java, JPA, MySql).
                        </p>
                    </div>
                </div>
                <NavLink to='/portfolio/#portfolio' className='link'>
                    <div className='svg-wrapper'>
                        <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                            <rect className="shape" height="60" width="320" />
                        </svg>
                        <div className="text">Portfolio</div>
                    </div>
                </NavLink>
            </div>
        </>
    )
}