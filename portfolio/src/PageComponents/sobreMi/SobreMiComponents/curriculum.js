import React from 'react';
import '../../../assets/styles/global.css';
import '../../../assets/styles/botones.css';
import './curriculum.css';

export default function Curriculum() {
  

  return (
    <>
      <div className='body-sobreMi'>
        <section className='seccion-general '>
          <p className='titulo bold'>Currículum</p>
          <hr className='hr01' />
          <div className='text-box'>
            <p className='text-content'>
              Mi currículum hasta ahora no tiene ninguna relación con el sector
              de la informatica más allá de las prácticas del modulo de formación y
              del uso como herramienta con programas de
              gestión logística o de diseño CAD, de todos modos si tiene interes clicando
              en botón inferior podrá verlo.
            </p>
            <p className='text-content'>Las prácticas del Modulo de Diseño de Aplicaciones Web las realicé en la empresa Tiresur, en Granada. Me dediqué
              a mejoras y nuevas implementaciones en un Scraper y haciendo cambios de diseño en la página de Center's Auto.
            </p>
            <button className='btn-curriculum'>Desplegar currículum</button>
            <div className='curriculum'>
              <div className='curriculum-box'>
                <p>Estudios</p>
                <hr />
                <div className='curriculum-item'>
                  <p>Año 2019</p>
                  Curso de Diseño de Piezas de plástico con CATIA V5.
                </div>
                <div className='curriculum-item'>
                  <p>Fecha de  02/2015 al 09/2015</p>
                  Curso de Diseño de útiles de procesado de chapa (matricería) en la Fundación Ascamm. Utilizando Solidworks y Autocad.
                  Duración del curso 700 h con módulo de formación en empresas.
                </div>
                <div className='curriculum-item'>
                  <p>Desde 10/2011 hasta la 31/01/2013</p>
                  FP Grado Superior Diseño en Fabricación mecánica
                  Centro: Escola del Treball (Barcelona).
                </div>
                <div className='curriculum-item'>
                  <p>Año 2007</p>
                  Curso de Técnico Auxiliar en Diseño Gráfico de octubre de 2006 a mayo de 2007
                  ( 684h ). Instituto público Ave María San Cristóbal Carretera de Murcia ( Granada ).
                </div>
                <div className='curriculum-item'>
                  <p>Año 2006</p>
                  Curso de Diseño Gráfico de Abril a Mayo de 2006 ( 150h ). Escuela de arte
                  granada ( Granada ).
                </div>
                <div className='curriculum-item'>
                  <p>kkkkkkkkk</p>
                  Titulo de ( E.S.O ) de 1996 - 1999. Instituto público Pere Calders en Cerdanyola
                  del Valles ( Barcelona ).
                </div>
                <div className='curriculum-item'>
                  <p>33333333333</p>
                  Titulo de ( E.G.B ) de 1986 - 1996. Colegio público Serraparera en Cerdanyola del
                  Valles ( Barcelona ).
                </div>
              </div>

              <div className='curriculum-box'>
                <p>Experiencia profesional</p>
                <hr />
                <div className='curriculum-item'>
                  <p>Desde 10/2015 hasta la 31/01/2019</p>
                  -Delineante en Sider ingenieria. Empresa dedicada al diseño de útiles de 	procesado de   chapa.
                </div>
                <div className='curriculum-item'>
                  <p>Durante el mes de octubre de 2015</p>
                  -Delineante de caldereria en Eduve Mantenimientos.
                </div>
                <div className='curriculum-item'>
                  <p>Desde 10/2015 hasta la 31/01/2019</p>
                  -Delineante en Sider ingenieria. Empresa dedicada al diseño de útiles de 	procesado de   chapa.
                </div>
                <div className='curriculum-item'>
                  <p>Durante el mes de octubre de 2015</p>
                  -Delineante de caldereria en Eduve Mantenimientos.
                </div>
                <div className='curriculum-item'>
                  <p>Desde 10/2015 hasta la 31/01/2019</p>
                  -Delineante en Sider ingenieria. Empresa dedicada al diseño de útiles de 	procesado de   chapa.
                </div>
                <div className='curriculum-item'>
                  <p>Durante el mes de octubre de 2015</p>
                  -Delineante de caldereria en Eduve Mantenimientos.
                </div>
              </div>
            </div>
          </div>
        </section>

      </div >
    </>
  )
}

/*
import Curriculum from '../../../assets/images/Curriculum02.jpg';
<div className='curriculum'>
  <img src={Curriculum} alt='curriculum vitae'></img>
</div>
*/



