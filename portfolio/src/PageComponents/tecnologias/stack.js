import React from 'react';
import './stack.css'
import '../../assets/styles/global.css'
import LogoHTML from '../../assets/images/Logos_tecnologia/logo_html.png'
import Logojs from '../../assets/images/Logos_tecnologia/logo_js.png'
import LogoCSS from '../../assets/images/Logos_tecnologia/logo_css.png'
import LogoNode from '../../assets/images/Logos_tecnologia/logo_node.png'
import LogoReact from '../../assets/images/Logos_tecnologia/logo_react.png'
import LogoVue from '../../assets/images/Logos_tecnologia/logo_vue.png'
import LogoAxios from '../../assets/images/Logos_tecnologia/logo_axios.png'
import LogoJava from '../../assets/images/Logos_tecnologia/logo_java.png'
import LogoSpring from '../../assets/images/Logos_tecnologia/logo_spring.png'
import LogoSql from '../../assets/images/Logos_tecnologia/logo_sql.png'
import LogoJpa from '../../assets/images/Logos_tecnologia/logo_jpa.png'
import Logodocker from '../../assets/images/Logos_tecnologia/logo_docker.png'
import LogoApache from '../../assets/images/Logos_tecnologia/logo_apache.png'


export default function Stack() {
  const estilo01 = { fontSize: '1.5em' };
  return (
    <>
      <div id='body'>
        <section className='sobreMi-boxSkills box'>
          <p className='titulo bold'>Tecnologías</p>
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
          <div className='sobreMi-boxTecnologias'>
            <div className='sobreMi-Skills'>
              En el Modulo de formación profesional utilizamos las siguientes Tecnologías:
              <br />
              <ul>
                <p style={estilo01}>FrontEnd</p>
                <hr />
                <img className='logos' src={LogoHTML}  alt='Logo de HTML'/>
                <img className='logos' src={LogoReact}  alt='Logo de HTML'/>
                <img className='logos' src={LogoVue}  alt='Logo de HTML'/>
                <img className='logos' src={LogoAxios}  alt='Logo de HTML'/>
                <img className='logos' src={LogoJava}  alt='Logo de HTML'/>
                <img className='logos' src={LogoSpring}  alt='Logo de HTML'/>
                <img className='logos' src={LogoSql}  alt='Logo de HTML'/>
                <img className='logos' src={LogoJpa}  alt='Logo de HTML'/>
                <img className='logos' src={Logodocker}  alt='Logo de HTML'/>
                <img className='logos' src={LogoApache}  alt='Logo de HTML'/>

                <p>HTML</p>
                <p>CSS</p>
                <p>Javascript</p>
                <p>JQuery</p>
                <p>AJAX</p>
              </ul>
              <ul>
                <p style={estilo01}>BackEnd</p>
                <hr />
                <img className='logos' src={Logojs}  alt='Logo de HTML'/>

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
                <img className='logos' src={LogoCSS}  alt='Logo de HTML'/>
                <img className='logos' src={LogoNode}  alt='Logo de HTML'/>
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
      </div>
    </>
  )
}

