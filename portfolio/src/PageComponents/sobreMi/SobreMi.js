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
              He tenido diferentes experiencias laborales hasta 2013 principalmente
              relacionadas con la logística. Desde 2011 a 2014 hice un Módulo Profesional
              de Diseño en Fabricación Mecánica y cursos relacionados para más tarde empezar a  trabajar como delineante hasta 2019
              para la industria de la automoción. En 2020 empecé el Módulo Profesional de Diseño de Aplicaciones Web que acabé
              en 2022.
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

