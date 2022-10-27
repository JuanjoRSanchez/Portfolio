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
  return (
    <>
      <div id='body'>
        <section className='sobreMi-boxSkills box'>
          <div className='box_front'>
            <div className='title'>FrontEnd</div>
            <img className='deg0 ' src={Logojs} alt='Logo de HTML' />
            <img className='deg51 ' src={LogoCSS} alt='Logo de HTML' />
            <img className='deg103 ' src={LogoNode} alt='Logo de HTML' />
            <img className='deg155 ' src={LogoHTML} alt='Logo de HTML' />
            <img className='deg206 ' src={LogoReact} alt='Logo de HTML' />
            <img className='deg258 ' src={LogoVue} alt='Logo de HTML' />
            <img className='deg310 ' src={LogoAxios} alt='Logo de HTML' />
          </div>
          <div className='box_back'>
            <div className='title'>BackEnd</div>
            <img className='pos0' src={LogoJava} alt='Logo de HTML' />
            <img className='pos1' src={LogoSpring} alt='Logo de HTML' />
            <img className='pos2' src={LogoSql} alt='Logo de HTML' />
            <img className='pos3' src={LogoJpa} alt='Logo de HTML' />
          </div>
          <div className='box_despliegue'>
            <div className='title'>Despliegue</div>
            <img className='logos' src={Logodocker} alt='Logo de HTML' />
            <img className='logos' src={LogoApache} alt='Logo de HTML' />
          </div>
        </section>
      </div>
    </>
  )
}

