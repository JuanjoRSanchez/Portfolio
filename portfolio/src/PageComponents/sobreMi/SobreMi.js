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
              Me llamo Juanjo y nací en 1981 en Barcelona, actualmente vivo en Granada. He
              tenido diferentes experiencias laborales hasta 2013 principalmente relacionadas con la logística hasta 2015, cuando despues de acabar un Modulo Profesional
              de Diseño en Fabricación Mecánica trabajé hasta 2019 como delineante
              para la industria de la automoción. En 2020 enpecé el Módulo Profesional de Diseño de Aplicaciones Web que acabé
              en 2022.
            </p>
            <p className='text-content'>
            Actualmente estoy buscando mi primer empleo como Programador Web.
            </p>
          </div>
        </section>
        <Curriculum />
      </div>
    </>
  )
}

