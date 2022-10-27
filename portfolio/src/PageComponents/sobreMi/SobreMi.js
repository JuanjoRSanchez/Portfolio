import React from 'react';
import './sobreMi.css'
import '../../assets/styles/global.css'
import '../../assets/styles/botones.css'
import Curriculum from './SobreMiComponents/curriculum'

export default function SobreMi() {
  return (
    <>
      <div className='body-sobreMi'>
        <section className='seccion-general body-sobreMi'>
          <p className='titulo bold'>Sobre mi</p>
          <hr className='hr01' />
          <div className='text-box'>
            <p className='text-content '>
              Me llamo Juanjo y nací en 1981 en Barcelona, actualmente vivo en Granada.
              En 2020 empecé el Módulo Profesional de Diseño de Aplicaciones Web que acabé
              en Junio de 2022 y hasta ahora he seguido formandome haciendo cursos y proyectos  por mi cuenta para seguir aprendiendo
              tecnologías tanto de BackEnd como de FrontEnd.
              Actualmente estoy buscando empleo como Desarrollador Web.
            </p>
            <p className='text-content'>
              Actualmente estoy buscando empleo como Desarrollador Web y sigo formándome creando proyectos propios.
            </p>
          </div>
        </section>
        <Curriculum />
      </div>
    </>
  )
}

