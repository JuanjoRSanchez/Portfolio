import React from 'react';
import './sobreMi.css'
import '../../assets/styles/global.css'
import '../../assets/styles/botones.css'

export default function Tecnologias() {
  const estilo01 = { fontSize: '1.5em' };
  return (
    <>
      <div id='body'>
        <section className='sobreMi-boxSkills box'>
          <p className='titulo'>Tecnologías</p>
          <div className='sobreMi-curriculum'>
            Aquí quiero mostrar las tecnologías con las que he trabajado durante mi formación en el módulo
            de Diseño de Aplicaciones Web más los trabajos a modo de prácticas que he realizado por mi cuenta.
          </div>
          <br />
          <br />
          <div className='sobreMi-boxTecnologias'>
            <div className='sobreMi-Skills'>
              En el Modulo de formación profesional utilizamos las siguientes Tecnologías:
              <br />
              <ul>
                <p style={estilo01}>FrontEnd</p>
                <hr />
                <p>HTML</p>
                <p>CSS</p>
                <p>Javascript</p>
                <p>JQuery</p>
                <p>AJAX</p>
              </ul>
              <ul>
                <p style={estilo01}>BackEnd</p>
                <hr />
                <p>Java</p>
                <p>SQL (MySql)</p>
                <p>Spring Boot</p>
                <p>JPA</p>
              </ul>
            </div>
            <div className='sobreMi-Skills'>
              Tecnologías con las que estoy realizando mis proyectos personales actualmente:
              <br />
              <ul>
                <p style={estilo01}>FrontEnd</p>
                <hr />
                <p>React</p>
                <p>Vue</p>
                <p>Figma</p>
              </ul>
              <ul>
                <p style={estilo01}>BackEnd</p>
                <hr />
                <p>Spring Boot</p>
                <p>JPA</p>
              </ul>
            </div>
          </div>
        </section>
        <section className='sobreMi-boxCurriculum box'>
          <p id='titulo'>Curriculum</p>
          <div className='sobreMi-curriculum '>
            Mi experiencia laboral no está relacionada con el sector de la Informática más allá de
            su uso como herramienta para Diseño CAD, así que si tiene interés en ver mi currículum puede clicar
            el botón de currículum y se desplegará un resumen.
          </div>
          <br />
          <button className='btn-curriculum'>
            Desplegar currículum
          </button>
          <img id='curriculum' src='' alt='currículum'></img>
        </section>
      </div>
    </>
  )
}

