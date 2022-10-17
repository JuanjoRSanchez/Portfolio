import './presentacion.css';
import '../../assets/styles/global.css';
import '../../assets/styles/botones.css';
import { NavLink } from "react-router-dom";


export default function Layout() {
    return (
        <>
            <div className='body-presentacion'>
                <div className='title-layout'>
                    <p className='titulo russo'>Juanjo Rubio / Desarrollador Web Junior</p>
                    <hr className='hr02' />
                    <div className='text-box'>
                        <p className='text-content'>
                            Hola, me llamo Juanjo Rubio Sanchez y acabo de finalizar el Modulo
                            de Formación Profesional de Diseño de Aplicaciones Web y
                            he creado esta web para presentarme como
                            desarrollador, aqui encontrarás información sobre mi
                            y algunos trabajos que he desarrollado.
                            <br /><br />
                            ! Bienvenidos !
                        </p>
                    </div>
                </div>
                <NavLink to='/sobreMi' className='link'>
                    <div className='svg-wrapper'>
                        <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                            <rect className="shape" height="60" width="320" />
                        </svg>
                        <div className="text">Sobre mí</div>
                    </div>
                </NavLink>
            </div>
        </>
    )
}
