import React from 'react';
import '../../../assets/styles/global.css';
import '../../../assets/styles/botones.css';
import './curriculum.css';
import { useState } from 'react';

export default function Curriculum() {

  const [curriculumStyle, setCurriculumStyle] = useState("curriculumOculto")

  const mostrarCurriculum = () => {
    if (curriculumStyle === 'curriculumOculto') {
      setCurriculumStyle('curriculumVisto');
    } else {
      setCurriculumStyle('curriculumOculto');
    }
  }

  return (
    <>
      <div className='body-sobreMi'>
        <section className='seccion-general '>
          <p className='titulo bold'>Currículum IT</p>
          <hr className='hr01' />
          <div className='text-box'>
            <p className='text-content'>
              FORMACIÓN
              <p>Grado Superior de Desarrollo de Aplicaciones Web de 2020 a 2022.</p>
              <p>Cursos cortos de diferentes tecnologías en función de las necesidades que tuve mientras realizaba mis proyectos personales como:
                (React, Vue, Java,Spring Boot, Docker)
              </p>
            </p>
            <p className='text-content'>
              EXPERIENCIA
              <p>Las prácticas del Modulo de Diseño de Aplicaciones Web las realicé en la empresa Tiresur, en Granada. Me dediqué
                a mejoras y nuevas implementaciones en un Scraper de precios en C# y haciendo cambios de diseño en la página de venta al público Center's Auto.
              </p>
            </p>
          </div>
          <p className='titulo bold'>Currículum anterior a estudiar IT</p>
          <hr className='hr01' />
          <div className='text-box'>
            <p className='text-content'>
              FORMACIÓN
              <p>Curso de Diseño de Piezas de plástico con CATIA V5 Año 2019. (CAD)</p>
              <p>Curso de Diseño de útiles de procesado de chapa (matricería) De 02/2015 al 09/2015.</p>
              <p>FP Grado Superior Diseño en Fabricación mecánica de 10/2011 hasta la 31/01/2013.</p>
            </p>
            <p className='text-content'>
              EXPERIENCIA
              <p> Delineante en Sider Ingenieria (Barcelona) Empresa dedicada al diseño de útiles de procesado de chapa. Desde 10/2015 hasta la 31/01/2019.
                Mozo de almacén en APLI Paper (Barcelona) en diferentes etapas.</p>
              <p>Si tienes interes en ver mi currículum completo clicando en el siguiente botón lo podrás ver.</p>
            </p>
          </div>
          <button className='btn-curriculumm' onClick={mostrarCurriculum} >Desplegar currículum</button>
          <div className={curriculumStyle} >
            <div className='curriculum-box'>
              <div className='curriculumTitulo'><p>Estudios </p></div>
              <div className='curriculum-item'>
                <p>Curso de Diseño de Piezas de plástico con CATIA V5.</p>
                Año 2019 en Centro de Formación Profesional de Automoción CFPA (Martorell, Barcelona)
              </div>
              <div className='curriculum-item'>
                <p>Curso de Diseño de útiles de procesado de chapa (matricería) </p>
                De 02/2015 al 09/2015en la Fundación Ascamm. Utilizando Solidworks y Autocad.
                Duración del curso 700 h con módulo de formación en empresas.
              </div>
              <div className='curriculum-item'>
                <p>FP Grado Superior Diseño en Fabricación mecánica </p>
                Desde 10/2011 hasta la 31/01/2013 FP Grado Superior Diseño en Fabricación mecánica
                Centro: Escola del Treball (Barcelona).
              </div>
              <div className='curriculum-item'>
                <p>Curso de Técnico Auxiliar en Diseño Gráfico</p>
                De octubre de 2006 a mayo de 2007
                ( 684h ). Instituto público Ave María San Cristóbal Carretera de Murcia ( Granada ).
              </div>
              <div className='curriculum-item'>
                <p>Curso de Diseño Gráfico</p>
                De Abril a Mayo de 2006 ( 150h ). Escuela de arte
                granada ( Granada ).
              </div>
              <div className='curriculum-item'>
                <p>Titulo de ( E.S.O )</p>
                De 1996 - 1999. Instituto público Pere Calders en Cerdanyola
                del Valles ( Barcelona ).
              </div>
              <div className='curriculum-item'>
                <p>Titulo de ( E.G.B )</p>
                De 1986 - 1996. Colegio público Serraparera en Cerdanyola del
                Valles ( Barcelona ).
              </div>
            </div>
            <div className='curriculum-box'>
              <div className='curriculumTitulo'> <p>Experiencia profesional</p></div>
              <div className='curriculum-item'>
                <p>Delineante en Sider Ingenieria </p>
                Empresa dedicada al diseño de útiles de procesado de chapa. Desde 10/2015 hasta la 31/01/2019.
                En el departamento de ingeniería me dedicaba a la generación de métodos plan para el diseño del procesado
                de Fabricación de piezas de chapa.
              </div>
              <div className='curriculum-item'>
                <p>Delineante de caldereria en Eduve Mantenimientos</p>
                Durante el mes de octubre de 2015 como parte de las prácticas del curso de Diseño de útiles de procesado de chapa.
              </div>
              <div className='curriculum-item'>
                <p>Mozo de almacén en APLI Paper</p>
                De 2013 a 2015 (Barbera del Valles, Barcelona).
              </div>
              <div className='curriculum-item'>
                <p>Limpiador, cristalero </p>
                De 2009 a 2013 en centro comercial Barnasud (Gava, Barcelona).
              </div>
              <div className='curriculum-item'>
                <p>Mozo de almacén en Coviran </p>
                De 2004 a 2006  en la sección de panadería (Atarfe, Granada).
              </div>
              <div className='curriculum-item'>
                <p>Mozo de almacén en APLI Paper</p>
                De 2001 a 2003 (Barbera del Valles, Barcelona).
              </div>
              <div className='curriculum-item'>
                <p>Dependiente</p>
                De 1998 a 1999 en la tienda de Massimo Dutti en el centro comercial Sant Cugat  (Sant Cugat, Barcelona).
              </div>
              <div className='curriculum-item'>
                <p>Dependiente</p>
                De 1998 a 1998 en la tienda de Batta en el centro comercial Baricentro  (Barbera del Valles, Barcelona).
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

/*
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
              gestión logística y de diseño CAD, de todos modos si tiene interes en ver mi currículum completo lo podrás ver clicando
              en botón que tienes más abajo.
            </p>
            <p className='text-content'>Las prácticas del Modulo de Diseño de Aplicaciones Web las realicé en la empresa Tiresur, en Granada. Me dediqué
              a mejoras y nuevas implementaciones en un Scraper de precios y haciendo cambios de diseño en la página de venta al público Center's Auto.
            </p>
            <button className='btn-curriculumm' onClick={mostrarCurriculum} >Desplegar currículum</button>
            <div className={curriculumStyle} >
              <div className='curriculum-box'>
                <div className='curriculumTitulo'><p>Estudios </p></div>
                <div className='curriculum-item'>
                  <p>Curso de Diseño de Piezas de plástico con CATIA V5.</p>
                  Año 2019 en Centro de Formación Profesional de Automoción CFPA (Martorell, Barcelona)
                </div>
                <div className='curriculum-item'>
                  <p>Curso de Diseño de útiles de procesado de chapa (matricería) </p>
                  De 02/2015 al 09/2015en la Fundación Ascamm. Utilizando Solidworks y Autocad.
                  Duración del curso 700 h con módulo de formación en empresas.
                </div>
                <div className='curriculum-item'>
                  <p>FP Grado Superior Diseño en Fabricación mecánica </p>
                  Desde 10/2011 hasta la 31/01/2013 FP Grado Superior Diseño en Fabricación mecánica
                  Centro: Escola del Treball (Barcelona).
                </div>
                <div className='curriculum-item'>
                  <p>Curso de Técnico Auxiliar en Diseño Gráfico</p>
                  De octubre de 2006 a mayo de 2007
                  ( 684h ). Instituto público Ave María San Cristóbal Carretera de Murcia ( Granada ).
                </div>
                <div className='curriculum-item'>
                  <p>Curso de Diseño Gráfico</p>
                  De Abril a Mayo de 2006 ( 150h ). Escuela de arte
                  granada ( Granada ).
                </div>
                <div className='curriculum-item'>
                  <p>Titulo de ( E.S.O )</p>
                  De 1996 - 1999. Instituto público Pere Calders en Cerdanyola
                  del Valles ( Barcelona ).
                </div>
                <div className='curriculum-item'>
                  <p>Titulo de ( E.G.B )</p>
                  De 1986 - 1996. Colegio público Serraparera en Cerdanyola del
                  Valles ( Barcelona ).
                </div>
              </div>
              <div className='curriculum-box'>
                <div className='curriculumTitulo'> <p>Experiencia profesional</p></div>
                <div className='curriculum-item'>
                  <p>Delineante en Sider Ingenieria </p>
                  Empresa dedicada al diseño de útiles de procesado de chapa. Desde 10/2015 hasta la 31/01/2019.
                  En el departamento de ingeniería me dedicaba a la generación de métodos plan para el diseño del procesado
                  de Fabricación de piezas de chapa.
                </div>
                <div className='curriculum-item'>
                  <p>Delineante de caldereria en Eduve Mantenimientos</p>
                  Durante el mes de octubre de 2015 como parte de las prácticas del curso de Diseño de útiles de procesado de chapa.
                </div>
                <div className='curriculum-item'>
                  <p>Mozo de almacén en APLI Paper</p>
                  De 2013 a 2015 (Barbera del Valles, Barcelona).
                </div>
                <div className='curriculum-item'>
                  <p>Limpiador, cristalero </p>
                  De 2009 a 2013 en centro comercial Barnasud (Gava, Barcelona).
                </div>
                <div className='curriculum-item'>
                  <p>Mozo de almacén en Coviran </p>
                  De 2004 a 2006  en la sección de panadería (Atarfe, Granada).
                </div>
                <div className='curriculum-item'>
                  <p>Mozo de almacén en APLI Paper</p>
                  De 2001 a 2003 (Barbera del Valles, Barcelona).
                </div>
                <div className='curriculum-item'>
                  <p>Dependiente</p>
                  De 1998 a 1999 en la tienda de Massimo Dutti en el centro comercial Sant Cugat  (Sant Cugat, Barcelona).
                </div>
                <div className='curriculum-item'>
                  <p>Dependiente</p>
                  De 1998 a 1998 en la tienda de Batta en el centro comercial Baricentro  (Barbera del Valles, Barcelona).
                </div>
              </div>
            </div>
          </div>
        </section>

      </div >
    </>
*/